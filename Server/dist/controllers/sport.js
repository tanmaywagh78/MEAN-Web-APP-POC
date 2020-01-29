"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sport_model_1 = require("../models/sport.model");
// create new sport
function addSport(req, res) {
    sport_model_1.Sport.create({
        s_name: req.body.s_name,
        s_desc: req.body.s_desc,
        s_type: req.body.s_type,
    })
        .then((newSport) => {
        return res.status(201).json({
            success: true,
            message: 'New sport created successfully',
            Sport: newSport,
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
exports.addSport = addSport;
//# sourceMappingURL=sport.js.map