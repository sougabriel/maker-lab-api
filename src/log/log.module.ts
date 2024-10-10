import { Module } from '@nestjs/common';
import { LogService } from './log.service';
import { LogController } from './log.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [LogController],
  providers: [LogService],
  imports: [PrismaModule]
})
export class LogModule {}
