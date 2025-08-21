import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { AppController } from './app.controller';
import { AdminsModule } from './admins/admins.module';
import { TravelersModule } from './travelers/travelers.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [AdminsModule, TravelersModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
