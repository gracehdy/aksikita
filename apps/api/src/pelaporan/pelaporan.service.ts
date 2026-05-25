import { Injectable } from '@nestjs/common';
import { CreatePelaporanRequest } from './dto/create-pelaporan.dto';
import { PrismaService } from '../prisma/prisma.service';
import { pelaporanModel } from '../generated/prisma/models';

@Injectable()
export class PelaporanService {
  constructor(private prismaClient: PrismaService) {}

  create(createPelaporanDto: CreatePelaporanRequest) {
    // Logic to save the report record
  }

  async findAll(): Promise<pelaporanModel[]> {
    // Logic to return an array of all reports
    const allReports = await this.prismaClient.pelaporan.findMany();
    return allReports;
  }

  async findOne(id: string): Promise<pelaporanModel | null> {
    // Logic to find a report by ID
    const result: pelaporanModel | null =
      await this.prismaClient.pelaporan.findUnique({
        where: { report_id: id },
      });

    return result;
  }
}
