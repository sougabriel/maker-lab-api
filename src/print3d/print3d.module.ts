import { Module } from '@nestjs/common';
import { Print3dService } from './print3d.service';
import { Print3dController } from './print3d.controller';

@Module({
  controllers: [Print3dController],
  providers: [Print3dService],
})
export class Print3dModule {}
