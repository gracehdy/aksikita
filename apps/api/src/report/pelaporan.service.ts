import { Injectable } from '@nestjs/common';
import { CreatePelaporanRequest } from './dto/create-pelaporan.dto';
import { PrismaService } from '../prisma/prisma.service';
import { ReportModel } from '../generated/prisma/models';

@Injectable()
export class PelaporanService {
  constructor(private prismaClient: PrismaService) {}

  create(createPelaporanDto: CreatePelaporanRequest) {
    // Logic to save the report record
  }

  async findAll(): Promise<ReportModel[]> {
    // Logic to return an array of all reports
    const allReports = await this.prismaClient.report.findMany();
    return allReports;
  }

  async findOne(id: string): Promise<ReportModel | null> {
    // Logic to find a report by ID
    const result: ReportModel | null =
      await this.prismaClient.report.findUnique({
        where: { id: id },
      });

    return result;
  }
}
