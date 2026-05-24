import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PelaporanModule } from './pelaporan/pelaporan.module';
import { AchievementsModule } from './achievements/achievements.module';

@Module({
  imports: [PelaporanModule, AchievementsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
