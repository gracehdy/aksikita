import {
  Controller,
  Post,
  Body,
  HttpException,
  HttpStatus,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import type { RegisterVolunteerDto } from './dto/register-volunteer.dto';

@Controller('volunteers')
export class VolunteerController {
  @UseGuards(AuthGuard('jwt'))
  @Post('register')
  async register(
    @Body() dto: RegisterVolunteerDto,
    @Request() req,
  ) {
    if (!dto.actionId || !dto.fullName || !dto.email || !dto.phone) {
      throw new HttpException(
        { message: 'Missing required fields' },
        HttpStatus.BAD_REQUEST,
      );
    }

    return {
      message: 'Pendaftaran relawan diterima.',
      registration: {
        actionId: dto.actionId,
        fullName: dto.fullName,
        email: dto.email,
        phone: dto.phone,
        healthCondition: dto.healthCondition,
        reason: dto.reason,
        registeredBy: req.user?.id,
      },
    };
  }
}
