'use-strict';
import mongoose, { Schema } from "mongoose";
import dotenv from "dotenv";
import { intervalToDuration } from "date-fns";

dotenv.config();
const DB_URL = process.env.DB_URL;

// connect to database
const connect = async () => {
    await mongoose.connect(DB_URL);
    console.log("Database connected...")
};

// clear database
const clear = async () => {
    const collections = mongoose.connection.collections;
    for (const key in collections) {
        const collection = collections[key];
        await collection.deleteMany();
    }
}

connect();

// Define diary entry schema
const entrySchema = new Schema({
    date: { type: Date, required: true },                 // The date of the morning the user is adding the entry      
    timeIntoBed: { type: Date, required: true },          // The time the user got into bed
    timeSleepAttempted: { type: Date, required: true },   // The time the user attempted to go to sleep
    sleepDelay: { type: Number, required: true },         // The duration (in minutes) it took for the user to fall asleep
    numberAwakenings: { type: Number, required: true },   // The number of times the user woke up during the night
    durationAwakenings: { type: Number, required: true }, // The duration (in minutes) the user was awake during the night
    timeFinalAwakening: { type: Date, required: true },   // The time the user woke up for the last time
    timeOutOfBed: { type: Date, required: true },         // The time the user got out of bed for the last time
    qualityRating: { type: String, required: true },      // The user’s subjective rating of their sleep quality
    comments: String,                                     // The user’s comments on their sleep
    durationInBed: Number,                                // The total duration (in minutes) that the user spent in bed during the night
    durationAsleep: Number,                               // The total duration (in minutes) that the user spent asleep during the night
    sleepEfficiency: Number                               // The percentage of the time in bed that the user spent asleep
});

// define diary entry model
const Entry = mongoose.model('Entry', entrySchema);

/**
 * Method to create a new diary entry instance in the database
 * 
 * @param {date} date                   The date of the morning the user is adding the entry
 * @param {date} timeIntoBed            The time the user got into bed
 * @param {date} timeSleepAttempted     The time the user attempted to go to sleep
 * @param {number} sleepDelay           The duration (in minutes) it took for the user to fall asleep
 * @param {number} numberAwakenings     The number of times the user woke up during the night
 * @param {number} durationAwakenings   The duration (in minutes) the user was awake during the night
 * @param {date} timeFinalAwakening     The time the user woke up for the last time
 * @param {date} timeOutOfBed           The time the user got out of bed for the last time
 * @param {string} qualityRating        The user’s subjective rating of their sleep quality
 * @param {string} comments             The user’s comments on their sleep
 * @returns                             Promise that resolves to newly created entry instance
 */
const createEntry = async (date, timeIntoBed, timeSleepAttempted, sleepDelay, numberAwakenings, durationAwakenings, timeFinalAwakening, timeOutOfBed, qualityRating, comments) => {
    
    // check that a diary entry for the date does not already exist
    const existingEntry = await Entry.findOne({date: date}).exec();
    if (existingEntry !== null) {
        throw new Error("A diary entry already exists for this date.")
    }

    // calculate summary stats
    const [durationInBed, durationAsleep, sleepEfficiency] = calcStats(timeIntoBed, timeOutOfBed, timeSleepAttempted, timeFinalAwakening);

    // create new entry instance
    const newEntry = new Entry({
        date: date,
        timeIntoBed: timeIntoBed,
        timeSleepAttempted: timeSleepAttempted,
        sleepDelay: sleepDelay,
        numberAwakenings: numberAwakenings,
        durationAwakenings: durationAwakenings,
        timeFinalAwakening: timeFinalAwakening,
        timeOutOfBed: timeOutOfBed,
        qualityRating: qualityRating,
        comments: comments,
        durationInBed: durationInBed,
        durationAsleep: durationAsleep,
        sleepEfficiency: sleepEfficiency
    });
    const savedEntry = await newEntry.save();
    return savedEntry;
};

/**
 * Calculates durationInBed, durationAsleep, and sleepEfficiency for a diary entry
 * 
 * @param {date} timeIntoBed            The time the user got into bed
 * @param {date} timeOutOfBed           The time the user got out of bed for the last time
 * @param {date} timeSleepAttempted     The time the user attempted to go to sleep
 * @param {date} timeFinalAwakening     The time the user woke up for the last time
 * @returns                             Tuple of durationInBed, durationAsleep, and sleepEfficiency
 */
const calcStats = (timeIntoBed, timeOutOfBed, timeSleepAttempted, timeFinalAwakening) => {
    // calculate durationInBed
    let durationInBed = intervalToDuration({
        start: new Date(timeIntoBed),
        end: new Date(timeOutOfBed)
    })
    durationInBed = durationInBed['hours'] * 60 + durationInBed['minutes']; // convert to minutes

    // calculate durationAsleep
    let durationAsleep = intervalToDuration({
        start: new Date(timeSleepAttempted),
        end: new Date(timeFinalAwakening)
    })
    durationAsleep = durationAsleep['hours'] * 60 + durationAsleep['minutes'] // convert to minutes

    // calculate sleepEfficiency
    const sleepEfficiency = Math.round((durationAsleep / durationInBed) * 100);

    return [durationInBed, durationAsleep, sleepEfficiency];
}


export {clear, createEntry, calcStats}