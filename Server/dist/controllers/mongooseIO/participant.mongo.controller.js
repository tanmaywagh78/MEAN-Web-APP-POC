"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const participant_model_mongoose_1 = __importDefault(require("../../models/mongoose/participant.model.mongoose"));
function participant_io_crud(io, socket) {
    const serverBaseRoute = "server/participant/";
    const clientBaseRoute = "client/participant/";
    socket.on(serverBaseRoute + "getall", () => {
        participant_model_mongoose_1.default.find()
            .populate('p_sportId')
            .populate('p_schoolId')
            .then((participants) => {
            socket.emit(clientBaseRoute + "getall", participants);
        }).catch((err) => { console.log(err); });
    });
    socket.on(serverBaseRoute + "get", (id) => {
        participant_model_mongoose_1.default.findById(id)
            .then((participant) => {
            socket.emit(clientBaseRoute + "get", participant);
        }).catch((err) => { console.log(err); });
    });
    socket.on(serverBaseRoute + "put", (participant) => {
        participant_model_mongoose_1.default.findByIdAndUpdate(participant._id, participant)
            .then((s) => {
            io.emit(clientBaseRoute + "put");
        }).catch((err) => { console.log(err); });
    });
    socket.on(serverBaseRoute + "post", (participant) => {
        let s = new participant_model_mongoose_1.default(participant);
        s.save()
            .then((s) => {
            io.emit(clientBaseRoute + "post");
        }).catch((err) => { console.log(err); });
    });
    socket.on(serverBaseRoute + "delete", (id) => {
        participant_model_mongoose_1.default.findByIdAndDelete(id)
            .then((participants) => {
            io.emit(clientBaseRoute + "delete", participants);
        }).catch((err) => { console.log(err); });
    });
}
exports.default = participant_io_crud;
//# sourceMappingURL=participant.mongo.controller.js.map