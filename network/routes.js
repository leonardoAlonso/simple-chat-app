const message = require('../components/messages/network')
const user = require('../components/user/netwrok')

const routes = function(server) {

    server.use('/message', message)
    server.use('/user', user)

}

module.exports = routes