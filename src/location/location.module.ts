import { Module } from '@nestjs/common';
import { LocationController } from './location.controller';
import { LocationService } from './location.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VehiculeEntity } from './entites/vehicule.entity';
import { ContratEntity } from './entites/contrat.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([VehiculeEntity, ContratEntity])
  ],
  controllers: [LocationController],
  providers: [LocationService]
})
export class LocationModule {}
