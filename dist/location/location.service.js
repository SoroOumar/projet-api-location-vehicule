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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const vehicule_entity_1 = require("./entites/vehicule.entity");
const typeorm_2 = require("@nestjs/typeorm");
const vehicule_dto_1 = require("../dtos/vehicule.dto");
const contrat_entity_1 = require("./entites/contrat.entity");
const contrat_dto_1 = require("../dtos/contrat.dto");
let LocationService = class LocationService {
    constructor(vehiculeRepository, contratRepository) {
        this.vehiculeRepository = vehiculeRepository;
        this.contratRepository = contratRepository;
    }
    getVehicules() {
        return this.vehiculeRepository.find({ relations: ['contrats'] });
    }
    async getOneVehicule(vehiculeId) {
        const vehicule = await this.vehiculeRepository.findOne(vehiculeId);
        if (vehicule) {
            return vehicule;
        }
        else {
            return null;
        }
    }
    async createVehicule(vehiculeDto) {
        const vehicule = await this.vehiculeRepository.save(vehiculeDto);
        return vehicule;
    }
    async updateVehicule(vehiculeId, vehiculeDto) {
        const vehicule = await this.vehiculeRepository.findOne(vehiculeId);
        if (!vehiculeId)
            return null;
        await this.vehiculeRepository.update(vehiculeId, vehiculeDto);
        return await this.vehiculeRepository.findOne(vehiculeId);
    }
    async removeVehicule(vehiculeId) {
        const vehicule = await this.vehiculeRepository.findOne(vehiculeId);
        if (!vehicule)
            return null;
        this.vehiculeRepository.remove(vehicule);
        return vehicule;
    }
    async addContrat(vehiculeId, contratDto) {
        const vehicule = await this.vehiculeRepository.findOne(vehiculeId, { relations: ['contrats'] });
        if (!vehicule)
            return null;
        const contrat = new contrat_entity_1.ContratEntity();
        contrat.nomPrenoms_client = contratDto.nomPrenoms_client;
        contrat.tel_client = contratDto.tel_client;
        contrat.date_debut = contratDto.date_debut;
        contrat.date_fin = contratDto.date_fin;
        contrat.prix_location = contratDto.prix_location;
        contrat.vehicule = vehicule;
        return this.contratRepository.save(contrat);
    }
};
LocationService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_2.InjectRepository(vehicule_entity_1.VehiculeEntity)),
    __param(1, typeorm_2.InjectRepository(contrat_entity_1.ContratEntity)),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        typeorm_1.Repository])
], LocationService);
exports.LocationService = LocationService;
//# sourceMappingURL=location.service.js.map