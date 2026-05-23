import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PelaporanModule } from './pelaporan/pelaporan.module';

@Module({
  imports: [PelaporanModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
