import { Socket, Server } from "socket.io";
import Sport, { ISport } from '../../models/mongoose/sport.model.mongoose';
import { Mongoose } from "mongoose";
import { ObjectID } from "bson";


export default function sport_io_crud(io: Server, socket: Socket) {

    const serverBaseRoute = "server/sport/";
    const clientBaseRoute = "client/sport/";

    socket.on(serverBaseRoute + "getall", () => {
        Sport.find()
            .then((sports) => {
                socket.emit(clientBaseRoute + "getall", sports);
            }).catch((err) => { console.log(err) });
    });

    socket.on(serverBaseRoute + "get", (id: ObjectID) => {
        Sport.findById(id)
            .then((sport) => {
                socket.emit(clientBaseRoute + "get", sport);
            }).catch((err) => { console.log(err) });
    });

    socket.on(serverBaseRoute + "put", (sport: ISport) => {

        Sport.findByIdAndUpdate(sport._id, sport)
            .then((s) => {
                io.emit(clientBaseRoute + "put");
            }).catch((err) => { console.log(err) });
    });

    socket.on(serverBaseRoute + "post", (sport: ISport) => {
        console.log("socket io post method",sport);
        let s = new Sport(sport);
        s.save()
            .then((s) => {
                io.emit(clientBaseRoute + "post");
            }).catch((err) => { console.log(err) });
    });

    socket.on(serverBaseRoute + "delete", (id: ObjectID) => {
        Sport.findByIdAndDelete(id)
            .then((sports) => {
                io.emit(clientBaseRoute + "delete", sports);
            }).catch((err) => { console.log(err) });
    });

}

// import { Request, Response } from "express";
// import Sport from '../models/sport.model.mongoose';



// export function addSport(req: Request, res: Response) {
//     let sport = new Sport(req.body);
//     sport.save()
//         .then((result) => {
//             res.status(201).json(result);
//         }).catch((result) => {
//             res.status(500).json(result);
//         })
// }

// export function allSports(req: Request, res: Response) {
//     Sport.find((err: any, sports: any) => {
//         if (err) {
//             res.send("Error!");
//         } else {
//             res.send(sports);
//         }
//     });
// }

// export function getSport(req: Request, res: Response) {
//     Sport.findById(req.params.id, (err: any, sport: any) => {
//         if (err) {
//             res.send(err);
//         } else {
//             res.send(sport);
//         }
//     });
// }

// export function deleteSport(req: Request, res: Response) {
//     Sport.deleteOne({ _id: req.params.id }, (err: any) => {
//         if (err) {
//             res.send(err);
//         } else {
//             res.send("Successfully Deleted Sport");
//         }
//     });
// };

// export function updateSport(req: Request, res: Response) {
//     console.log(req.body);
//     Sport.findByIdAndUpdate(
//         req.params.id,
//         req.body,
//         (err: any, sport: any) => {
//             if (err) {
//                 res.send(err);
//             } else {
//                 res.send("Successfully updated sport!");
//             }
//         }
//     );
// };

