import { Module } from '@nestjs/common';
import { Printer3dService } from './printer3d.service';
import { Printer3dController } from './printer3d.controller';

@Module({
  controllers: [Printer3dController],
  providers: [Printer3dService],
})
export class Printer3dModule {}
