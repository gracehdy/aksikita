import { Test, TestingModule } from '@nestjs/testing';
import { PelaporanController } from './pelaporan.controller';

describe('PelaporanController', () => {
  let controller: PelaporanController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PelaporanController],
    }).compile();

    controller = module.get<PelaporanController>(PelaporanController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
