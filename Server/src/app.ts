import http from 'http';
import express from 'express';
import socketIO from 'socket.io';
import bodyParser from 'body-parser';
import { Sport } from '../models/sequelize/sport.model';
import { sequelize } from '../config/database.sequelize';

const app = express();
const server = http.createServer(app);
const io = socketIO(server);
export { io };

import router from '../routes/routes';

// import mongoose from 'mongoose';
// mongoose.connect('mongodb://localhost:27017/demo', { useNewUrlParser: true, useUnifiedTopology: true }, (Error) => {
//   if (!Error) {
//     console.log("MongoDB Connected");
//   }
//   else {
//     console.log("Error connecting to database.");
//   }
// });


app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
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

app.use('/', router);


server.listen(port);

// app.listen(port, err => {
//   if (err) {
//     return console.error(err);
//   }
//   return console.log(`server is listening on ${port}`);

// });