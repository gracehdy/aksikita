import {
  Controller,
  Post,
  Body,
  HttpException,
  HttpStatus,
  Request,
  UseGuards,
  Get,
  Param,
} from '@nestjs/common';
import { ActionService } from './action.service';
import type { CreateActionDto } from './dto/create-action.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('actions')
export class ActionController {
  constructor(private readonly actionService: ActionService) {}
  @Get()
  @UseGuards(AuthGuard('jwt'))
  async findAll() {
    try {
      return await this.actionService.findAll();
    } catch (error: unknown) {
      throw new HttpException(
        { message: 'Failed to fetch actions', error: (error as Error).message },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Get(':id')
  @UseGuards(AuthGuard('jwt'))
  async findOne(@Param('id') id: string) {
    try {
      const result = await this.actionService.findByReportId(id);
      if (!result) {
        throw new HttpException(
          { message: 'Action not found' },
          HttpStatus.NOT_FOUND,
        );
      }
      return result;
    } catch (error: unknown) {
      if (error instanceof HttpException) {
        throw error;
      }
      throw new HttpException(
        { message: 'Failed to fetch action', error: (error as Error).message },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @UseGuards(AuthGuard('jwt'))
  @Post()
  async create(@Body() createActionDto: CreateActionDto, @Request() req) {
    try {
      const userId = req.user.id;
      return await this.actionService.createAction(createActionDto, userId);
    } catch (error: unknown) {
      throw new HttpException(
        { message: 'Failed to create action', error: (error as Error).message },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
