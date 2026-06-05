import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ReportModule } from './report/report.module';
import { AchievementsModule } from './achievements/achievements.module';
import { PrismaModule } from './prisma/prisma.module';
import { AchievementsController } from './achievements/achievements.controller';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { ActionModule } from './action/action.module';

@Module({
  imports: [
    ReportModule,
    AchievementsModule,
    PrismaModule,
    AuthModule,
    UserModule,
    ActionModule,
  ],
  controllers: [AppController, AchievementsController],
  providers: [AppService],
})
export class AppModule {}
