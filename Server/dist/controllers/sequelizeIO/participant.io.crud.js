"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const participant_model_1 = require("../../models/sequelize/participant.model");
function participant_io_crud(io, socket) {
    const serverBaseRoute = "server/participant/";
    const clientBaseRoute = "client/participant/";
    socket.on(serverBaseRoute + "getall", () => {
        participant_model_1.Participant.findAll()
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
        }).catch((err) => { console.log(err); });
    });
    socket.on(serverBaseRoute + "get", id => {
        participant_model_1.Participant.findByPk(id)
            .then((participant) => {
            socket.emit(clientBaseRoute + "get", participant);
        }).catch((err) => { console.log(err); });
    });
    socket.on(serverBaseRoute + "post", participant => {
        participant_model_1.Participant.upsert(participant)
            .then((participant) => {
            io.emit(clientBaseRoute + "post");
        }).catch((err) => { console.log(err); });
    });
    socket.on(serverBaseRoute + "delete", id => {
        participant_model_1.Participant.destroy({ where: { id: id } })
            .then((participant) => {
            io.emit(clientBaseRoute + "delete");
        }).catch((err) => { console.log(err); });
    });
}
exports.default = participant_io_crud;
//# sourceMappingURL=participant.io.crud.js.map