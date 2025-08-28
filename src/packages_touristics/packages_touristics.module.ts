import { Module } from '@nestjs/common';
import { PackagesTouristicsService } from './packages_touristics.service';
import { PackagesTouristicsController } from './packages_touristics.controller';

@Module({
  controllers: [PackagesTouristicsController],
  providers: [PackagesTouristicsService],
})
export class PackagesTouristicsModule {}
