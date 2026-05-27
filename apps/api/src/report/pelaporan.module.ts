import { Module } from '@nestjs/common';
import { PelaporanController } from './pelaporan.controller';
import { PelaporanService } from './pelaporan.service';

@Module({
  imports: [],
  controllers: [PelaporanController],
  providers: [PelaporanService],
})
export class PelaporanModule {}
