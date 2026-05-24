import { Injectable, BadRequestException, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { PrismaService } from '../prisma/prisma.service.ts';
import { 
  RegisterRequest, 
  RegisterResponse, 
  LoginRequest, 
  LoginResponse, 
  JwtPayload, 
  User 
} from './auth.contract';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService, 
    private jwt: JwtService
  ) {}

  // 1. REGISTER
  async register(dto: RegisterRequest): Promise<RegisterResponse> {
    const { fullName, email, username, password } = dto;

    if (!fullName || !email || !username || !password) {
      throw new BadRequestException('Please provide all required fields');
    }

    const existingUser = await this.prisma.user.findFirst({
      where: {
        OR: [{ email }, { username }],
      },
    });

    if (existingUser) {
      throw new BadRequestException('User already exists');
    }

    const hashed = await bcrypt.hash(password, 10);
    
    await this.prisma.user.create({
      data: { fullName, email, username, password: hashed },
    });

    return {
      message: 'Account created successfully',
    };
  }

  // 2. LOGIN
  async login(loginData: LoginRequest): Promise<LoginResponse> {
    const { usernameOrEmail, password } = loginData;

    if (!usernameOrEmail || !password) {
      throw new BadRequestException('Username/Email and password are required');
    }

    const user = await this.prisma.user.findFirst({
      where: {
        OR: [{ email: usernameOrEmail }, { username: usernameOrEmail }],
      },
    });

    if (!user || !(await bcrypt.compare(password, user.password))) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const payload: JwtPayload = { 
      sub: user.id, 
      username: user.username 
    };

    const sanitisedUser: User = {
      id: user.id,
      fullName: user.fullName,
      email: user.email,
      username: user.username,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    };

    return {
      access_token: this.jwt.sign(payload),
      user: sanitisedUser,
    };
  }
}