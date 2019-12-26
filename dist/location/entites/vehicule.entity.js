"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const contrat_entity_1 = require("./contrat.entity");
let VehiculeEntity = class VehiculeEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn({ name: 'vehicule_id' }),
    __metadata("design:type", Number)
], VehiculeEntity.prototype, "idVehicule", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], VehiculeEntity.prototype, "numImma", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], VehiculeEntity.prototype, "marque", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], VehiculeEntity.prototype, "modele", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], VehiculeEntity.prototype, "couleur", void 0);
__decorate([
    typeorm_1.Column({ type: 'double', name: 'prixJournalier' }),
    __metadata("design:type", Number)
], VehiculeEntity.prototype, "prix", void 0);
__decorate([
    typeorm_1.Column({ type: 'boolean', name: 'dispo', default: true }),
    __metadata("design:type", Boolean)
], VehiculeEntity.prototype, "disponible", void 0);
__decorate([
    typeorm_1.OneToMany(type => contrat_entity_1.ContratEntity, contrat => contrat.vehicule),
    __metadata("design:type", Array)
], VehiculeEntity.prototype, "contrats", void 0);
VehiculeEntity = __decorate([
    typeorm_1.Entity('vehicule')
], VehiculeEntity);
exports.VehiculeEntity = VehiculeEntity;
//# sourceMappingURL=vehicule.entity.js.map