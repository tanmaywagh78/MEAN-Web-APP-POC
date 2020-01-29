"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const school_model_1 = require("../models/sequelize/school.model");
// create new School
class SchoolController {
    static addSchool(req, res) {
        school_model_1.School.create({
            schl_name: req.body.schl_name,
            schl_type: req.body.schl_type,
        })
            .then((newSchool) => {
            var response = {
                success: true,
                message: 'New School created successfully',
                result: newSchool,
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
    static listSchool(req, res) {
        school_model_1.School.findAll()
            .then((Schools) => {
            return res.status(201).json({
                success: true,
                message: 'Schools listed successfully',
                result: Schools,
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
exports.SchoolController = SchoolController;
//# sourceMappingURL=school.controller.js.map