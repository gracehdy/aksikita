import { UserDto } from './user.dto';

// DTO untuk bagian statistik atas (3 angka utama)
export class UserProfileStatsDto {
  totalAksiSelesai!: number;
  totalLaporanDibuat!: number;
  totalBadgeDiraih!: number;
}

// DTO untuk bagian Poin Kontribusi & Progress Bar
export class PoinKontribusiDto {
  currentPoin!: number;
  targetPoin!: number;
}

// DTO untuk item di dalam list Badge Pencapaian
export class UserBadgeDto {
  id!: string;
  name!: string;
  description!: string;
  isEarned!: boolean;
}

// DTO untuk item di dalam list Sertifikat
export class UserSertifikatDto {
  id!: string;
  title!: string;
  file!: string; // URL atau path ke file sertifikat untuk diunduh
}

// Tipe Response Utama yang akan dikirim ke Frontend
export class UserProfileResponseDto {
  user!: UserDto; // Memakai UserDto yang sudah kamu punya untuk data dasar
  stats!: UserProfileStatsDto;
  kontribusi!: PoinKontribusiDto;
  badges!: UserBadgeDto[];
  sertifikat!: UserSertifikatDto[]; // <-- Sekarang array sertifikat sudah masuk di sini
}