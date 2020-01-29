import { Socket, Server } from "socket.io";
import { Participant } from '../../models/sequelize/participant.model';
import { School } from '../../models/sequelize/school.model';
import { Sport } from '../../models/sequelize/sport.model';

export default function participant_io_crud(io: Server, socket: Socket) {

    const serverBaseRoute = "server/participant/";
    const clientBaseRoute = "client/participant/";

    socket.on(serverBaseRoute + "getall", () => {
        Participant.findAll()
        // Participant.findAll({
        //     include: [{
        //         model: School
        //     },
        //     {
        //         model: Sport
        //     }]
        // })
            .then((participants) => {
                socket.emit(clientBaseRoute + "getall", participants);
            }).catch((err) => { console.log(err) });
    });

    socket.on(serverBaseRoute + "get", id => {
        Participant.findByPk(id)
            .then((participant) => {
                socket.emit(clientBaseRoute + "get", participant);
            }).catch((err) => { console.log(err) });
    });

    socket.on(serverBaseRoute + "post", participant => {
        Participant.upsert(participant)
            .then((participant) => {
                io.emit(clientBaseRoute + "post");
            }).catch((err) => { console.log(err) });
    });

    socket.on(serverBaseRoute + "delete", id => {
        Participant.destroy({ where: { id: id } })
            .then((participant) => {
                io.emit(clientBaseRoute + "delete");
            }).catch((err) => { console.log(err) });
    });

}