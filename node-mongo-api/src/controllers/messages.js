
import MessageModel from '../models/message.model.js';


class Messages {
    
    async addMessage(req, res) {

        try {
            const { message, receivedBy } = req.body;
            const dataAdd = {message: req.body.message, receivedBy: process.env.PORT};
            const newMessage = await new MessageModel(dataAdd);
            await newMessage.save();
            res.status(201).json(newMessage);
        } catch (error) {
            res.status(500).json({ error: 'Failed to add message' });
        }
    }

    async getMessages(req, res) {
        try {
            const messages = await MessageModel.find();
            res.status(200).json(messages);
        } catch (error) {
            res.status(500).json({ error: 'Failed to fetch messages' });
        }
    }

    async getMessagesFromPort(req, res) {
        try {
            const port = req.params.port;
            const messages = await MessageModel.find({ receivedBy: port });
            res.status(200).json(messages);
        } catch (error) {
            res.status(500).json({ error: 'Failed to fetch messages' });
        }
    }


}
export default new Messages();
