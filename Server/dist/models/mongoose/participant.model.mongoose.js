"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import * as mongoose from "mongoose";
const database_mongoose_1 = require("../../config/database.mongoose");
const mongoose_1 = require("mongoose");
exports.ParticipantSchema = new database_mongoose_1.mongoose.Schema({
    p_name: String,
    p_standard: String,
    p_sportId: [{ type: mongoose_1.Types.ObjectId, ref: 'Sport' }],
    p_schoolId: [{ type: mongoose_1.Types.ObjectId, ref: 'School' }]
});
const Participant = database_mongoose_1.mongoose.model("Participant", exports.ParticipantSchema);
exports.default = Participant;
// db.participants.aggregate([{ "$lookup": { "from": "sports", "localField": "p_sportId", "foreignField": "_id", "as": "sportObj" } }]).pretty();
//# sourceMappingURL=participant.model.mongoose.js.map