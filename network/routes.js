const express = require('express');
const router = require('../components/messages/network');
const message = require('../components/messages/network')

const routes = function(server) {

    server.use('/message', message)

}

module.exports = routes