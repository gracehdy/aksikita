import {
  Controller,
  Get,
  NotFoundException,
  Request,
  Param,
  UseGuards,
} from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto } from './dto/user.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @UseGuards(JwtAuthGuard)
  @Get('me')
  async me(@Request() req): Promise<UserDto> {
    const id = req.user.id;
    const result = await this.userService.findById(id);

    if (result === null) {
      throw new NotFoundException(`User with id${id} not found`);
    }

    return result;
  }

  @Get('displayName/:id')
  async displayName(@Param('id') id: string) {
    return await this.userService.getDisplayName(id);
  }
}
