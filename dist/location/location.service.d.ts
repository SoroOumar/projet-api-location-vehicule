import { Repository } from 'typeorm';
import { VehiculeEntity } from './entites/vehicule.entity';
import { VehiculeDto } from 'src/dtos/vehicule.dto';
import { ContratEntity } from './entites/contrat.entity';
import { ContratDto } from 'src/dtos/contrat.dto';
export declare class LocationService {
    private readonly vehiculeRepository;
    private readonly contratRepository;
    constructor(vehiculeRepository: Repository<VehiculeEntity>, contratRepository: Repository<ContratEntity>);
    getVehicules(): Promise<VehiculeEntity[]>;
    getOneVehicule(vehiculeId: number): Promise<VehiculeEntity>;
    createVehicule(vehiculeDto: VehiculeDto): Promise<VehiculeDto & VehiculeEntity>;
    updateVehicule(vehiculeId: number, vehiculeDto: VehiculeDto): Promise<VehiculeEntity>;
    removeVehicule(vehiculeId: number): Promise<VehiculeEntity>;
    addContrat(vehiculeId: any, contratDto: ContratDto): Promise<ContratEntity>;
}
