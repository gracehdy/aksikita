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

@Controller('reports')
export class ReportController {
  constructor(private readonly pelaporanService: ReportService) {}

  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(@UploadedFile() file: Express.Multer.File) {
    return { filename: file.filename };
  }

  @Post()

  @UseGuards(AuthGuard('jwt'))
  create(@Body() createPelaporanRequest: CreateReportRequest, @Req() req) {
    const userId: string = req.user.id ?? '';
    return this.pelaporanService.create(createPelaporanRequest, userId);
  }
  
  @Get()
  findAll() {
    return this.pelaporanService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pelaporanService.findOne(id);
  }
}
