const store = require('./store');


function addMessage(chat, user, message) {

    return new Promise((resolve, reject) => {
        if (!chat || !user || !message){
            console.error('[messageController] No hay usuario o mensaje')
            reject('Los datos son incorrectos');
            return false;
        }

        const fullMessage = {
            chat: chat,
            user: user,
            message: message,
            date: new Date()
        };
        store.add(fullMessage)
        resolve(fullMessage);
    });
}

function getMessages(filterChat) {
    return new Promise((resolve, reject) => {
        resolve(store.list(filterChat));
    });
}

function updateMessage(id, message) {
    return new Promise((resolve, reject) => {
        if (!id || !message) {
            reject('Invalid data');
            return false;
        }
        const result = store.updateText(id, message);
        resolve(result);
    });
}

function deleteMessage(id) {
    return new Promise((resolve, reject) => {
        if(!id) {
            reject('Invalid data');
            return false;
        }
        store.remove(id)
        .then((data) => {
            if (!data) {
                reject('Message not found')
            }
            resolve();
        })
        .catch((e) => {
            reject(e);
        });
    });
}

module.exports = {
    addMessage,
    getMessages,
    updateMessage,
    deleteMessage,
}