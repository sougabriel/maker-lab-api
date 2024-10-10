import { Module } from '@nestjs/common';
import { Print3dService } from './print3d.service';
import { Print3dController } from './print3d.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [Print3dController],
  providers: [Print3dService],
  imports: [PrismaModule]
})
export class Print3dModule {}
