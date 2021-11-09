const express = require('express');
const multer = require('multer');
const controller = require('./controller')
const response = require('../../network/response');


const router = express.Router();

const upload = multer({
    dest: 'uploads/'
})

router.get('/', function(req, res) {
    const filterMessages = req.query.user || null;
    controller.getMessages(filterMessages)
    .then((messageList) => {
        response.success(req, res, messageList, 200)
    }).catch((e) => {
        response.error(req, res, 'Unexpected Error', 500, e)
    });
    
});

router.post('/', upload.single('file'), function(req, res) {

    controller.addMessage(req.body.chat, req.body.user, req.body.message)
    .then((fullMessage) => {
        response.success(req, res, fullMessage, 201)
    }).catch(e => {
        response.error(req, res, 'Informacion invalida', 400, e)
    });
});

router.patch('/:id', function(req, res) {

    controller.updateMessage(req.params.id, req.body.message).then((data) => {
        console.log(data)
        response.success(req, res, data, 200)
    }).catch((e) => {
        console.log(e)
        response.error(req, res, 'Error interno', 500, e)
    });
});

router.delete('/:id', function(req, res) {
    controller.deleteMessage(req.params.id)
    .then(() => {
        response.success(req, res, `Message ${req.params.id} eliminado`, 200);
    }).catch((e) => {
        response.error(req, res, 'Error interno', 500, e);
    })
});

module.exports = router;