import mongoose from "mongoose";


const logSchema = mongoose.Schema({
    instance: {
        type: String,
        required: true,
    },
    request: {
        type: String,
        required: true,
        trim: true,
    },
    url: {
        type: String,
        required: true,
        trim: true,
    },
},
    {timestamps: true} // Automatically add createdAt and updatedAt fields
);

const LogModel = mongoose.model('logsEjemplo', logSchema);

export default LogModel;
