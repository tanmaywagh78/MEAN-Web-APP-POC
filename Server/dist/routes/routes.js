"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const sport_controller_1 = require("../controllers/sport.controller");
// import * as SportMongoController from '../controllers/mongooseIO/sport.mongo.controller';
const school_controller_1 = require("../controllers/school.controller");
const router = express_1.default.Router();
router.post('/addsport', sport_controller_1.SportController.addSport);
router.get('/listsport', sport_controller_1.SportController.listSport);
router.post('addschool', school_controller_1.SchoolController.addSchool);
router.get('listschool', school_controller_1.SchoolController.listSchool);
//Mongoose API
// router.post('/sport', SportMongoController.addSport);
// router.get('/sports', SportMongoController.allSportsM);
// router.get("/sport/:id", SportMongoController.getSportM);
// router.put("/sport/:id", SportMongoController.updateSportM);
// router.delete("/sport/:id", SportMongoController.deleteSportM);
exports.default = router;
//# sourceMappingURL=routes.js.map