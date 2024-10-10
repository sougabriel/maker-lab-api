import { Module } from '@nestjs/common';
import { ManualService } from './manual.service';
import { ManualController } from './manual.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [ManualController],
  providers: [ManualService],
  imports: [PrismaModule]
})
export class ManualModule {}
