import { ThrottlerModule } from '@nestjs/throttler';
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
import { VolunteerModule } from './volunteer/volunteer.module';
import { join } from 'path';
import { ServeStaticModule } from '@nestjs/serve-static';
import { CommentModule } from './comment/comment.module';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(process.cwd(), 'uploads'),
      serveRoot: '/uploads',
    }),
    ThrottlerModule.forRoot([
      {
        ttl: 60000,
        limit: 100,
      },
    ]),
    ReportModule,
    AchievementsModule,
    PrismaModule,
    AuthModule,
    UserModule,
    ActionModule,
    VolunteerModule,
    CommentModule,
  ],
  controllers: [AppController, AchievementsController],
  providers: [AppService],
})
export class AppModule {}
