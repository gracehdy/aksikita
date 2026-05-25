import { Module } from '@nestjs/common';
import { PelaporanController } from './pelaporan.controller';
import { PelaporanService } from './pelaporan.service';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  imports: [PrismaService],
  controllers: [PelaporanController],
  providers: [PelaporanService],
})
export class PelaporanModule {}
