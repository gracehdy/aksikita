import { Module } from '@nestjs/common';
import { PelaporanController } from './report.controller';
import { PelaporanService } from './report.service';

@Module({
  imports: [],
  controllers: [PelaporanController],
  providers: [PelaporanService],
})
export class PelaporanModule {}
