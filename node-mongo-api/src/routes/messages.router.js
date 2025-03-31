import express from 'express';
import Messages from '../controllers/messages.js';
import InstanceLogsMIddleware from '../middlewares/requestlogs.middleware.js';

class MessageRouter {
    constructor() {
        this.router = express.Router();
        this.router.post('/message', InstanceLogsMIddleware.logInstance, Messages.addMessage);
        this.router.get('/messages', InstanceLogsMIddleware.logInstance, Messages.getMessages);
    }

}

export default new MessageRouter().router;