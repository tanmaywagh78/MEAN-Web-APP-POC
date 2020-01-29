"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const school_model_mongoose_1 = __importDefault(require("../../models/mongoose/school.model.mongoose"));
function school_io_crud(io, socket) {
    const serverBaseRoute = "server/school/";
    const clientBaseRoute = "client/school/";
    socket.on(serverBaseRoute + "getall", () => {
        school_model_mongoose_1.default.find()
            .then((schools) => {
            socket.emit(clientBaseRoute + "getall", schools);
        }).catch((err) => { console.log(err); });
    });
    socket.on(serverBaseRoute + "get", (id) => {
        school_model_mongoose_1.default.findById(id)
            .then((school) => {
            socket.emit(clientBaseRoute + "get", school);
        }).catch((err) => { console.log(err); });
    });
    socket.on(serverBaseRoute + "put", (school) => {
        school_model_mongoose_1.default.findByIdAndUpdate(school._id, school)
            .then((s) => {
            io.emit(clientBaseRoute + "put");
        }).catch((err) => { console.log(err); });
    });
    socket.on(serverBaseRoute + "post", (school) => {
        let s = new school_model_mongoose_1.default(school);
        s.save()
            .then((s) => {
            io.emit(clientBaseRoute + "post");
        }).catch((err) => { console.log(err); });
    });
    socket.on(serverBaseRoute + "delete", (id) => {
        school_model_mongoose_1.default.findByIdAndDelete(id)
            .then((schools) => {
            io.emit(clientBaseRoute + "delete", schools);
        }).catch((err) => { console.log(err); });
    });
}
exports.default = school_io_crud;
//# sourceMappingURL=school.mongo.controller.js.map