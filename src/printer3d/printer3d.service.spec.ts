import { Test, TestingModule } from '@nestjs/testing';
import { Printer3dService } from './printer3d.service';

describe('Printer3dService', () => {
  let service: Printer3dService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Printer3dService],
    }).compile();

    service = module.get<Printer3dService>(Printer3dService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
