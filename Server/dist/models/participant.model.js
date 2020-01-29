"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = __importDefault(require("sequelize"));
const database_sequelize_1 = require("../config/database.sequelize");
const sport_model_1 = require("./sport.model");
const school_model_1 = require("./school.model");
class Participant extends sequelize_1.default.Model {
}
exports.Participant = Participant;
Participant.init({
    p_name: sequelize_1.default.STRING,
    p_standard: sequelize_1.default.INTEGER,
}, { sequelize: database_sequelize_1.sequelize, modelName: 'participant' });
Participant.belongsTo(sport_model_1.Sport);
Participant.belongsTo(school_model_1.School);
Participant.sync();
//# sourceMappingURL=participant.model.js.map