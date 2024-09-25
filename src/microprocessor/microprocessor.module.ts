import { Module } from '@nestjs/common';
import { MicroprocessorService } from './microprocessor.service';
import { MicroprocessorController } from './microprocessor.controller';

@Module({
  controllers: [MicroprocessorController],
  providers: [MicroprocessorService],
})
export class MicroprocessorModule {}
