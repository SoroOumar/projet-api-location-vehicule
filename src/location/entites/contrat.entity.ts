import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne } from "typeorm";
import { VehiculeEntity } from "./vehicule.entity";

@Entity('contrat')
export class ContratEntity {
    @PrimaryGeneratedColumn({name: 'contrat_id'})
    id: number;

    @Column()
    nomPrenoms_client: string;

    @Column()
    tel_client: string;

    @CreateDateColumn()
    date_debut: Date;

    @CreateDateColumn()
    date_fin: Date;

    @Column()
    prix_location: number;

    @ManyToOne(type => VehiculeEntity, vehicule => vehicule.contrats, {onDelete: 'CASCADE'})
    vehicule: VehiculeEntity;
}