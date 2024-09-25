import { Test, TestingModule } from '@nestjs/testing';
import { MicroprocessorController } from './microprocessor.controller';
import { MicroprocessorService } from './microprocessor.service';

describe('MicroprocessorController', () => {
  let controller: MicroprocessorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MicroprocessorController],
      providers: [MicroprocessorService],
    }).compile();

    controller = module.get<MicroprocessorController>(MicroprocessorController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
