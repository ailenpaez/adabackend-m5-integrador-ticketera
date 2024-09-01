import {Router} from "express";

import TicketsController from "../controller/tickets";

const ticketsRouter = Router()

ticketsRouter.get("/", (req, res) => {TicketsController.getAllTickets(req, res)})


export default ticketsRouter