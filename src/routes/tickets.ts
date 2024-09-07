import {Router} from "express";

import TicketsController from "../controller/tickets";

const ticketsRouter = Router()

ticketsRouter.get("/",TicketsController.getAllTickets) //LISTO
ticketsRouter.get("/:id",TicketsController.getTicketbyId) //buscar bug por id
ticketsRouter.post("/",TicketsController.createTicket)//LISTO
ticketsRouter.patch("/:id",TicketsController.updateTicketById);
ticketsRouter.delete("/:id",TicketsController.deleteTicketbyId); // LISTO

export default ticketsRouter

