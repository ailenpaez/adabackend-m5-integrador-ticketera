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
        environment: "development"
    })
})

app.use("/", indexRouter);
app.use(errorHandler)

export default app