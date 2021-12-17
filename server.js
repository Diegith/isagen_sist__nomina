import express, { Router } from 'express';
import mongoose from 'mongoose';
import route from './routes/routes';

const app = express();

app.use('/usuarios', route);

const PORT = 8000;
const URL = 'mongodb+srv://admin:admin@example.mdoyi.mongodb.net/example?retryWrites=true&w=majority'

mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true}).then(() => {

    app.listen(PORT, () => {
        console.log(`server is running successfully on port ${PORT}`);
    });
}).catch(error => {
    console.log("Eror", error.message);
})

