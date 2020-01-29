"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = __importDefault(require("sequelize"));
const database_1 = require("../config/database");
const sportsmodel_1 = require("./sportsmodel");
const schoolsmodel_1 = require("./schoolsmodel");
class Participant extends sequelize_1.default.Model {
}
exports.Participant = Participant;
Participant.init({
    p_name: sequelize_1.default.STRING,
    p_standard: sequelize_1.default.INTEGER,
}, { sequelize: database_1.sequelize, modelName: 'participant' });
Participant.belongsTo(sportsmodel_1.Sport);
Participant.belongsTo(schoolsmodel_1.School);
Participant.sync();
//# sourceMappingURL=participantsmodel.js.map