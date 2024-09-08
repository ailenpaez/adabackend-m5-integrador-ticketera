import { z } from "zod";

const ticketSchema = z.object({
  ticketId: z.string().min(1, { message: "ID REQUIRED." }),
  username: z.string().min(1, { message: "USERNAME REQUIRED." }),
  date: z.string().min(1, { message: "DATE REQUIRED." }),
  area: z.array(z.string().min(1, { message: "AREA INFO REQUIRED." })),
  bugType: z.string().min(1, { message: "BUG INFO REQUIRED." }),
  description: z.string().min(10, { message: "The description must be at least 10 characters long" }),
  link: z.string().url({ message: "Insert a valid URL" }),
  evidence: z.array(z.string().min(1, { message: "EVIDENCE REQUIRED." })),
  status: z.enum(["pending", "done"], { message: "The status must be 'pending' or 'done'" }),
});

const validateTicket = (obj: any) => ticketSchema.safeParse(obj);

const validatePartialTicket = (obj: any) =>
  ticketSchema.partial().safeParse(obj);

export { validateTicket, validatePartialTicket };
