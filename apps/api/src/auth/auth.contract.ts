export type {
  User,
  RegisterRequest,
  LoginRequest,
  RegisterResponse,
  LoginResponse,
  JwtPayload,
} from '@aksikita/types';

// export interface User {
//   id: string;
//   fullName: string;
//   email: string;
//   username: string;
//   createdAt: string | Date;
//   updatedAt: string | Date;
// }

// export interface RegisterRequest {
//   fullName: string;
//   email: string;
//   username: string;
//   password?: string;
// }

// export interface LoginRequest {
//   usernameOrEmail: string;
//   password?: string;
// }

// export interface RegisterResponse {
//   message: string;
// }

// export interface LoginResponse {
//   access_token: string;
//   user: User;
// }

// export interface JwtPayload {
//   sub: string;
//   username: string;
//   iat?: number;
//   exp?: number;
// }
