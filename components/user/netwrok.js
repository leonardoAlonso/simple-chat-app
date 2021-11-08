const express = require('express');
const controller = require('./controller')
const response = require('../../network/response');

const router = express.Router();


router.get('/', function(req, res) {
    const filterUser = req.query.name || null;
    controller.getUsers(filterUser)
    .then((data) => {
        response.success(req, res, data, 200)
    }).catch((e) => {
        response.error(req, res, 'Unexpected Error', 500, e)
    });
    
});


router.post('/', function(req, res) {
    controller.addUser(req.body.name)
    .then((data) => {
        response.success(req, res, data, 201);
    }).catch((e) => {
        response.error(req, res, 'Internal error', 500, e)
    })
});

module.exports = router;