'use-strict';
import express from 'express';
import dotenv from 'dotenv';
import * as entry from './entry.js';

dotenv.config();
const PORT = process.env.PORT;
const app = express();
app.use(express.json());

app.listen(PORT, (req, res) => {
    console.log(`Listening on port ${PORT}...`)
});