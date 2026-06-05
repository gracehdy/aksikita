import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller';

describe('UserController', () => {
  let controller: UserController;

  beforeEach(async () => {
    const module: Testiimport { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller';
import { UserService } from './user.service'; // <-- Import UserService

describe('UserController', () => {
  let controller: UserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      // Gunakan mock provider agar kita tidak perlu repot-repot memanggil PrismaService yang asli saat testing controller
      providers: [
        {
          provide: UserService,
          useValue: {
            findById: jest.fn(),
            getDisplayName: jest.fn(),
            getUserProfile: jest.fn(), // <-- Daftarkan juga fungsi baru kita di sini sebagai mock
          },
        },
      ],
    }).compile();

    controller = module.get<UserController>(UserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});ngModule = await Test.createTestingModule({
      controllers: [UserController],
    }).compile();

    controller = module.get<UserController>(UserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
