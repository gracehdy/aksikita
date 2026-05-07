import { Injectable, Inject, BadRequestException, UnauthorizedException } from '@nestjs/common';
import { DATABASE_CONNECTION } from '../config/database.config';
import { Pool } from 'pg';
import * as bcrypt from 'bcryptjs';
import * as crypto from 'crypto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    @Inject(DATABASE_CONNECTION) private pool: Pool,
    private jwtService: JwtService
  ) {}

  // register
  async register(body: any) {
    const { full_name, email, username, password, confirmPassword } = body;

    if (!full_name || !email || !username || !password || !confirmPassword) {
      throw new BadRequestException('Please provide all required fields');
    }

    if (password !== confirmPassword) {
      throw new BadRequestException('Passwords do not match');
    }
    
    const existingUser = await this.pool.query(
      'SELECT * FROM users WHERE email = $1 OR username = $2', 
      [email, username]
    );
    
    if (existingUser.rows.length > 0) {
      throw new BadRequestException('User already exists');
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const userId = crypto.randomBytes(10).toString('hex'); 

    const newUser = await this.pool.query(
        'INSERT INTO users (id, display_name, email, username, password) VALUES ($1, $2, $3, $4, $5) RETURNING id, display_name, email, username',
        [userId, full_name, email, username, hashedPassword]
    );

    return { 
      message: 'User created successfully', 
      user: newUser.rows[0] 
    };
  }

  //login 
  async login(loginData: any) {
    const { email, password, rememberMe } = loginData;

    if (!email || !password) {
      throw new BadRequestException('Email and password are required');
    }

    const result = await this.pool.query('SELECT * FROM users WHERE email = $1', [email]);
    
    if (result.rows.length === 0) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const user = result.rows[0];

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const expiresIn = rememberMe ? '30d' : '1d';

    const payload = { id: user.id, username: user.username };
    const token = this.jwtService.sign(payload, { expiresIn });

    return {
      message: 'Login successful',
      user: {
        id: user.id,
        display_name: user.display_name,
        email: user.email,
        username: user.username,
      },
      token,
      rememberMe 
    };
  }
}