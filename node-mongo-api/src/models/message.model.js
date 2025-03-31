import mongoose from 'mongoose';

const messageSchema = mongoose.Schema({
    message: {
        type: String,
        required: true,
        trim: true
    },
    receivedBy: {
        type: String,
        required: true,
        trim: true
    }},
    { timestamps: true } // Automatically add createdAt and updatedAt fields
);

const MessageModel = mongoose.model('Message', messageSchema);

export default MessageModel;