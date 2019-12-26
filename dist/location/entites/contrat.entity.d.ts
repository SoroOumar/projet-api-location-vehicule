import { VehiculeEntity } from "./vehicule.entity";
export declare class ContratEntity {
    id: number;
    nomPrenoms_client: string;
    tel_client: string;
    date_debut: Date;
    date_fin: Date;
    prix_location: number;
    vehicule: VehiculeEntity;
}
