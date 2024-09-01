import express, {json} from 'express';
import indexRouter from './routes';

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




export default app