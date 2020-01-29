import { Socket, Server } from "socket.io";
import { School} from '../../models/sequelize/school.model';

export default function school_io_crud(io: Server, socket: Socket) {

    const serverBaseRoute = "server/school/";
    const clientBaseRoute = "client/school/";

    socket.on(serverBaseRoute + "getall", () => {
        School.findAll()
            .then((schools) => {
                socket.emit(clientBaseRoute + "getall", schools);
            }).catch((err) => { console.log(err) });
    });

    socket.on(serverBaseRoute + "get", id => {
        School.findByPk(id)
            .then((school) => {
                socket.emit(clientBaseRoute + "get", school);
            }).catch((err) => { console.log(err) });
    });

    socket.on(serverBaseRoute + "post", school => {
        School.upsert(school)
            .then((s) => {
                io.emit(clientBaseRoute + "post");
            }).catch((err) => { console.log(err) });
    });

    socket.on(serverBaseRoute + "delete", id => {
        School.destroy({ where: { id: id } })
            .then((school) => {
                io.emit(clientBaseRoute + "delete");
            }).catch((err) => { console.log(err) });
    });

}