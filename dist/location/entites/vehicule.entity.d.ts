import { ContratEntity } from './contrat.entity';
export declare class VehiculeEntity {
    idVehicule: number;
    numImma: string;
    marque: string;
    modele: string;
    couleur: string;
    prix: number;
    disponible: boolean;
    contrats: ContratEntity[];
}
