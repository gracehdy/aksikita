// create-report.dto.ts
import { IsString } from 'class-validator';
import { CreateReportInterface } from '@aksikita/types';

export class CreateReportRequest implements CreateReportInterface {
  @IsString()
  category: string;

  @IsString()
  description: string;

  @IsString()
  location: string;

  @IsString()
  title: string;

  @IsString()
  reportId: string;
}
