import { Injectable } from '@nestjs/common';
import { CreatePlacesRecreationalDto } from './dto/create-places_recreational.dto';
import { UpdatePlacesRecreationalDto } from './dto/update-places_recreational.dto';

@Injectable()
export class PlacesRecreationalsService {
  create(createPlacesRecreationalDto: CreatePlacesRecreationalDto) {
    return 'This action adds a new placesRecreational';
  }

  findAll() {
    return `This action returns all placesRecreationals`;
  }

  findOne(id: number) {
    return `This action returns a #${id} placesRecreational`;
  }

  update(id: number, updatePlacesRecreationalDto: UpdatePlacesRecreationalDto) {
    return `This action updates a #${id} placesRecreational`;
  }

  remove(id: number) {
    return `This action removes a #${id} placesRecreational`;
  }
}
