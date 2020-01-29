import { Socket, Server } from "socket.io";
import School, { ISchool } from '../../models/mongoose/school.model.mongoose';
import { Mongoose } from "mongoose";
import { ObjectID } from "bson";


export default function school_io_crud(io: Server, socket: Socket) {

    const serverBaseRoute = "server/school/";
    const clientBaseRoute = "client/school/";

    socket.on(serverBaseRoute + "getall", () => {
        School.find()
            .then((schools) => {
                socket.emit(clientBaseRoute + "getall", schools);
            }).catch((err) => { console.log(err) });
    });

    socket.on(serverBaseRoute + "get", (id: ObjectID) => {
        School.findById(id)
            .then((school) => {
                socket.emit(clientBaseRoute + "get", school);
            }).catch((err) => { console.log(err) });
    });

    socket.on(serverBaseRoute + "put", (school: ISchool) => {

        School.findByIdAndUpdate(school._id, school)
            .then((s) => {
                io.emit(clientBaseRoute + "put");
            }).catch((err) => { console.log(err) });
    });

    socket.on(serverBaseRoute + "post", (school: ISchool) => {
        let s = new School(school);
        s.save()
            .then((s) => {
                io.emit(clientBaseRoute + "post");
            }).catch((err) => { console.log(err) });
    });

    socket.on(serverBaseRoute + "delete", (id: ObjectID) => {
        School.findByIdAndDelete(id)
            .then((schools) => {
                io.emit(clientBaseRoute + "delete", schools);
            }).catch((err) => { console.log(err) });
    });

}
