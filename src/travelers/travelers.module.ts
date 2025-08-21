import { Module } from '@nestjs/common';
import { TravelersService } from './travelers.service';
import { TravelersController } from './travelers.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [TravelersController],
  providers: [TravelersService],
})
export class TravelersModule {}
