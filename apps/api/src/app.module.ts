import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PelaporanModule } from './report/pelaporan.module';
import { AchievementsModule } from './achievements/achievements.module';
import { PrismaModule } from './prisma/prisma.module';
import { AchievementsController } from './achievements/achievements.controller';

@Module({
  imports: [PelaporanModule, AchievementsModule, PrismaModule],
  controllers: [AppController, AchievementsController],
  providers: [AppService],
})
export class AppModule {}
