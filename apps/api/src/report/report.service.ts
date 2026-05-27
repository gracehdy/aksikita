import { Injectable } from '@nestjs/common';
import { CreateReportRequest } from './dto/create-report.dto';
import { PrismaService } from '../prisma/prisma.service';
import { Report } from '../generated/prisma/client/client';

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
      },
    });

    return newReport;
  }

  async findAll(): Promise<Report[]> {
    // Logic to return an array of all reports
    const allReports = await this.prismaClient.report.findMany();
    return allReports;
  }

  async findOne(id: string): Promise<Report | null> {
    // Logic to find a report by ID
    const result: Report | null = await this.prismaClient.report.findUnique({
      where: { id: id },
    });

    return result;
  }
}
