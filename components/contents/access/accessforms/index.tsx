'use client'

import { useState } from "react"
import AccessTeacher from "./access_teacher"
import AccessStudent from "./access_student"




export default function AccessForms() {
    const [model, setModel] = useState<number>(1)
    return (
        <div className="flex flex-col items-center gap-3  min-w-72">
            <div className="text-xs text-zinc-500">Bem vindo(a)!</div>
            <div className="font-poppins font-bold mt-1 tracking-widest text-2xl">Acesso</div>
            <div className="font-bold text-sm tracking-wider relative flex justify-center items-center  rounded-full h-14 w-56 overflow-hidden">
                <div className={`${model == 1 ? "": ""} z-20 w-full h-14 flex items-center justify-center cursor-pointer text-center`} onClick={() => setModel(1)}>Aprender</div>
                <div className={`${model == 2 ? "": ""} z-20 w-full h-14 flex items-center justify-center cursor-pointer text-center`} onClick={() => setModel(2)}>Ensinar</div>
                <span className={`transition-all ease-in-out  absolute w-1/2 h-full bg-white  ${model == 1 ? "left-0 bg-gradient-to-tr from-teal-400 to-blue" : "left-28 bg-gradient-to-tr from-red-400 to-pink"} rounded-full z-10`}></span>
            </div>
            <div className="w-full">
                {model == 1 && (
                    <div className="flex flex-col gap-3 items-center w-full ">
                        <AccessStudent/>
                        <div  className="text-xs text-zinc-500">Não tem conta? <a href="" className="text-zinc-300">Criar conta</a></div>
                    </div>
                )}
                {model == 2 && (
                    <div className="flex flex-col gap-3 items-center w-full ">
                        <AccessTeacher/>
                        <div  className="text-xs text-zinc-500 cursor-pointer">Quer ser professor? <span onClick={() => setModel(3)} className="text-zinc-300">Inscreva-se!</span></div>
                    </div>
                    
                )}
                {model == 3 && (
                    <form action="" className="flex flex-col gap-3 items-center w-full ">
                        <div className="text-xs text-zinc-500">Informe seu e-mail que entraremos em contato!</div>
                        <input type="text" placeholder="E-mail" className="w-full bg-transparent border border-blue rounded-full outline-none p-3 placeholder:text-zinc-500"/>
                        <button type="submit" className="transition-all font-bold bg-gradient-to-tr from-teal-400 to-blue h-12 w-full rounded-full active:scale-95">Enviar</button>
                    </form>
                )}
            </div>
        </div>
    )
}