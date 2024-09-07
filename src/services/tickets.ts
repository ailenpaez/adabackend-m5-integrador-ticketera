import { Request, Response } from "express";
import { v4 } from "uuid";
import TicketsModel from "../model/tickets";
import { BugTicket } from "../interfaces/ticketInterfaces";

class TicketsServices {
  static async getAllTickets() {
    try {
      const dataTickets = await TicketsModel.getAllTickets();
      return dataTickets.tickets;
    } catch (error) {
      throw error;
    }
  }

  // CREATE
  static async createTicket(bug: BugTicket) {
    try {
      const dbTicket = await TicketsModel.getAllTickets();

      const ticketId = v4();

      const newTicket = {
        ticketId: ticketId,
        username: bug.username,
        date: bug.date,
        area: bug.area,
        bugType: bug.bugType,
        description: bug.description,
        link: bug.link,
        evidence: bug.evidence,
        status: bug.status,
      };

      dbTicket.tickets.push(newTicket);

      await TicketsModel.writeTicket(dbTicket);

      return newTicket;
    } catch (error) {
      throw error;
    }
  }
  //READ
  static async getTicketById(id: string) {
    try {
      const data = await TicketsModel.getAllTickets();
      const tickets = data.tickets; // array de tickets

      const ticketFound = tickets.find((ticket) => ticket.ticketId === id);

      if (!ticketFound) {
        const error = new Error("TICKET_NOT_FOUND");
        error["statusCode"] = 404;

        throw error;
      }

      return ticketFound;
    } catch (error) {
      throw error;
    }
  }
  //UPDATE - falta
  static async updateTicketById(id, data) {
    try {
      await TicketsModel.writeTicket("ALGO");
    } catch (error) {
      throw error;
    }
  }
  //DELETE
  static async deleteTicketById(id) {
    try {
      const tdb = await TicketsModel.getAllTickets();

      const filteredTickets = tdb.tickets.filter(
        (ticket) => ticket.ticketId !== id
      );

      if (tdb.tickets.length === filteredTickets.length) {
        const error = new Error("TICKET_NOT_FOUND");
        error["statusCode"] = 404;
        throw error;
      }

      tdb.tickets = filteredTickets;

      await TicketsModel.writeTicket(tdb);

      return { message: "TICKET_DELETED_SUCCESSFULLY" };
    } catch (error) {
      throw error;
    }
  }
}

export default TicketsServices;
