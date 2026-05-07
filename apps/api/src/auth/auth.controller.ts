import { Controller, Post, Body, Res } from '@nestjs/common'; // Tambahkan Res di sini
import { AuthService } from './auth.service';
import type { Response } from 'express'; // Impor tipe Response dari express

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async register(@Body() registerDto: any) {
    return this.authService.register(registerDto);
  }

  @Post('login')
  async login(
    @Body() loginDto: any, 
    @Res({ passthrough: true }) res: Response // Gunakan tipe data Response
  ) {
    const result = await this.authService.login(loginDto);
    
    // Tentukan durasi cookie (30 hari jika rememberMe, selain itu 1 hari)
    const maxAge = result.rememberMe 
      ? 30 * 24 * 60 * 60 * 1000 
      : 24 * 60 * 60 * 1000;

    // Simpan JWT ke dalam cookie
    res.cookie('token', result.token, {
      httpOnly: true, // Melindungi dari XSS
      secure: process.env.NODE_ENV === 'production', // Hanya aktif di HTTPS saat production
      sameSite: 'strict', // Melindungi dari CSRF
      maxAge: maxAge,
    });

    // Mengembalikan data user ke frontend
    return { 
      message: result.message, 
      user: result.user 
    };
  }

  @Post('logout')
  async logout(@Res({ passthrough: true }) res: Response) {
    res.clearCookie('token');
    return { message: 'Logged out successfully' };
  }
}