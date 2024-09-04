import { Request, Response } from "express";
import TicketsModel from "../model/tickets";

class TicketsServices {
  static async getAllTickets() {
    try {
      await TicketsModel.getAllTickets();
    } catch (error) {
      throw error;
    }
  }

  static async createTicket(data) {
    try {
      await TicketsModel.writeTicket("ALGO");
    } catch (error) {
      throw error;
    }
  }
  static async updateTicket(id, data) {
    try {
      await TicketsModel.writeTicket("ALGO");
    } catch (error) {
      throw error;
    }
  }
  static async deleteTicket(id) {
    try {
      await TicketsModel.writeTicket("ALGO");
    } catch (error) {
      throw error;
    }
  }
}

export default TicketsServices;
