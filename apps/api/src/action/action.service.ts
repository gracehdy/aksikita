import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateActionDto } from './dto/create-action.dto';
import {
  Action,
  Report,
  User,
  Media
} from '../generated/prisma/client';

type ActionWithReport = Action & {
  report: Report & { user: User; media: Media[] };
  volunteers?: Array<{ id: number}>;
  requiredPeople?: number | null;
  content?: string | null;
};

@Injectable()
export class ActionService {
  constructor(private prisma: PrismaService) {}

  private mapActionToReportView(action: ActionWithReport) {
    return {
      id: action.report.id,
      actionId: action.id,
      title: action.report.title,
      description: action.report.description,
      category: action.report.category,
      location: action.report.location,
      createdAt: action.report.createdAt,
      author: {
        name:
          action.report.user.displayName ||
          action.report.user.username ||
          'Pengguna',
      },
      media: action.report.media,
      status: '',
      volunteerAction: {
        id: action.id,
        scheduledDate: action.scheduledAt,
        requiredPeople: action.requiredPeople ?? 0,
        registeredPeople: action.volunteers?.length ?? 0,
        notes: action.content ?? '',
        status: '',
      },
    };
  }

  async createAction(data: CreateActionDto, userId: string): Promise<Action> {
    return this.prisma.action.create({
      data: {
        content: data.additionalInfo,
        mediaId: data.mediaId ?? '',
        assemblyPoint: data.meetingPoint,
        scheduledAt: data.date,
        requiredPeople: Number(data.requiredPeople) || 0,
        report: { connect: { id: data.reportId } },
        user: { connect: { id: userId } },
      },
    });
  }

  async findAll() {
    const actions = await this.prisma.action.findMany({
      include: {
        report: {
          include: {
            user: true,
            media: true,
          },
        },
        volunteers: true,
      },
    });

    return actions.map((action) => this.mapActionToReportView(action as ActionWithReport));
  }

  async findByReportId(reportId: string) {
    const action = await this.prisma.action.findFirst({
      where: { reportId },
      include: {
        report: {
          include: {
            user: true,
            media: true,
          },
        },
        volunteers: true,
      },
    });

    if (!action) return null;

    return this.mapActionToReportView(action as ActionWithReport);
  }
}
