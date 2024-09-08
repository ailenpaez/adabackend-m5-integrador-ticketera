import { z } from "zod";

const userSchema = z.object({
  username: z.string().min(1, { message: "USERNAME REQUIRED." }),
  email: z.string().email({ message: "INVALID EMAIL FORMAT." }),
  password: z
    .string()
    .min(6, { message: "The password must be at least 6 characters long." }),
  level: z.number().int().positive({ message: "LEVEL MUST BE A NUMBER." }),
  status: z.enum(["active", "inactive"], {
    message: "The status must be 'active' or 'inactive'",
  }),
  position: z.array(
    z.enum(
      [
        "support",
        "qa",
        "frontend",
        "backend",
        "video",
        "UX/UI",
        "dev",
        "other",
      ],
      {
        message: "Invalid position value.",
      }
    )
  ),
  country: z
    .string()
    .length(3, { message: "COUNTRY CODE MUST BE 3 CHARACTERS LONG." }),
  id: z.string().min(1, { message: "ID REQUIRED." }),
});

const validateUser = (obj: any) => userSchema.safeParse(obj);

const validatePartialUser = (obj: any) => userSchema.partial().safeParse(obj);

export { validateUser, validatePartialUser };
