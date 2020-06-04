
const express = require('express');
const app = express();
const db = require('./config/db')
const consign = require('consign')
const settings = require('./config/settings')

consign()
    .then('./config/middlewares.js')
    .then('./api')
    .then('./config/routes.js')
    .into(app)

app.db = db

app.listen(settings.port, () => {
    console.log(settings.messageSuccesServer);
    console.log('Server Port', settings.port)
})