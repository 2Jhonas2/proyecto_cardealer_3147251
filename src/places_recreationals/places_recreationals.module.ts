import { Module } from '@nestjs/common';
import { PlacesRecreationalsService } from './places_recreationals.service';
import { PlacesRecreationalsController } from './places_recreationals.controller';

@Module({
  controllers: [PlacesRecreationalsController],
  providers: [PlacesRecreationalsService],
})
export class PlacesRecreationalsModule {}
