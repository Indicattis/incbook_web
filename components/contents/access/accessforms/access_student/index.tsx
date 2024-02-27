'use client'

import { handleLogin } from "@/data/contexts/student";
import { useForm } from "react-hook-form";






export default function AccessStudent() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    return (
        <form action="" className="flex flex-col gap-3 items-center w-full  min-w-72" onSubmit={handleSubmit(handleLogin)}>
            <input 
            type="mail" 
            placeholder="E-mail" 
            {...register("student_email")}
            className="transition-all w-full bg-blue border-l-2 border-blue focus:border-gold rounded-sm outline-none p-3 placeholder:text-gray"/>
            <input 
            type="password" 
            placeholder="Senha" 
            {...register("student_password")}
            className="transition-all w-full bg-blue border-l-2 border-blue focus:border-gold rounded-sm outline-none p-3 placeholder:text-gray"/>
            <button type="submit" className="transition-all font-bold bg-gold  h-12 w-full rounded-sm active:scale-95">Entrar</button>
        </form>
    )
}