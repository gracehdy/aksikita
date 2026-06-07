import {
  Controller,
  Get,
  NotFoundException,
  Req,
  Param,
  UseGuards,
} from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto } from './dto/user.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { UserProfileResponseDto } from './dto/user-profile.dto';
import type { Request } from 'express';

interface RequestWithUser extends Request {
  user: {
    id: string;
    [key: string]: any;
  };
}

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @UseGuards(JwtAuthGuard)
  @Get('me')
  async me(@Req() req: RequestWithUser): Promise<UserDto> {
    const id = req.user.id;
    const result = await this.userService.findById(id);

    if (result === null) {
      throw new NotFoundException(`User with id ${id} not found`);
    }

    return result;
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  async getProfile(
    @Req() req: RequestWithUser,
  ): Promise<UserProfileResponseDto> {
    const id = req.user.id;

    const result = await this.userService.getUserProfile(id);

    if (result === null) {
      throw new NotFoundException(`User profile with id ${id} not found`);
    }

    return result;
  }

  @Get('displayName/:id')
  async displayName(@Param('id') id: string) {
    return await this.userService.getDisplayName(id);
  }
}
