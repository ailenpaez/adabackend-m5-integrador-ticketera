import express, {json} from 'express';
import indexRouter from './routes';
import errorHandler from './middlewares/errorHandler';

const app = express();

//MIDDLEWARE

app.use(json());

//ROUTES

app.use("/status", (req, res) => {
    res.status(200).json({
        status:"OK",
        environment: process.env.ENVIRONMENT
    })
})

app.use("/", indexRouter);
app.use(errorHandler) // ESTE VA AL FINAL

export default app