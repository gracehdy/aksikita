import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { PelaporanService } from './report.service';
import { CreatePelaporanRequest } from './dto/create-report.dto';

@Controller('pelaporan')
export class PelaporanController {
  constructor(private readonly pelaporanService: PelaporanService) {}

  @Post()
  create(@Body() createPelaporanDto: CreatePelaporanRequest) {
    // Creates a new report record. Requires body conforming to CreatePelaporanRequest.
    return this.pelaporanService.create(this.create(createPelaporanDto));
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
