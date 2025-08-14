import { Module } from '@nestjs/common';
import { AdminsController } from './admins.controller';
import { AppService } from 'src/app.service';

@Module({
  imports: [AdminsModule],
  controllers: [AdminsController],
  providers: [AppService],
})
export class AdminsModule {}