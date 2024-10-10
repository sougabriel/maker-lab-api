import { Module } from '@nestjs/common';
import { Printer3dService } from './printer3d.service';
import { Printer3dController } from './printer3d.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [Printer3dController],
  providers: [Printer3dService],
  imports: [PrismaModule]
})
export class Printer3dModule {}
