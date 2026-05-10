export interface User {
  id: string;
  email: string;
  username: string;
  displayName: string | null;
  passwordHash: string;
  profileMediaId: string | null;
  emailVerified: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface UserCreate {
  email: string;
  username: string;
  password: string;
  displayName?: string | null;
  profileMediaId?: string | null;
}

export interface UserUpdate {
  email?: string;
  username?: string;
  displayName?: string | null;
  password?: string;
  profileMediaId?: string | null;
  emailVerified?: boolean;
}

export interface UserResponse {
  id: string;
  email: string;
  username: string;
  displayName: string | null;
  profileMediaId: string | null;
  emailVerified: boolean;
  createdAt: string;
  updatedAt: string;
}

export enum AccountStatus {
  ACTIVE = "ACTIVE",
  SUSPENDED = "SUSPENDED",
  PENDING_VERIFICATION = "PENDING_VERIFICATION",
}

// =========================================
// PELAPORAN
// =========================================

export interface Pelaporan {
  reportId: string;
  userId: string;
  konten: string;
  mediaId: string | null;
  kategoriMasalah: string;
  tipePost: string;
  lokasi: string;
  tanggalPembuatan: Date;
  replyPost: string | null;
  status: string;
}

export interface PelaporanCreate {
  userId: string;
  konten: string;
  mediaId?: string | null;
  kategoriMasalah: string;
  tipePost: string;
  lokasi: string;
}

export interface PelaporanUpdate {
  konten?: string;
  mediaId?: string | null;
  kategoriMasalah?: string;
  tipePost?: string;
  lokasi?: string;
  replyPost?: string | null;
  status?: string;
}

export interface PelaporanResponse {
  reportId: string;
  userId: string;
  konten: string;
  mediaId: string | null;
  kategoriMasalah: string;
  tipePost: string;
  lokasi: string;
  tanggalPembuatan: string;
  replyPost: string | null;
  status: string;
}

// =========================================
// MEDIA
// =========================================

export interface Media {
  mediaId: string;
  reportId: string;
  mediaType: string;
  fileUrl: string;
  createdAt: Date;
}

export interface MediaCreate {
  reportId: string;
  mediaType: string;
  fileUrl: string;
}

export interface MediaUpdate {
  mediaType?: string;
  fileUrl?: string;
}

export interface MediaResponse {
  mediaId: string;
  reportId: string;
  mediaType: string;
  fileUrl: string;
  createdAt: string;
}

// =========================================
// AKSI
// =========================================

export interface Aksi {
  aksiId: string;
  reportId: string;
  userId: string;
  konten: string;
  mediaId: string | null;
  kategoriMasalah: string;
  titikKumpul: string;
  waktuPelaksanaan: Date;
  statusAksi: string;
}

export interface AksiCreate {
  reportId: string;
  userId: string;
  konten: string;
  mediaId?: string | null;
  kategoriMasalah: string;
  titikKumpul: string;
  waktuPelaksanaan: Date;
}

export interface AksiUpdate {
  konten?: string;
  mediaId?: string | null;
  kategoriMasalah?: string;
  titikKumpul?: string;
  waktuPelaksanaan?: Date;
  statusAksi?: string;
}

export interface AksiResponse {
  aksiId: string;
  reportId: string;
  userId: string;
  konten: string;
  mediaId: string | null;
  kategoriMasalah: string;
  titikKumpul: string;
  waktuPelaksanaan: string;
  statusAksi: string;
}

// =========================================
// POINT
// =========================================

export interface Point {
  pointId: string;
  userId: string;
  source: string;
  value: number;
  createdAt: Date;
}

export interface PointCreate {
  userId: string;
  source: string;
  value: number;
}

export interface PointUpdate {
  source?: string;
  value?: number;
}

export interface PointResponse {
  pointId: string;
  userId: string;
  source: string;
  value: number;
  createdAt: string;
}

// =========================================
// BADGE
// =========================================

export interface Badge {
  badgeId: string;
  badgeName: string;
  description: string;
  createdAt: Date;
}

export interface BadgeCreate {
  badgeName: string;
  description: string;
}

export interface BadgeUpdate {
  badgeName?: string;
  description?: string;
}

export interface BadgeResponse {
  badgeId: string;
  badgeName: string;
  description: string;
  createdAt: string;
}

// =========================================
// CERTIFICATE
// =========================================

export interface Certificate {
  certificateId: string;
  userId: string;
  title: string;
  file: string;
  createdAt: Date;
}

export interface CertificateCreate {
  userId: string;
  title: string;
  file: string;
}

export interface CertificateUpdate {
  title?: string;
  file?: string;
}

export interface CertificateResponse {
  certificateId: string;
  userId: string;
  title: string;
  file: string;
  createdAt: string;
}

// =========================================
// REWARD
// =========================================

export interface Reward {
  rewardId: string;
  userId: string;
  pointId: string;
  badgeId: string;
  certificateId: string;
  createdAt: Date;
}

export interface RewardCreate {
  userId: string;
  pointId: string;
  badgeId: string;
  certificateId: string;
}

export interface RewardUpdate {
  pointId?: string;
  badgeId?: string;
  certificateId?: string;
}

export interface RewardResponse {
  rewardId: string;
  userId: string;
  pointId: string;
  badgeId: string;
  certificateId: string;
  createdAt: string;
}

export enum ReportStatus {
  OPEN = "OPEN",
  IN_PROGRESS = "IN_PROGRESS",
  RESOLVED = "RESOLVED",
  CLOSED = "CLOSED",
}

export enum MediaType {
  IMAGE = "IMAGE",
  VIDEO = "VIDEO",
  DOCUMENT = "DOCUMENT",
}

export enum AksiStatus {
  PENDING = "PENDING",
  ACTIVE = "ACTIVE",
  COMPLETED = "COMPLETED",
  CANCELLED = "CANCELLED",
}
