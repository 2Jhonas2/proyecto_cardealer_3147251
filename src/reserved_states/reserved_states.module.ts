import { Module } from '@nestjs/common';
import { ReservedStatesService } from './reserved_states.service';
import { ReservedStatesController } from './reserved_states.controller';

@Module({
  controllers: [ReservedStatesController],
  providers: [ReservedStatesService],
})
export class ReservedStatesModule {}
