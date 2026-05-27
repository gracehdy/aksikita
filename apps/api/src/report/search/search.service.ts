import { Injectable } from '@nestjs/common';
import { PrismaClient } from '../../generated/prisma/client/client';

@Injectable()
export class SearchService {
  constructor(private readonly prisma: PrismaClient) { }
  
  async search(keywords: string[]) {
    const results = await this.prisma.report.findMany();
  }
}
