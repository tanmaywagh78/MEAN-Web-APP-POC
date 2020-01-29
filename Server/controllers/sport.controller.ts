import { sequelize } from '../config/database.sequelize';
import { Sport } from '../models/sequelize/sport.model';
import { io } from '../src/app';
import { Request, Response } from "express";

interface response {
    success: boolean,
    message: string,
    result: any[] | any;
}
// create new sport
export class SportController {
    public static addSport(req, res) {
        Sport.create({
            s_name: req.body.s_name,
            s_desc: req.body.s_desc,
            s_type: req.body.s_type,

        })
            .then((newSport) => {
                io.emit('sport_added');
                var response: response = {
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

    public static listSport(req, res) {
        Sport.findAll()
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

import sport_io_crud from "./mongooseIO/sport.mongo.controller";
import school_io_crud from "./mongooseIO/school.mongo.controller";
import participant_io_crud from "./mongooseIO/participant.mongo.controller";
io.on("connection", socket => {
    sport_io_crud(io, socket);
    school_io_crud(io, socket);
    participant_io_crud(io, socket);
});
 