import { User } from './user';
export * from './user';

export interface RegisterRequest {
  fullName: string;
  email: string;
  username: string;
  password?: string; 
}


export interface LoginRequest {
  usernameOrEmail: string;
  password?: string;
}

export interface RegisterResponse {
  message: string;
}

export interface LoginResponse {
  access_token: string;
  user: User;
}

export interface JwtPayload {
  sub: string; 
  username: string; 
  iat?: number;
  exp?: number; 
}

export interface VolunteerAction {
  status: string
  registeredPeople?: number
  requiredPeople?: number
  scheduledDate?: string
}

export interface ReportModel {
  id: string
  userId: string
  title: string
  description: string
  category: string
  postType: boolean
  location: string | null
  createdAt: Date
  image?: string
  volunteerAction?: VolunteerAction
}

export interface CreateReportInterface {
  category: string;
  description: string;
  location: string;
  title: string;
}

export type UpdatePelaporanDto = Partial<CreateReportInterface>;
