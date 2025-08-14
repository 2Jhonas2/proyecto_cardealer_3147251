import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { AppController } from './app.controller';
import { AdminsModule } from './admins/admins.module';

@Module({
  imports: [AdminsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
