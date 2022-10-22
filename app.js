const express = require('express');
const app = express();
const cors = require('cors');
const router = require('./Routes/Router');

app.use(cors());
app.use(router);

module.exports = app;