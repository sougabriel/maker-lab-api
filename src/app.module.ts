import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from './auth/guards/jwt-auth.guard';
import { PersonModule } from './person/person.module';
import { LogModule } from './log/log.module';
import { ManualModule } from './manual/manual.module';
import { Printer3dModule } from './printer3d/printer3d.module';
import { EntryModule } from './entry/entry.module';
import { EventModule } from './event/event.module';
import { MicroprocessorModule } from './microprocessor/microprocessor.module';
import { Print3dModule } from './print3d/print3d.module';
import { ProductModule } from './product/product.module';

@Module({
  imports: [
    PrismaModule,
    UserModule,
    AuthModule,
    PersonModule,
    ProductModule,
    Print3dModule,
    MicroprocessorModule,
    EventModule,
    EntryModule,
    Printer3dModule,
    ManualModule,
    LogModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ],
})
export class AppModule {}
