"use strict";
const express = require("express");
const compression = require("compression");
const https = require('https')
const fs = require('fs')

const _port = 4100;
const _app_folder = './finsim-ng/dist/finsim-ng';

const app = express();
app.use(compression());


// ---- SERVE STATIC FILES ---- //
app.get('*.*', express.static(_app_folder, {maxAge: '1y'}));

// ---- SERVE APLICATION PATHS ---- //
app.all('*', function (req, res) {
    res.status(200).sendFile(`/`, {root: _app_folder});
});

// ---- START UP THE NODE SERVER  ----
app.listen(_port, function () {
    console.log("Node Express server for " + app.name + " listening on http://localhost:" + _port);
});

/* const httpsOptions = {
    key: fs.readFileSync('./certs/key.pem'),
    cert: fs.readFileSync('./certs/cert.pem')
}
const server = https.createServer(httpsOptions, app).listen(_port, () => {
    console.log('server running at ' + _port)
}) */