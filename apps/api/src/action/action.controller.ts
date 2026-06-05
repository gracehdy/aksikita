import {
  Controller,
  Post,
  Body,
  HttpException,
  HttpStatus,
  Request,
  UseGuards,
} from '@nestjs/common';
import { ActionService } from './action.service';
import type { CreateActionDto } from './dto/create-action.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('actions')
@UseGuards(AuthGuard('jwt'))
export class ActionController {
  constructor(private readonly actionService: ActionService) {}

  @Post()
  async create(@Body() createActionDto: CreateActionDto, @Request() req) {
    try {
      const userId = req.user.id;
      return await this.actionService.createAction(createActionDto, userId);
    } catch (error) {
      throw new HttpException(
        { message: 'Failed to create action', error: error.message },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
