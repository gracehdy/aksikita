import { User } from '@aksikita/types';
import { IsDateString, IsEmail, IsString } from 'class-validator';

export class UserDto implements User {
  constructor(i: string, e: string, fn: string, un: string, ca?: Date) {
    this.id = i;
    this.email = e;
    this.fullName = fn;
    this.username = un;
    if (ca) {
      this.createdAt = ca;
    }
  }

  @IsString()
  id: string;

  @IsEmail()
  email: string;

  @IsString()
  fullName: string;

  @IsString()
  username: string;

  @IsDateString()
  createdAt?: string | Date | undefined;
}
