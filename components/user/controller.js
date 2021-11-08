const store = require('./store');

function getUsers(filterUser) {
    return new Promise((resolve, reject) => {
        resolve(store.list(filterUser));
    });
}

function addUser(name) {

    if (!name) {
        return Promise.reject('Invalid name');
    }

    const user = {
        name,
    };

    return store.add(user)
}

module.exports = {
    addUser,
    getUsers,
}