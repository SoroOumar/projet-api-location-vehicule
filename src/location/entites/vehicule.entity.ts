import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from 'typeorm';
import { ContratEntity } from './contrat.entity';

@Entity('vehicule')
export class VehiculeEntity {

    @PrimaryGeneratedColumn({name: 'vehicule_id'})
    idVehicule: number;

    @Column()
    numImma: string;

    @Column()
    marque: string;

    @Column()
    modele: string;

    @Column()
    couleur: string;
    
    @Column({type: 'double', name: 'prixJournalier'})
    prix: number;

    @Column({type: 'boolean', name: 'dispo', default: true})
    disponible: boolean;

    @OneToMany(type => ContratEntity, contrat => contrat.vehicule)
    contrats: ContratEntity[];

}      