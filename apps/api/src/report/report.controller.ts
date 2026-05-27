import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  UseGuards,
  Req,
} from '@nestjs/common';
import { ReportService } from './report.service';
import { CreatePelaporanRequest } from './dto/create-report.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('reports')
export class ReportController {
  constructor(private readonly pelaporanService: ReportService) {}

  @Post()
  @UseGuards(AuthGuard('jwt'))
  create(@Body() createPelaporanRequest: CreatePelaporanRequest, @Req() req) {
    // Creates a new report record. Requires body conforming to CreatePelaporanRequest.
    const userId: string = req.user.id ?? '';
    return this.pelaporanService.create(createPelaporanRequest, userId);
  }

  @Get()
  findAll() {
    // Returns all records. Ideally, implement pagination here for scalability.
    return this.pelaporanService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    // Returns a single report by report_id.
    return this.pelaporanService.findOne(id);
  }
}

@Controller('pelaporan/search')
export class PelaporanSearchController {
  @Get()
  search() {
    // TODO: implement search functionality here
  }
}
