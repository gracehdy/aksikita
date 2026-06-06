import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service'; // Pastikan path ini benar

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
    });
  }
}