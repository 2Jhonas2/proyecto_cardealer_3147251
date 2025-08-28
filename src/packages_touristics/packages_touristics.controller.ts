import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PackagesTouristicsService } from './packages_touristics.service';
import { CreatePackagesTouristicDto } from './dto/create-packages_touristic.dto';
import { UpdatePackagesTouristicDto } from './dto/update-packages_touristic.dto';

@Controller('packages-touristics')
export class PackagesTouristicsController {
  constructor(private readonly packagesTouristicsService: PackagesTouristicsService) {}

  @Post()
  create(@Body() createPackagesTouristicDto: CreatePackagesTouristicDto) {
    return this.packagesTouristicsService.create(createPackagesTouristicDto);
  }

  @Get()
  findAll() {
    return this.packagesTouristicsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.packagesTouristicsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePackagesTouristicDto: UpdatePackagesTouristicDto) {
    return this.packagesTouristicsService.update(+id, updatePackagesTouristicDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.packagesTouristicsService.remove(+id);
  }
}
