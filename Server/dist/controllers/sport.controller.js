"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sport_model_1 = require("../models/sequelize/sport.model");
const app_1 = require("../src/app");
// create new sport
class SportController {
    static addSport(req, res) {
        sport_model_1.Sport.create({
            s_name: req.body.s_name,
            s_desc: req.body.s_desc,
            s_type: req.body.s_type,
        })
            .then((newSport) => {
            app_1.io.emit('sport_added');
            var response = {
                success: true,
                message: 'New sport created successfully',
                result: newSport,
            };
            return res.status(201).json(response);
        })
            .catch((error) => {
            res.status(500).json({
                success: false,
                message: 'Server error. Please try again.',
                error: error.message,
            });
        });
    }
    static listSport(req, res) {
        sport_model_1.Sport.findAll()
            .then((sports) => {
            return res.status(201).json({
                success: true,
                message: 'Sports listed successfully',
                result: sports,
            });
        })
            .catch((error) => {
            res.status(500).json({
                success: false,
                message: 'Server error. Please try again.',
                error: error.message,
            });
        });
    }
}
exports.SportController = SportController;
const sport_mongo_controller_1 = __importDefault(require("./mongooseIO/sport.mongo.controller"));
const school_mongo_controller_1 = __importDefault(require("./mongooseIO/school.mongo.controller"));
const participant_mongo_controller_1 = __importDefault(require("./mongooseIO/participant.mongo.controller"));
app_1.io.on("connection", socket => {
    sport_mongo_controller_1.default(app_1.io, socket);
    school_mongo_controller_1.default(app_1.io, socket);
    participant_mongo_controller_1.default(app_1.io, socket);
});
//# sourceMappingURL=sport.controller.js.map