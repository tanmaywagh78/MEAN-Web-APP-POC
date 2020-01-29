"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = __importDefault(require("sequelize"));
const database_sequelize_1 = require("../../config/database.sequelize");
class School extends sequelize_1.default.Model {
}
exports.School = School;
School.init({
    schl_name: sequelize_1.default.STRING,
    schl_type: sequelize_1.default.STRING,
}, { sequelize: database_sequelize_1.sequelize, modelName: 'school' });
School.sync();
//# sourceMappingURL=school.model.js.map