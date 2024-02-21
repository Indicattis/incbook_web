'use client'

import { handleLogin } from "@/data/contexts/student";
import { useForm } from "react-hook-form";






export default function AccessStudent() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    return (
        <form action="" className="flex flex-col gap-3 items-center w-full " onSubmit={handleSubmit(handleLogin)}>
            <input 
            type="mail" 
            placeholder="E-mail" 
            {...register("mail")}
            className="w-full bg-transparent border border-blue rounded-full outline-none p-3 placeholder:text-zinc-500"/>
            <input 
            type="password" 
            placeholder="Senha" 
            {...register("password")}
            className="w-full bg-transparent border border-blue rounded-full outline-none p-3 placeholder:text-zinc-500"/>
            <button type="submit" className="transition-all font-bold bg-gradient-to-tr from-teal-400 to-blue h-12 w-full rounded-full active:scale-95">Entrar</button>
        </form>
    )
}