export interface BugTicket {
  ticketId: string; 
  username?: string; // Username de quien reporta
  date: string; 
  area: string[]; 
  bugType: string; 
  description: string;
  link: string;
  evidence: string[]; 
  status: string;
}
