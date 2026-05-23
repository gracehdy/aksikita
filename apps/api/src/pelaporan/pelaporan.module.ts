import { Module } from '@nestjs/common';
import { PelaporanController } from './pelaporan.controller';

@Module({
  controllers: [PelaporanController]
})
export class PelaporanModule {}
