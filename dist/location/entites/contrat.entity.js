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
const vehicule_entity_1 = require("./vehicule.entity");
let ContratEntity = class ContratEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn({ name: 'contrat_id' }),
    __metadata("design:type", Number)
], ContratEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], ContratEntity.prototype, "nomPrenoms_client", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], ContratEntity.prototype, "tel_client", void 0);
__decorate([
    typeorm_1.CreateDateColumn(),
    __metadata("design:type", Date)
], ContratEntity.prototype, "date_debut", void 0);
__decorate([
    typeorm_1.CreateDateColumn(),
    __metadata("design:type", Date)
], ContratEntity.prototype, "date_fin", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], ContratEntity.prototype, "prix_location", void 0);
__decorate([
    typeorm_1.ManyToOne(type => vehicule_entity_1.VehiculeEntity, vehicule => vehicule.contrats, { onDelete: 'CASCADE' }),
    __metadata("design:type", vehicule_entity_1.VehiculeEntity)
], ContratEntity.prototype, "vehicule", void 0);
ContratEntity = __decorate([
    typeorm_1.Entity('contrat')
], ContratEntity);
exports.ContratEntity = ContratEntity;
//# sourceMappingURL=contrat.entity.js.map