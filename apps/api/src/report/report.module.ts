import { Module } from '@nestjs/common';
import { ReportController } from './report.controller';
import { ReportService } from './report.service';
import { SearchModule } from './search/search.module';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { MulterModule } from '@nestjs/platform-express/multer/multer.module';

@Module({
  imports: [
    SearchModule,
    MulterModule.register({
      storage: diskStorage({
        destination: './uploads',
        filename: (req, file, cb) => {
          const uniqueSuffix =
            Date.now() + '-' + Math.round(Math.random() * 1e9);
          cb(null, `${uniqueSuffix}${extname(file.originalname)}`);
        },
      }),
      limits: {
        fileSize: 10 * 1024 * 1024,
      },
    }),
  ],
  controllers: [ReportController],
  providers: [ReportService],
})
export class ReportModule {}
