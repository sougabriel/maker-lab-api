import { Test, TestingModule } from '@nestjs/testing';
import { MicroprocessorService } from './microprocessor.service';

describe('MicroprocessorService', () => {
  let service: MicroprocessorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MicroprocessorService],
    }).compile();

    service = module.get<MicroprocessorService>(MicroprocessorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
