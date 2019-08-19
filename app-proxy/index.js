"use strict";
const express = require("express");
const compression = require("compression");
const axios = require('axios');
const querystring = require('querystring');
const cors = require('cors');
const bodyParser = require('body-parser')

const _port = 4101;

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(compression());


app.post('/Token', function(req, res) {
  const config = {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  }
  const { grant_type, username, password } = req.body;
  const obj = { grant_type, username, password };

  axios.post('https://finsimtestwebapi.azurewebsites.net/Token', querystring.stringify(obj), config).then(rs => {
    return res.status(200).json(rs.data);
  }).catch(err => {
    console.log(err.response.data);
    return res.status(400).json(err.response.data);
  })
});

app.get('/Investments', function(req, res) {
  const authorization = req.headers.authorization;
  
  axios.get('https://finsimtestwebapi.azurewebsites.net/api/Investments', {
    headers: {
      Authorization: authorization
    }
  }).then(rs => {
    return res.status(200).send(rs.data);
  }).catch(err => {
    console.log(err.response.data);
    return res.status(400).json(err.response.data);
  })
});

app.get('/Investors', function(req, res) {
  const authorization = req.headers.authorization;
  
  axios.get('https://finsimtestwebapi.azurewebsites.net/api/Investors', {
    headers: {
      Authorization: authorization
    }
  }).then(rs => {
    return res.status(200).send(rs.data);
  }).catch(err => {
    console.log(err.response.data);
    return res.status(400).json(err.response.data);
  })
});

// start node server
app.listen(_port, function () {
  console.log("Node Express server for " + app.name + " listening on http://localhost:" + _port);
});