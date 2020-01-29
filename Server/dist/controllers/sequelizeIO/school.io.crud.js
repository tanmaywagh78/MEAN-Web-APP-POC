"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const school_model_1 = require("../../models/sequelize/school.model");
function school_io_crud(io, socket) {
    const serverBaseRoute = "server/school/";
    const clientBaseRoute = "client/school/";
    socket.on(serverBaseRoute + "getall", () => {
        school_model_1.School.findAll()
            .then((schools) => {
            socket.emit(clientBaseRoute + "getall", schools);
        }).catch((err) => { console.log(err); });
    });
    socket.on(serverBaseRoute + "get", id => {
        school_model_1.School.findByPk(id)
            .then((school) => {
            socket.emit(clientBaseRoute + "get", school);
        }).catch((err) => { console.log(err); });
    });
    socket.on(serverBaseRoute + "post", school => {
        school_model_1.School.upsert(school)
            .then((s) => {
            io.emit(clientBaseRoute + "post");
        }).catch((err) => { console.log(err); });
    });
    socket.on(serverBaseRoute + "delete", id => {
        school_model_1.School.destroy({ where: { id: id } })
            .then((school) => {
            io.emit(clientBaseRoute + "delete");
        }).catch((err) => { console.log(err); });
    });
}
exports.default = school_io_crud;
//# sourceMappingURL=school.io.crud.js.map