import { Controller, Param, Post, Body, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { CommentService } from './comment.service';
import type { Request } from 'express';

interface RequestWithUser extends Request {
  user: {
    id: string;
    [key: string]: any;
  };
}

@Controller('reports')
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  @UseGuards(AuthGuard('jwt'))
  @Post('actions/:actionId/comments')
  async createCommentForAction(
    @Param('actionId') actionId: string,
    @Body('text') text: string,
    @Req() req: RequestWithUser,
  ) {
    return await this.commentService.createFromAction(
      actionId,
      text,
      req.user.id,
    );
  }

  @UseGuards(AuthGuard('jwt'))
  @Post(':reportId/comments')
  async createComment(
    @Param('reportId') reportId: string,
    @Body('text') text: string,
    @Req() req: RequestWithUser,
  ) {
    return await this.commentService.create(reportId, text, req.user.id);
  }
}
