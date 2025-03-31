import mongoose from "mongoose";


const logSchema = mongoose.Schema({
    instance: {
        type: String,
        required: true,
    }},
    {timestamps: true} // Automatically add createdAt and updatedAt fields
);

const LogModel = mongoose.model('logsEjemplo', logSchema);

export default LogModel;