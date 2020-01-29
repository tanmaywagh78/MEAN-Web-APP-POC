"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import * as mongoose from "mongoose";
const database_mongoose_1 = require("../../config/database.mongoose");
exports.SchoolSchema = new database_mongoose_1.mongoose.Schema({
    schl_name: String,
    schl_type: String
});
const School = database_mongoose_1.mongoose.model("School", exports.SchoolSchema);
exports.default = School;
//# sourceMappingURL=school.model.mongoose.js.map