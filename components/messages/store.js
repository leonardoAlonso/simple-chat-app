const Model = require('./model');

console.log('[db] Conectada con exito')

async function _existDB(id) {
    const exist = await Model.exists({
        _id: id
    });
    return exist;
}

function addMessage(message) {
    const myMessage = new Model(message);
    myMessage.save();
}

async function getMessages(filterUser) {
    let filter = {};
    if (filterUser != null) {
        filter = {
            user: filterUser
        }
    }
    const menssages = await Model.find(filter);
    return menssages;
}

async function updateText(id, message) {
    const updatedMessage = await Model.findOneAndUpdate(
        {  _id: id },
        { message },
        { new: true }
    );

    return updatedMessage;
}

async function removeMessage(id) {
    if (await _existDB(id)) {
        return await Model.findOneAndDelete({_id: id})
    }
    return false;
}

module.exports = {
    add: addMessage,
    list: getMessages,
    updateText: updateText,
    remove: removeMessage,
}