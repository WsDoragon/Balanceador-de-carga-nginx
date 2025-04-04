import express from 'express';
import cors from 'cors';

//const routes = require('./routes/messages.router.js');
import MessageRouter from './routes/messages.router.js';
import connectarDB from './config/db.js';

import dotenv from 'dotenv';
dotenv.config();

const app = express();
const port = process.env.PORT || 4000;

connectarDB();

app.use(express.json());
app.use(cors());
app.use('/api', MessageRouter);

app.listen(port, () => {
    console.log(`Servidor en ejecución en el puerto ${port}`);
});
