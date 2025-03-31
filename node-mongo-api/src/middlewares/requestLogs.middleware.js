import LogModel from '../models/log.model.js';

class InstanceLogsMIddleware {
    async logInstance(req, res, next) {
        try {
            //const { method, url } = req;
            const addLog = {instance: "Solicitud Recibida por: " + process.env.PORT};
            const logAdded = await new LogModel(addLog);
            await logAdded.save();
            next();
        } catch (error) {
            console.error('Error logging request:', error);
            res.status(500).json({ error: 'Failed to log request' });
        }
    }
}

export default new InstanceLogsMIddleware();