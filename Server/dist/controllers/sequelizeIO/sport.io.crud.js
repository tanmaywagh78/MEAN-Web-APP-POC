"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sport_model_1 = require("../../models/sequelize/sport.model");
function sport_io_crud(io, socket) {
    const serverBaseRoute = "server/sport/";
    const clientBaseRoute = "client/sport/";
    socket.on(serverBaseRoute + "getall", () => {
        sport_model_1.Sport.findAll()
            .then((sports) => {
            socket.emit(clientBaseRoute + "getall", sports);
        }).catch((err) => { console.log(err); });
    });
    socket.on(serverBaseRoute + "get", id => {
        sport_model_1.Sport.findByPk(id)
            .then((sport) => {
            socket.emit(clientBaseRoute + "get", sport);
        }).catch((err) => { console.log(err); });
    });
    socket.on(serverBaseRoute + "post", sport => {
        sport_model_1.Sport.upsert(sport)
            .then((s) => {
            io.emit(clientBaseRoute + "post");
        }).catch((err) => { console.log(err); });
    });
    socket.on(serverBaseRoute + "delete", id => {
        sport_model_1.Sport.destroy({ where: { id: id } })
            .then((sports) => {
            io.emit(clientBaseRoute + "delete", sports);
        }).catch((err) => { console.log(err); });
    });
}
exports.default = sport_io_crud;
//# sourceMappingURL=sport.io.crud.js.map