import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { JwtPayload } from './auth.contract';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(configService: ConfigService) {
    super({
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      jwtFromRequest: (ExtractJwt as any).fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey:
        configService.get<string>('JWT_SECRET') || 'RAHASIA_AKSI_KITA',
    });
  }

  validate(payload: JwtPayload): { id: string; username: string } {
    const start = performance.now();
    const user = { id: payload.sub, username: payload.username };
    const end = performance.now();
    console.log(`JWT Validation Time: ${end - start} ms`);
    return user;
  }
}
