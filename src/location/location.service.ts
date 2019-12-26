import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { VehiculeEntity } from './entites/vehicule.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { VehiculeDto } from 'src/dtos/vehicule.dto';
import { ContratEntity } from './entites/contrat.entity';
import { ContratDto } from 'src/dtos/contrat.dto';

@Injectable()
export class LocationService {

    constructor(
        @InjectRepository(VehiculeEntity)
        private readonly vehiculeRepository: Repository<VehiculeEntity>,

        @InjectRepository(ContratEntity)
        private readonly contratRepository: Repository<ContratEntity>
    ) {}

    getVehicules(){
        return this.vehiculeRepository.find({relations: ['contrats']});
    }

    async getOneVehicule(vehiculeId: number)
    {
        const vehicule =  await this.vehiculeRepository.findOne(vehiculeId);
        if(vehicule){
            return vehicule;
        }
        else{
            return null;
        }

    }

    async createVehicule(vehiculeDto: VehiculeDto) {
        const vehicule = await this.vehiculeRepository.save(vehiculeDto);
        return vehicule;
    }

    async updateVehicule(vehiculeId: number, vehiculeDto: VehiculeDto) {
        const vehicule = await this.vehiculeRepository.findOne(vehiculeId);
        if(!vehiculeId)
            return null;
        await this.vehiculeRepository.update(vehiculeId, vehiculeDto)
        return await this.vehiculeRepository.findOne(vehiculeId);
    }

    async removeVehicule(vehiculeId: number) {
        const vehicule = await this.vehiculeRepository.findOne(vehiculeId);
        if(!vehicule)
            return null;
        this.vehiculeRepository.remove(vehicule);
        return vehicule;
    }

    async addContrat(vehiculeId, contratDto: ContratDto) {
        const vehicule = await this.vehiculeRepository.findOne(vehiculeId, {relations: ['contrats']});
        if(!vehicule)
            return null;
        const contrat = new ContratEntity();
        contrat.nomPrenoms_client = contratDto.nomPrenoms_client;
        contrat.tel_client = contratDto.tel_client;
        contrat.date_debut = contratDto.date_debut;
        contrat.date_fin = contratDto.date_fin;
        contrat.prix_location = contratDto.prix_location;
        contrat.vehicule = vehicule;
        return this.contratRepository.save(contrat);
    }
}
