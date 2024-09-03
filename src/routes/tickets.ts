import {Router} from "express";

import TicketsController from "../controller/tickets";

const ticketsRouter = Router()

// ticketsRouter.get("/",TicketsController.getAllTickets)
// ticketsRouter.post("/",TicketsController.createTicket)
// ticketsRouter.patch("/:id",TicketsController.updateTicket);
// ticketsRouter.delete("/:id",TicketsController.deleteTicket);

export default ticketsRouter

