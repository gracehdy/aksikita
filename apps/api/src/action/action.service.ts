import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateActionDto } from './dto/create-action.dto';
import { Action } from '../generated/prisma/client/client';

@Injectable()
export class ActionService {
  constructor(private prisma: PrismaService) {}

  async createAction(data: CreateActionDto, userId: string): Promise<Action> {
    return this.prisma.action.create({
      data: {
        content: data.additionalInfo,
        mediaId: data.mediaId ?? '',
        assemblyPoint: data.meetingPoint,
        scheduledAt: data.date,
        // Connect existing records using IDs passed in the DTO
        report: { connect: { id: data.reportId } },
        user: { connect: { id: userId } },
      },
    });
  }
}
