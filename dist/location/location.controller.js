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
const location_service_1 = require("./location.service");
const vehicule_dto_1 = require("../dtos/vehicule.dto");
const contrat_dto_1 = require("../dtos/contrat.dto");
let LocationController = class LocationController {
    constructor(locationService) {
        this.locationService = locationService;
    }
    getAll() {
        common_1.Logger.log('Recuperer tous les vehicules disponible', 'LocationController');
        return this.locationService.getVehicules();
    }
    async getOne(vehiculeId) {
        common_1.Logger.log('Recuperer le vehicule numéro: ' + vehiculeId, 'LocationController');
        const vehicule = await this.locationService.getOneVehicule(vehiculeId);
        if (vehicule) {
            return vehicule;
        }
        throw new common_1.HttpException('Vehicule introuvable', common_1.HttpStatus.NOT_FOUND);
    }
    async create(vehiculeDto) {
        common_1.Logger.log("creation d'un vehicule", 'LocationController');
        const vehicule = await this.locationService.createVehicule(vehiculeDto);
        if (vehicule) {
            return vehicule;
        }
        throw new common_1.HttpException('Echec de création du vehicule', common_1.HttpStatus.NOT_MODIFIED);
    }
    async update(vehiculeId, vehiculeDto) {
        common_1.Logger.log('modification de vehicule', 'LocationController');
        const vehicule = await this.locationService.updateVehicule(vehiculeId, vehiculeDto);
        if (vehicule) {
            return vehicule;
        }
        throw new common_1.HttpException('Echec de la modification du vehicule', common_1.HttpStatus.NOT_MODIFIED);
    }
    async remove(vehiculeId) {
        common_1.Logger.log('suppression de vehicule', 'LocationController');
        const vehicule = await this.locationService.removeVehicule(vehiculeId);
        if (vehicule) {
            return vehicule;
        }
        throw new common_1.HttpException('Echec de la suppression du vehicule', common_1.HttpStatus.NOT_FOUND);
    }
    async addContrat(vehiculeId, contratDto) {
        const contrat = await this.locationService.addContrat(vehiculeId, contratDto);
        if (contrat)
            return contrat;
        throw new common_1.HttpException('Echec de la creation du contrat de location', common_1.HttpStatus.NOT_MODIFIED);
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], LocationController.prototype, "getAll", null);
__decorate([
    common_1.Get(':vehiculeId'),
    __param(0, common_1.Param('vehiculeId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], LocationController.prototype, "getOne", null);
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [vehicule_dto_1.VehiculeDto]),
    __metadata("design:returntype", Promise)
], LocationController.prototype, "create", null);
__decorate([
    common_1.Put(':vehiculeId'),
    __param(0, common_1.Param('vehiculeId')), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], LocationController.prototype, "update", null);
__decorate([
    common_1.Delete(':vehiculeId'),
    __param(0, common_1.Param('vehiculeId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], LocationController.prototype, "remove", null);
__decorate([
    common_1.Post('contrat/:vehiculeId'),
    __param(0, common_1.Param('vehiculeId')), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, contrat_dto_1.ContratDto]),
    __metadata("design:returntype", Promise)
], LocationController.prototype, "addContrat", null);
LocationController = __decorate([
    common_1.Controller('location'),
    __metadata("design:paramtypes", [location_service_1.LocationService])
], LocationController);
exports.LocationController = LocationController;
//# sourceMappingURL=location.controller.js.map