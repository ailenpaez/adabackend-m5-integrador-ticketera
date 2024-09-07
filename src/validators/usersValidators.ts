import { z } from "zod";

const userSchema = z.object({
  username: z
    .string({
      invalid_type_error: "El usuario debe ser string.",
      required_error: "el username es requerido.",
    })
    .min(5, { message: "El username debe tener al menos 5 caracteres." }),
  email: z.string().email(),
  password: z.string().min(6,{message:"La password debe tener al menos 6 caracteres,"} ),
  level: z.number().int(),
  status: z.enum(["done", "pending"]),
  position: z.array(z.enum(["support", "QA", "frontend", "backend", "video"])),
  country: z.string().length(3, {message: "Las siglas deben contener 3 caracteres"}),
  id: z.string(),
});

const validateUser = (obj: any) => userSchema.safeParse(obj);

const validatePartialUser = (obj: any) => userSchema.partial().safeParse(obj);

export { validateUser, validatePartialUser };
