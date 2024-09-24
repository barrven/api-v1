// This is the v1 functions api style
// const functions = require('firebase-functions');

//This is the v2 api style
const {onRequest} = require("firebase-functions/v2/https");
// this is used for logging to the server comman line console
const logger = require("firebase-functions/logger");

const express = require('express');
const app = express();

app.get('/hello', (req, res) => {
    logger.info("Hello logger", {structuredData: true});
    res.send('Hello from Firebase Functions!');
});

app.get('/test', (req, res) => {
    logger.info("hello from test");
    res.send('This is a test');
});

app.post('/data', (req, res) => {
    const data = req.body;
    res.send(`Received data: ${JSON.stringify(data)}`);
});

// v1 style
// exports.api = functions.https.onRequest(app);

// v2 style
exports.api = onRequest(app);