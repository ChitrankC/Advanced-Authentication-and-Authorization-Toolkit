import * as z from "zod";

export const LoginSchema = z.object({
    email: z.string().email({
        message: "Teri maki email bhar na"
    }),
    password: z.string().min(1,{
        message: "password is required"
    }),
})

export const RegisterSchema = z.object({
    email: z.string().email({
        message: "Teri maki email bhar na"
    }),
    password: z.string().min(8,{
        message: "password is required"
    }),
    name : z.string().min(1,{
        message: "name is required"
    }),
})