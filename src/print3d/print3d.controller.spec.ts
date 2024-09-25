import { Test, TestingModule } from '@nestjs/testing';
import { Print3dController } from './print3d.controller';
import { Print3dService } from './print3d.service';

describe('Print3dController', () => {
  let controller: Print3dController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Print3dController],
      providers: [Print3dService],
    }).compile();

    controller = module.get<Print3dController>(Print3dController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
