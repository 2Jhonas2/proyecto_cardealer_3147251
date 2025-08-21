import { Injectable } from '@nestjs/common';
import { CreateTravelerDto } from './dto/create-traveler.dto';
import { UpdateTravelerDto } from './dto/update-traveler.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TravelersService {

  constructor(private prisma : PrismaService){

  }

  create(createTravelerDto: CreateTravelerDto) {
    return 'This action adds a new traveler';
  }

  findAll() {
    return this.prisma.travelers.findMany({
      orderBy: [{id_traveler: 'asc'}]
    });
  } 

  findOne(id: number) {
    return `This action returns a #${id} traveler`;
  }

  update(id: number, updateTravelerDto: UpdateTravelerDto) {
    return `This action updates a #${id} traveler`;
  }

  remove(id: number) {
    return `This action removes a #${id} traveler`;
  }
}
