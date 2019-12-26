import { Controller, Get, Logger, Param, Post, Body, Put, Delete, HttpException, HttpStatus } from '@nestjs/common';
import { LocationService } from './location.service';
import { VehiculeDto } from 'src/dtos/vehicule.dto';
import { ContratDto } from 'src/dtos/contrat.dto';

@Controller('location')
export class LocationController {

    constructor(
        private readonly locationService: LocationService
    ) {}

    @Get()
        getAll() {
            Logger.log('Recuperer tous les vehicules disponible', 'LocationController');
            return this.locationService.getVehicules();
        }

    @Get(':vehiculeId')
    async getOne(@Param('vehiculeId') vehiculeId ){
            Logger.log('Recuperer le vehicule numéro: ' + vehiculeId, 'LocationController');
            const vehicule = await this.locationService.getOneVehicule(vehiculeId);
            if(vehicule){
                return vehicule;
            }
            throw new HttpException('Vehicule introuvable', HttpStatus.NOT_FOUND);
        }

    @Post()
    async create(@Body() vehiculeDto: VehiculeDto){
            Logger.log("creation d'un vehicule", 'LocationController');
            const vehicule = await this.locationService.createVehicule(vehiculeDto);
            if(vehicule) {
                return vehicule;
            }
            throw new HttpException('Echec de création du vehicule', HttpStatus.NOT_MODIFIED);
        }

    @Put(':vehiculeId')
    async update(@Param('vehiculeId') vehiculeId, @Body() vehiculeDto) {
            Logger.log('modification de vehicule', 'LocationController');
            const vehicule = await this.locationService.updateVehicule(vehiculeId, vehiculeDto);
            if(vehicule) {
                return vehicule;
            }
            throw new HttpException('Echec de la modification du vehicule', HttpStatus.NOT_MODIFIED);
        }

    @Delete(':vehiculeId')
    async remove(@Param('vehiculeId') vehiculeId) {
            Logger.log('suppression de vehicule', 'LocationController');
            const vehicule = await this.locationService.removeVehicule(vehiculeId);
            if(vehicule) {
                return vehicule;
            }
            throw new HttpException('Echec de la suppression du vehicule', HttpStatus.NOT_FOUND);
        }

    @Post('contrat/:vehiculeId')
    async addContrat(@Param('vehiculeId') vehiculeId, @Body() contratDto: ContratDto){
        const contrat = await this.locationService.addContrat(vehiculeId, contratDto);
        if(contrat)
            return contrat;
        throw new HttpException('Echec de la creation du contrat de location', HttpStatus.NOT_MODIFIED);
    }

}
