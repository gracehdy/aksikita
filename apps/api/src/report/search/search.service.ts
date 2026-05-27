import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class SearchService {
  constructor(private readonly prisma: PrismaService) {}

  async search(keywords: string[]) {
    if (keywords.length === 0) {
      return this.prisma.report.findMany(); // when no keywords, return everything
    }

    const results = await this.prisma.report.findMany({
      where: {
        OR: keywords.map((keyword) => ({
          title: {
            contains: keyword,
            mode: 'insensitive',
          },
        })),
      },
    });

    return results;
  }
}
