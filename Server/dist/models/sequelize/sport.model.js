"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = __importDefault(require("sequelize"));
const database_sequelize_1 = require("../../config/database.sequelize");
class Sport extends sequelize_1.default.Model {
}
exports.Sport = Sport;
Sport.init({
    s_name: sequelize_1.default.STRING,
    s_desc: sequelize_1.default.STRING,
    s_type: sequelize_1.default.STRING,
}, { sequelize: database_sequelize_1.sequelize, modelName: 'sport' });
Sport.sync();
//# sourceMappingURL=sport.model.js.map