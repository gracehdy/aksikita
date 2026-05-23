import { Injectable } from '@nestjs/common';
import { CreatePelaporanDto } from './dto/create-pelaporan.dto';
import { UpdatePelaporanDto } from './dto/update-pelaporan.dto';

@Injectable()
export class PelaporanService {
  create(createPelaporanDto: CreatePelaporanDto) {
    return 'This action adds a new pelaporan';
  }

  findAll() {
    return `This action returns all pelaporan`;
  }

  findOne(id: number) {
    return `This action returns a #${id} pelaporan`;
  }

  update(id: number, updatePelaporanDto: UpdatePelaporanDto) {
    return `This action updates a #${id} pelaporan`;
  }

  remove(id: number) {
    return `This action removes a #${id} pelaporan`;
  }
}
