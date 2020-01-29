"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sport_model_mongoose_1 = __importDefault(require("../models/sport.model.mongoose"));
function addSportM(req, res) {
    let sport = new sport_model_mongoose_1.default(req.body);
    sport.save()
        .then((result) => {
        res.status(201).json(result);
    }).catch((result) => {
        res.status(500).json(result);
    });
}
exports.addSportM = addSportM;
function allSportsM(req, res) {
    sport_model_mongoose_1.default.find((err, sports) => {
        if (err) {
            res.send("Error!");
        }
        else {
            res.send(sports);
        }
    });
}
exports.allSportsM = allSportsM;
function getSportM(req, res) {
    sport_model_mongoose_1.default.findById(req.params.id, (err, sport) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send(sport);
        }
    });
}
exports.getSportM = getSportM;
function deleteSportM(req, res) {
    sport_model_mongoose_1.default.deleteOne({ _id: req.params.id }, (err) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send("Successfully Deleted Sport");
        }
    });
}
exports.deleteSportM = deleteSportM;
;
function updateSportM(req, res) {
    console.log(req.body);
    sport_model_mongoose_1.default.findByIdAndUpdate(req.params.id, req.body, (err, sport) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send("Successfully updated sport!");
        }
    });
}
exports.updateSportM = updateSportM;
;
//# sourceMappingURL=sport.mongo.controller.js.map