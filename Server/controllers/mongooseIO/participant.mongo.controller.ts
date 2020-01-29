import { Socket, Server } from "socket.io";
import Participant, { IParticipant } from '../../models/mongoose/participant.model.mongoose';
import { Mongoose } from "mongoose";
import { ObjectID } from "bson";


export default function participant_io_crud(io: Server, socket: Socket) {

    const serverBaseRoute = "server/participant/";
    const clientBaseRoute = "client/participant/";

    socket.on(serverBaseRoute + "getall", () => {
        Participant.find()
            .populate('p_sportId')
            .populate('p_schoolId')
            .then((participants) => {
                socket.emit(clientBaseRoute + "getall", participants);
            }).catch((err) => { console.log(err) });
    });

    socket.on(serverBaseRoute + "get", (id: ObjectID) => {
        Participant.findById(id)
            .then((participant) => {
                socket.emit(clientBaseRoute + "get", participant);
            }).catch((err) => { console.log(err) });
    });

    socket.on(serverBaseRoute + "put", (participant: IParticipant) => {

        Participant.findByIdAndUpdate(participant._id, participant)
            .then((s) => {
                io.emit(clientBaseRoute + "put");
            }).catch((err) => { console.log(err) });
    });

    socket.on(serverBaseRoute + "post", (participant: IParticipant) => {
        let s = new Participant(participant);
        s.save()
            .then((s) => {
                io.emit(clientBaseRoute + "post");
            }).catch((err) => { console.log(err) });
    });

    socket.on(serverBaseRoute + "delete", (id: ObjectID) => {
        Participant.findByIdAndDelete(id)
            .then((participants) => {
                io.emit(clientBaseRoute + "delete", participants);
            }).catch((err) => { console.log(err) });
    });

}
