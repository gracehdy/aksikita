import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { NotFoundException } from '@nestjs/common';

@Injectable()
export class CommentService {
  constructor(private readonly prisma: PrismaService) {}

  async create(reportId: string, text: string, userId: string) {
    return await this.prisma.comment.create({
      data: {
        text,
        reportId,
        userId,
      },
      include: {
      user: true 
    }
    });
  }

  async createFromAction(actionId: string, text: string, userId: string) {
  console.log("Mencari aksi dengan ID:", actionId);
  const action = await this.prisma.action.findUnique({
    where: { id: actionId },
    select: { reportId: true }
  });

  if (!action) {
    throw new NotFoundException('Aksi tidak ditemukan');
  }
  console.log("Aksi ditemukan, reportId:", action.reportId);
  return await this.create(action.reportId, text, userId);
}

}