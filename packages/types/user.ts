// packages/types/user.ts

export interface User {
  id: string;
  fullName: string;
  email: string;
  username: string;
  createdAt?: string | Date;
  avatarUrl?: string;
}
