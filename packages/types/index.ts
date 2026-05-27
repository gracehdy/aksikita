// ==========================================
// USER ENTITIES
// ==========================================

/**
 * Sanitised User object clean of sensitive credentials.
 * Safe for transmission to client applications and frontend storage.
 */
export interface User {
  id: string;
  fullName: string;
  email: string;
  username: string;
  createdAt: string | Date;
  updatedAt: string | Date;
}

// ==========================================
// AUTHENTICATION REQUESTS (DTOs)
// ==========================================

/**
 * Payload configuration for registration endpoint.
 * Matches POST /auth/register
 */
export interface RegisterRequest {
  fullName: string;
  email: string;
  username: string;
  password?: string; // Kept optional for flexible client handling; enforced at boundary
}

/**
 * Payload configuration for authentication verification.
 * Matches POST /auth/login
 */
export interface LoginRequest {
  usernameOrEmail: string;
  password?: string;
}

// ==========================================
// AUTHENTICATION RESPONSES
// ==========================================

/**
 * Response structure following successful account creation.
 */
export interface RegisterResponse {
  message: string;
}

/**
 * Core authentication payload containing bearer token and entity metadata.
 */
export interface LoginResponse {
  access_token: string;
  user: User;
}

// ==========================================
// SYSTEM SECURITY & INTERNAL CONTRACTS
// ==========================================

/**
 * Decoded JSON Web Token structure.
 */
export interface JwtPayload {
  sub: string; // User identifier (UUID/CUID)
  username: string; // Primary identifier
  iat?: number; // Issued at timestamp
  exp?: number; // Expiration timestamp
}

export interface Pelaporan {
  report_id: string;
  user_id: string;
  konten?: string | null;
  media_id?: string | null;
  kategori_masalah?: string | null;
  tipe_post?: string | null;
  lokasi?: string | null;
  tanggal_pembuatan: Date; // Note: Dates arrive as ISO strings over JSON
  reply_post?: string | null;
  status?: string | null;
}

export interface CreatePelaporanInterface {
  category: string;
  description: string;
  location: string;
  title: string;
}

export type UpdatePelaporanDto = Partial<CreatePelaporanInterface>;
