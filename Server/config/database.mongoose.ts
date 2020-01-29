import { Mongoose } from 'mongoose';
const mongoose = new Mongoose();
mongoose.connect('mongodb://localhost:27017/isc2', { useNewUrlParser: true, useUnifiedTopology: true }, (Error) => {
    if (!Error) {
        console.log("MongoDB Connected");
    }
    else {
        console.log("Error connecting to database.");
    }
});

export { mongoose };
