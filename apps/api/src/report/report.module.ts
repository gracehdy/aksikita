import { Module } from '@nestjs/common';
import { ReportController, ReportSearchController } from './report.controller';
import { ReportService } from './report.service';
import { SearchModule } from './search/search.module';

@Module({
  imports: [SearchModule],
  controllers: [ReportController, ReportSearchController],
  providers: [ReportService],
})
export class ReportModule {}
