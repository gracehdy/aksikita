import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  UseGuards,
  Req,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { ReportService } from './report.service';
import { CreateReportRequest } from './dto/create-report.dto';
import { AuthGuard } from '@nestjs/passport';
import { FileInterceptor } from '@nestjs/platform-express/multer/interceptors/file.interceptor';
import type { Request } from 'express';

interface RequestWithUser extends Request {
  user: {
    id: string;
    [key: string]: any;
  };
}

@Controller('reports')
export class ReportController {
  constructor(private readonly pelaporanService: ReportService) {}

  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  uploadFile(@UploadedFile() file: Express.Multer.File) {
    console.log('File diterima:', file);
    if (!file) {
      console.log('File tidak ditemukan dalam request!');
      return { message: 'File gagal diterima' };
    }
    return { filename: file.filename };
  }

  @Post()
  @UseGuards(AuthGuard('jwt'))
  create(
    @Body() createPelaporanRequest: CreateReportRequest,
    @Req() req: RequestWithUser,
  ): Promise<any> {
    const userId: string = req.user.id ?? '';
    return this.pelaporanService.create(createPelaporanRequest, userId);
  }

  @Get()
  @UseGuards(AuthGuard('jwt'))
  findAll(): Promise<any> {
    return this.pelaporanService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<any> {
    return this.pelaporanService.findOne(id);
  }
}
