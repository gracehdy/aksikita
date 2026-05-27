import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  UseGuards,
  Req,
  Query,
} from '@nestjs/common';
import { ReportService } from './report.service';
import { CreateReportRequest } from './dto/create-report.dto';
import { AuthGuard } from '@nestjs/passport';
import { SearchService } from './search/search.service';

@Controller('reports')
export class ReportController {
  constructor(private readonly pelaporanService: ReportService) {}

  @Post()
  @UseGuards(AuthGuard('jwt'))
  create(@Body() createPelaporanRequest: CreateReportRequest, @Req() req) {
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
export class ReportSearchController {
  constructor(private readonly searchService: SearchService) {}

  @Get()
  search(@Query('keywords') keywords?: string) {
    const keywordArr = keywords ? keywords.split(',') : [];
    return this.searchService.search(keywordArr);
  }
}
