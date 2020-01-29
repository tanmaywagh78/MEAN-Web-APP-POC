"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const express_1 = __importDefault(require("express"));
const socket_io_1 = __importDefault(require("socket.io"));
const body_parser_1 = __importDefault(require("body-parser"));
const app = express_1.default();
const server = http_1.default.createServer(app);
const io = socket_io_1.default(server);
exports.io = io;
const routes_1 = __importDefault(require("../routes/routes"));
// import mongoose from 'mongoose';
// mongoose.connect('mongodb://localhost:27017/demo', { useNewUrlParser: true, useUnifiedTopology: true }, (Error) => {
//   if (!Error) {
//     console.log("MongoDB Connected");
//   }
//   else {
//     console.log("Error connecting to database.");
//   }
// });
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({
    extended: true,
}));
const port = 3000;
app.post('/', (req, res) => {
    res.send('Hello world');
});
//   sequelize.authenticate()
//     .then(() => {
//       console.log('Connection has been established successfully.');
//     })
//     .catch(err => {
//       console.error('Unable to connect to the database:', err);
//     });
//   res.sendStatus(200);
// });
app.use(function (req, res, next) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', "Origin, X-Requested-With, Content-Type, Accept, x-auth");
    // Pass to next layer of middleware
    next();
});
app.use('/', routes_1.default);
server.listen(port);
// app.listen(port, err => {
//   if (err) {
//     return console.error(err);
//   }
//   return console.log(`server is listening on ${port}`);
// });
//# sourceMappingURL=app.js.map