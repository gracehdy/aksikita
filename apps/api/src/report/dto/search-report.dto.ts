// search-report.dto.ts
import { IsOptional } from 'class-validator';

export class SearchPelaporanDto {
  @IsOptional()
  keywords: [string];
}
