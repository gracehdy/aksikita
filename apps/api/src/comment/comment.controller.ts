import {
  Controller,
  Param,
  Post,
  Body,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { CommentService } from './comment.service';

@Controller('reports')
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  @UseGuards(AuthGuard('jwt'))
  @Post('actions/:actionId/comments')
  async createCommentForAction(
    @Param('actionId') actionId: string,
    @Body('text') text: string,
    @Request() req,
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
    @Request() req,
  ) {
    return await this.commentService.create(reportId, text, req.user.id);
  }
}
