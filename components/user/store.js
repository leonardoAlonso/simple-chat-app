const Model = require('./model');

function addUser(user) {
    const myUser = new Model(user);
    return myUser.save();
}

async function getUsers(filterUser) {
    let filter = {};
    if (filterUser != null) {
        filter = {
            name: filterUser
        }
    }
    const menssages = await Model.find(filter);
    return menssages;
}


module.exports = {
    add: addUser,
    list: getUsers
}