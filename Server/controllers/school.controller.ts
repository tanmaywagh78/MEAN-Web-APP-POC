import { sequelize } from '../config/database.sequelize';
import { School } from '../models/sequelize/school.model';

interface response {
    success: boolean,
    message: string,
    result: any[] | any;
}
// create new School
export class SchoolController {
    public static addSchool(req, res) {
        School.create({
            schl_name: req.body.schl_name,
            schl_type: req.body.schl_type,

        })
            .then((newSchool) => {
                var response: response = {
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

    public static listSchool(req, res) {
        School.findAll()
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
