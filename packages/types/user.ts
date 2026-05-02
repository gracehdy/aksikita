// packages/types/user.ts

/**
 * Core user entity representing the persisted database record.
 * All fields map directly to the authorised schema.
 */
export interface User {
  id: string; // UUID (Primary Key)
  email: string; // Unique, indexed
  username: string; // Unique, indexed, case-insensitive at DB level
  displayName: string | null; // Maps to "nama lengkap"
  passwordHash: string; // Cryptographic hash only
  profileMediaId: string | null; // Foreign key to media/storage table
  emailVerified: boolean; // Verification status
  createdAt: Date; // Immutable timestamp
  updatedAt: Date; // Mutable timestamp
}

/**
 * Payload shape for user registration.
 * Password is transmitted in plaintext solely for hashing prior to persistence.
 */
export interface UserCreate {
  email: string;
  username: string;
  password: string;
  displayName?: string | null;
  profileMediaId?: string | null;
}

/**
 * Payload shape for profile or credential modification.
 * All fields are optional to support partial updates.
 */
export interface UserUpdate {
  email?: string;
  username?: string;
  displayName?: string | null;
  password?: string;
  profileMediaId?: string | null;
  emailVerified?: boolean;
}

/**
 * Sanitised response shape for API transmission.
 * Excludes password hashes and serialises dates to ISO-8601 strings.
 */
export interface UserResponse {
  id: string;
  email: string;
  username: string;
  displayName: string | null;
  profileMediaId: string | null;
  emailVerified: boolean;
  createdAt: string; // ISO-8601
  updatedAt: string; // ISO-8601
}

/**
 * Enumeration for common account states, if required by your authorisation layer.
 */
export enum AccountStatus {
  ACTIVE = "ACTIVE",
  SUSPENDED = "SUSPENDED",
  PENDING_VERIFICATION = "PENDING_VERIFICATION",
}
