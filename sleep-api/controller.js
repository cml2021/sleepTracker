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

// Endpoints

// Create entry
app.post('/create', asyncHandler(async (req, res) => {
    const response = await entry.createEntry(
        req.body.date, 
        req.body.timeIntoBed, 
        req.body.timeSleepAttempted, 
        req.body.numberAwakenings,
        req.body.durationAwakenings,
        req.body.timeFinalAwakening,
        req.body.timeUp,
        req.body.qualityRating,
        req.body.comments
        );
    res.type('application/json');
    res.send(response);
}))