'use client'

import { handleLogin } from "@/data/contexts/teacher";
import { getTeacherToken } from "@/data/contexts/token/teacherToken";
import { useCallback, useEffect } from "react";
import { useForm } from "react-hook-form";

export default function AccessTeacher() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    // const Auth = useCallback( async () => {
    //     try {
    //         const tokenInfo = await getTeacherToken();
    //         if (!tokenInfo) {
    //           return;
    //         } else {
    //           window.location.href = '/';
    //         } 
    //     }
    //     finally {

    //     }
    //   }, []); 
    // useEffect( () => {
    //     Auth()
    // },[Auth])

    return (
        <form action="" className="flex flex-col gap-3 items-center w-full " onSubmit={handleSubmit(handleLogin)}>
            <input 
            type="mail" 
            placeholder="E-mail" 
            {...register("teacher_email")}
            className="w-full bg-transparent border border-pink rounded-full outline-none p-3 placeholder:text-zinc-500"/>
            <input 
            type="password" 
            placeholder="Senha" 
            {...register("teacher_password")}
            className="w-full bg-transparent border border-pink rounded-full outline-none p-3 placeholder:text-zinc-500"/>
            <button type="submit" className="transition-all font-bold bg-gradient-to-tr from-red-400 to-pink h-12 w-full rounded-full active:scale-95">Entrar</button>
        </form>
    )
}