"use strict";
const express = require("express");
const compression = require("compression");

const _port = 4100;
const _app_folder = '../finsim-ng/dist/finsim-ng';

const app = express();
app.use(compression());


// serve static files
app.get('*.*', express.static(_app_folder, {maxAge: '1y'}));

// serve aplication paths
app.all('*', function (req, res) {
    res.status(200).sendFile(`/`, {root: _app_folder});
});

// start node server
app.listen(_port, function () {
    console.log("Node Express server for " + app.name + " listening on http://localhost:" + _port);
});