"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import * as mongoose from "mongoose";
const database_mongoose_1 = require("../config/database.mongoose");
exports.SportSchema = new database_mongoose_1.mongoose.Schema({
    s_name: String,
    s_desc: String,
    s_type: String
});
const SportM = database_mongoose_1.mongoose.model("SportM", exports.SportSchema);
exports.default = SportM;
//# sourceMappingURL=sport.model.mongoose.js.map