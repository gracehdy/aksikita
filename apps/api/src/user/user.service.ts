import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { UserDto } from './dto/user.dto';

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
      },
    });

    if (queryResult === null) return null;

    return new UserDto(
      queryResult.id,
      queryResult.email,
      queryResult.displayName ?? '',
      queryResult.username,
    );
  }
}
