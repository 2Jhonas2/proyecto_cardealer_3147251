import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PlacesRecreationalsService } from './places_recreationals.service';
import { CreatePlacesRecreationalDto } from './dto/create-places_recreational.dto';
import { UpdatePlacesRecreationalDto } from './dto/update-places_recreational.dto';

@Controller('places-recreationals')
export class PlacesRecreationalsController {
  constructor(private readonly placesRecreationalsService: PlacesRecreationalsService) {}

  @Post()
  create(@Body() createPlacesRecreationalDto: CreatePlacesRecreationalDto) {
    return this.placesRecreationalsService.create(createPlacesRecreationalDto);
  }

  @Get()
  findAll() {
    return this.placesRecreationalsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.placesRecreationalsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePlacesRecreationalDto: UpdatePlacesRecreationalDto) {
    return this.placesRecreationalsService.update(+id, updatePlacesRecreationalDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.placesRecreationalsService.remove(+id);
  }
}
