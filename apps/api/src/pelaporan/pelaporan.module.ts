import { Module } from '@nestjs/common';
import { PelaporanService } from './pelaporan.service';
import { PelaporanController } from './pelaporan.controller';

@Module({
  controllers: [PelaporanController],
  providers: [PelaporanService],
})
export class PelaporanModule {}
