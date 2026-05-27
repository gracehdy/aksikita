// search-report.dto.ts
import { IsOptional } from 'class-validator';

export class SearchReportDto {
  @IsOptional()
  keywords: [string];
}
