import express, {json} from 'express';
import indexRouter from './routes';

const app = express();

//MIDDLEWARE

app.use(json());

//ROUTES

app.use("/", (req, res) => {
    res.status(200).json({
        status:"OK",
        environment: "development"
    })
})

app.use("/api", indexRouter);




export default app