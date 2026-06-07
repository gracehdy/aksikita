import { Injectable } from '@nestjs/common';
import { CreateReportRequest } from './dto/create-report.dto';
import { PrismaService } from '../prisma/prisma.service';
import { Report } from '../generated/prisma/client';

@Injectable()
export class ReportService {
  constructor(private prismaClient: PrismaService) {}

  async create(request: CreateReportRequest, userId: string) {
    const newReport: Report = await this.prismaClient.report.create({
      data: {
        category: request.category,
        description: request.description,
        location: request.location,
        title: request.title,
        postType: false,
        userId: userId,
        media:
          request.image && request.image.length > 0
            ? {
                create: request.image.map((url) => ({ url })),
              }
            : undefined,
      },
    });

    return newReport;
  }

  async findAll(): Promise<Report[]> {
    const allReports: Report[] = await this.prismaClient.report.findMany({
      include: {
        user: true,
        media: true,
      },
    });
    return allReports;
  }

  async findOne(id: string): Promise<Report | null> {
    const result: Report | null = await this.prismaClient.report.findUnique({
      where: { id: id },
      include: {
        user: true,
        media: true,
        comments: {
          include: {
            user: true,
          },
          orderBy: { createdAt: 'desc' },
        },
      },
    });

    return result;
  }
}
