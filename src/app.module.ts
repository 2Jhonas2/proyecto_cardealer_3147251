import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { AppController } from './app.controller';
import { AdminsModule } from './admins/admins.module';
import { TravelersModule } from './travelers/travelers.module';
import { PrismaModule } from './prisma/prisma.module';
import { ReservedStatesModule } from './reserved_states/reserved_states.module';
import { AdminsPlacesModule } from './admins_places/admins_places.module';
import { RolesUsersModule } from './roles_users/roles_users.module';
import { UsersModule } from './users/users.module';
import { TypesDocumentsModule } from './types_documents/types_documents.module';
import { PaymentsModule } from './payments/payments.module';
import { PackagesTouristicsModule } from './packages_touristics/packages_touristics.module';
import { PlacesRecreationalsModule } from './places_recreationals/places_recreationals.module';
import { PackagesActivitiesModule } from './packages_activities/packages_activities.module';
import { ActivitiesModule } from './activities/activities.module';
import { ReservationsModule } from './reservations/reservations.module';

@Module({
  imports: [AdminsModule, TravelersModule, PrismaModule, ReservedStatesModule, AdminsPlacesModule, RolesUsersModule, UsersModule, TypesDocumentsModule, PaymentsModule, PackagesTouristicsModule, PlacesRecreationalsModule, PackagesActivitiesModule, ActivitiesModule, ReservationsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
