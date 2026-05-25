import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PelaporanModule } from './pelaporan/pelaporan.module';
import { AchievementsModule } from './achievements/achievements.module';
import { PrismaModule } from './prisma/prisma.module';
import { AchivementsController } from './achivements/achivements.controller';

@Module({
  imports: [PelaporanModule, AchievementsModule, PrismaModule],
  controllers: [AppController, AchivementsController],
  providers: [AppService],
})
export class AppModule {}
