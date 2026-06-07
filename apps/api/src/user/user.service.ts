import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { UserDto } from './dto/user.dto';
import { UserProfileResponseDto } from './dto/user-profile.dto'; // <-- Import DTO baru

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async findById(userId: string): Promise<UserDto | null> {
    const queryResult = await this.prisma.user.findUnique({
      where: {
        id: userId,
      },
      select: {
        id: true,
        email: true,
        displayName: true,
        username: true,
        createdAt: true,
      },
    });

    if (queryResult === null) return null;

    return new UserDto(
      queryResult.id,
      queryResult.email,
      queryResult.displayName ?? '',
      queryResult.username,
      queryResult.createdAt,
    );
  }

  async getDisplayName(id: string) {
    const queryResult = await this.prisma.user.findUnique({
      where: {
        id: id,
      },
      select: {
        displayName: true,
      },
    });

    return {
      result: queryResult?.displayName,
    };
  }

  async getUserProfile(userId: string): Promise<UserProfileResponseDto | null> {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
      include: {
        certificates: true,
        rewards: {
          include: {
            badge: true,
          },
        },
      },
    });

    if (!user) return null;

    const userDto = new UserDto(
      user.id,
      user.email,
      user.displayName ?? '',
      user.username,
      user.createdAt,
    );

    const totalLaporanDibuat = await this.prisma.report.count({
      where: { userId },
    });

    const totalAksiSelesai = await this.prisma.action.count({
      where: { userId },
    });

    const aggregatePoints = await this.prisma.point.aggregate({
      where: { userId },
      _sum: {
        value: true,
      },
    });
    const currentPoin = aggregatePoints._sum.value || 0;
    const targetPoin = 1000; // ini itu nanti bisa diubah2, ini aku sesuaiin dulu kayak di UInya

    const allBadges = await this.prisma.badge.findMany();
    const earnedBadgeIds = user.rewards.map((r) => r.badgeId);

    const badges = allBadges.map((b) => ({
      id: b.id,
      name: b.name ?? 'Tanpa Nama',
      description: b.description ?? '',
      isEarned: earnedBadgeIds.includes(b.id),
    }));

    const sertifikat = user.certificates.map((c) => ({
      id: c.id,
      title: c.title ?? 'Sertifikat Tanpa Judul',
      file: c.file ?? '',
    }));

    return {
      user: userDto,
      stats: {
        totalAksiSelesai,
        totalLaporanDibuat,
        totalBadgeDiraih: earnedBadgeIds.length,
      },
      kontribusi: {
        currentPoin,
        targetPoin,
      },
      badges,
      sertifikat,
    };
  }
}
