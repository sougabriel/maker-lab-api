import { Module } from '@nestjs/common';
import { MicroprocessorService } from './microprocessor.service';
import { MicroprocessorController } from './microprocessor.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [MicroprocessorController],
  providers: [MicroprocessorService],
  imports: [PrismaModule]
})
export class MicroprocessorModule {}
