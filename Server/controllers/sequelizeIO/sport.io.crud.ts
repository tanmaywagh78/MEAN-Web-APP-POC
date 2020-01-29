import { Socket, Server } from "socket.io";
import { Sport } from '../../models/sequelize/sport.model';


export default function sport_io_crud(io: Server, socket: Socket) {

    const serverBaseRoute = "server/sport/";
    const clientBaseRoute = "client/sport/";

    socket.on(serverBaseRoute + "getall", () => {
        Sport.findAll()
            .then((sports) => {
                socket.emit(clientBaseRoute + "getall", sports);
            }).catch((err) => { console.log(err) });
    });

    socket.on(serverBaseRoute + "get", id => {
        Sport.findByPk(id)
            .then((sport) => {
                socket.emit(clientBaseRoute + "get", sport);
            }).catch((err) => { console.log(err) });
    });

    socket.on(serverBaseRoute + "post", sport => {
        Sport.upsert(sport)
            .then((s) => {
                io.emit(clientBaseRoute + "post");
            }).catch((err) => { console.log(err) });
    });

    socket.on(serverBaseRoute + "delete", id => {
        Sport.destroy({ where: { id: id } })
            .then((sports) => {
                io.emit(clientBaseRoute + "delete",sports);
            }).catch((err) => { console.log(err) });
    });

}