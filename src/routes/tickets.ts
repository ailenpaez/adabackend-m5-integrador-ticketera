import {Router} from "express";

import TicketsController from "../controller/tickets";

const ticketsRouter = Router()

ticketsRouter.get("/",TicketsController.getAllTickets) 
ticketsRouter.get("/:id",TicketsController.getTicketbyId) 
ticketsRouter.post("/",TicketsController.createTicket)
ticketsRouter.patch("/:id",TicketsController.updateTicketById);
ticketsRouter.delete("/:id",TicketsController.deleteTicketbyId);

export default ticketsRouter

