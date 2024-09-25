import { Test, TestingModule } from '@nestjs/testing';
import { Printer3dController } from './printer3d.controller';
import { Printer3dService } from './printer3d.service';

describe('Printer3dController', () => {
  let controller: Printer3dController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Printer3dController],
      providers: [Printer3dService],
    }).compile();

    controller = module.get<Printer3dController>(Printer3dController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
