import { IsString, IsOptional, IsUUID } from 'class-validator';
import { CreatePelaporanDto } from '@aksikita/types'; // Your shared lib

export class CreatePelaporanRequest implements CreatePelaporanDto {
  @IsUUID()
  report_id: string;

  @IsUUID()
  user_id: string;

  @IsString()
  @IsOptional()
  konten?: string | null;

  @IsString()
  @IsOptional()
  media_id?: string | null;

  @IsString()
  @IsOptional()
  kategori_masalah?: string | null;

  @IsString()
  @IsOptional()
  tipe_post?: string | null;

  @IsString()
  @IsOptional()
  lokasi?: string | null;

  @IsString()
  @IsOptional()
  reply_post?: string | null;

  @IsString()
  @IsOptional()
  status?: string | null;
}
