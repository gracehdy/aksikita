import {
  Controller,
  Post,
  Body,
  HttpException,
  HttpStatus,
  Request,
  UseGuards,
  NotFoundException,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { PrismaService } from '../prisma/prisma.service';
import type { RegisterVolunteerDto } from './dto/register-volunteer.dto';

@Controller('volunteers')
export class VolunteerController {
  constructor(private readonly prisma: PrismaService) {}

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
    console.log("Mencari Action dengan ID:", dto.actionId);
    const action = await this.prisma.action.findUnique({ where: { id: dto.actionId } });
    if (!action) {
      const allActions = await this.prisma.action.findMany();
      console.log("Daftar semua ID action yang ada di database:", allActions.map(a => a.id));
      throw new NotFoundException('Action not found');
    }

    try {
      const registration = await this.prisma.volunteer.create({
        data: {
          action: { connect: { id: dto.actionId } },
          fullName: dto.fullName,
          email: dto.email,
          phone: dto.phone,
          healthCondition: dto.healthCondition ?? '',
          reason: dto.reason ?? '',
          user: {connect: { id: req.user?.id }},
        },
      });

      return {
        message: 'Pendaftaran relawan diterima.',
        registration,
      };
    } catch (err: unknown) {
      console.error('Error creating volunteer registration:', err);

      const detail =
        err instanceof Error ? err.message : String(err);

      throw new HttpException(
        { message: 'Failed to register volunteer', detail },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
