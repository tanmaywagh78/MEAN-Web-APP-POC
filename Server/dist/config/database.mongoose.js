"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const mongoose = new mongoose_1.Mongoose();
exports.mongoose = mongoose;
mongoose.connect('mongodb://localhost:27017/isc2', { useNewUrlParser: true, useUnifiedTopology: true }, (Error) => {
    if (!Error) {
        console.log("MongoDB Connected");
    }
    else {
        console.log("Error connecting to database.");
    }
});
//# sourceMappingURL=database.mongoose.js.map