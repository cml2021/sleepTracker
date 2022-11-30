'use-strict';
import mongoose, { mongo, Schema } from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const MONGO_DB = process.env.MONGO_DB;

mongoose.connect(MONGO_DB).then(
    () => {console.log("Database connected...")},
    err => {console.log(error)}
);


// Define entry schema
const entrySchema = new Schema({
    date: {type: Date, required: true},
    timeIntoBed: {type: Date, required: true},
    timeSleepAttempted: {type: Date, required: true},
    numberAwakenings: {type: Number, required: true},
    durationAwakenings: {type: Number, required: true},
    timeFinalAwakening: {type: Date, required: true},
    timeUp: {type: Date, required: true},
    qualityRating: {type: String, required: true},
    comments: String
});

// define entry model
const Entry = mongoose.model('Entry', entrySchema);

