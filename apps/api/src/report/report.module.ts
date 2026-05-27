import { Module } from '@nestjs/common';
import { ReportController } from './report.controller';
import { ReportService } from './report.service';
import { SearchModule } from './search/search.module';

@Module({
  imports: [SearchModule],
  controllers: [ReportController],
  providers: [ReportService],
})
export class ReportModule {}
