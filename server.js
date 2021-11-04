require('dotenv').config({path: '.env'});

const express = require('express');

const bodyParser = require('body-parser');

const router = require('./network/routes');

const db = require('./db');


db(process.env.DB_URI)

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

router(app);

app.use('/app', express.static('public'));

app.listen(3000);

console.log('La applicacion esta escuchando en http://localhost:3000');

