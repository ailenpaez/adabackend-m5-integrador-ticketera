export interface Ticket {
  ticketId: string; // ID ticket -> UUID
  username: string; // Username de quien reporta
  date: string; // Fecha en que se reportó el bug 
  area: string[]; // Area a la que se reportará
  bugType: string; // Tipo de bug
  description: string; // Descripción detallada del problema
  link: string; // link del problema
  evidence: string[]; // Evidencias -> (screenshots/videos)
  status: string; // status del ticket-> "waiting"/"solved"
}
