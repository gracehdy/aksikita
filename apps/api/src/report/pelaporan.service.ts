import { Injectable } from '@nestjs/common';
import { CreatePelaporanRequest } from './dto/create-pelaporan.dto';
import { PrismaService } from '../prisma/prisma.service';
import { Report } from '../generated/prisma/client/client';

@Injectable()
export class PelaporanService {
  constructor(private prismaClient: PrismaService) {}

  create(createPelaporanDto: CreatePelaporanRequest) {
    // Logic to save the report record
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
