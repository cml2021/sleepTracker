'use-strict';
import express from 'express';
import dotenv from 'dotenv';
import asyncHandler from 'express-async-handler';
import * as entry from './entry.js';

dotenv.config();
const PORT = process.env.PORT;
const app = express();
app.use(express.json());

app.listen(PORT, (req, res) => {
    console.log(`Listening on port ${PORT}...`)
});

// API Endpoints

// Create diary entry
app.post('/diary', asyncHandler(async (req, res) => {
    try {
        const response = await entry.createEntry(
            req.body.date, 
            req.body.timeIntoBed, 
            req.body.timeSleepAttempted, 
            req.body.sleepDelay,
            req.body.numberAwakenings,
            req.body.durationAwakenings,
            req.body.timeFinalAwakening,
            req.body.timeOutOfBed,
            req.body.qualityRating,
            req.body.comments
            );
        res.type('application/json');
        res.status(201);
        res.send(response);
    } catch (error) {
        console.log(error);
    }
}));


export default app;