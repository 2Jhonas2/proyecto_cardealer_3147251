import { Injectable } from '@nestjs/common';
import { CreatePackagesTouristicDto } from './dto/create-packages_touristic.dto';
import { UpdatePackagesTouristicDto } from './dto/update-packages_touristic.dto';

@Injectable()
export class PackagesTouristicsService {
  create(createPackagesTouristicDto: CreatePackagesTouristicDto) {
    return 'This action adds a new packagesTouristic';
  }

  findAll() {
    return `This action returns all packagesTouristics`;
  }

  findOne(id: number) {
    return `This action returns a #${id} packagesTouristic`;
  }

  update(id: number, updatePackagesTouristicDto: UpdatePackagesTouristicDto) {
    return `This action updates a #${id} packagesTouristic`;
  }

  remove(id: number) {
    return `This action removes a #${id} packagesTouristic`;
  }
}
