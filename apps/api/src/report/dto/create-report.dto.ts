// create-report.dto.ts
import { IsString } from 'class-validator';
import { CreatePelaporanInterface } from '@aksikita/types';

export class CreatePelaporanRequest implements CreatePelaporanInterface {
  @IsString()
  category: string;

  @IsString()
  description: string;

  @IsString()
  location: string;

  @IsString()
  title: string;
}
