import { LocationService } from './location.service';
import { VehiculeDto } from 'src/dtos/vehicule.dto';
import { ContratDto } from 'src/dtos/contrat.dto';
export declare class LocationController {
    private readonly locationService;
    constructor(locationService: LocationService);
    getAll(): Promise<import("./entites/vehicule.entity").VehiculeEntity[]>;
    getOne(vehiculeId: any): Promise<import("./entites/vehicule.entity").VehiculeEntity>;
    create(vehiculeDto: VehiculeDto): Promise<VehiculeDto & import("./entites/vehicule.entity").VehiculeEntity>;
    update(vehiculeId: any, vehiculeDto: any): Promise<import("./entites/vehicule.entity").VehiculeEntity>;
    remove(vehiculeId: any): Promise<import("./entites/vehicule.entity").VehiculeEntity>;
    addContrat(vehiculeId: any, contratDto: ContratDto): Promise<import("./entites/contrat.entity").ContratEntity>;
}
