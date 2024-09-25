import { Test, TestingModule } from '@nestjs/testing';
import { Print3dService } from './print3d.service';

describe('Print3dService', () => {
  let service: Print3dService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Print3dService],
    }).compile();

    service = module.get<Print3dService>(Print3dService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
