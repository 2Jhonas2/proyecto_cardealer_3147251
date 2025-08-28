import { Injectable } from '@nestjs/common';
import { CreateReservedStateDto } from './dto/create-reserved_state.dto';
import { UpdateReservedStateDto } from './dto/update-reserved_state.dto';

@Injectable()
export class ReservedStatesService {
  create(createReservedStateDto: CreateReservedStateDto) {
    return 'This action adds a new reservedState';
  }

  findAll() {
    return `This action returns all reservedStates`;
  }

  findOne(id: number) {
    return `This action returns a #${id} reservedState`;
  }

  update(id: number, updateReservedStateDto: UpdateReservedStateDto) {
    return `This action updates a #${id} reservedState`;
  }

  remove(id: number) {
    return `This action removes a #${id} reservedState`;
  }
}
