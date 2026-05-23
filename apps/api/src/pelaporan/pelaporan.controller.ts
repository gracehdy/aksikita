import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PelaporanService } from './pelaporan.service';
import { CreatePelaporanDto } from './dto/create-pelaporan.dto';
import { UpdatePelaporanDto } from './dto/update-pelaporan.dto';

@Controller('pelaporan')
export class PelaporanController {
  constructor(private readonly pelaporanService: PelaporanService) {}

  @Post()
  create(@Body() createPelaporanDto: CreatePelaporanDto) {
    return this.pelaporanService.create(createPelaporanDto);
  }

  @Get()
  findAll() {
    return this.pelaporanService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pelaporanService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePelaporanDto: UpdatePelaporanDto) {
    return this.pelaporanService.update(+id, updatePelaporanDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pelaporanService.remove(+id);
  }
}
