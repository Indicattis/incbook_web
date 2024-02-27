'use client'
import {  IconBallpen, IconMathGreater } from "@tabler/icons-react";

interface Breadcrumb {
    itens?: string[];
}

export default function Navbar({ itens }: Breadcrumb) {

    const router = (page: string) => {
        if (page == "home") {
        window.location.href = `/`
        }
        else {
            window.location.href = `/${page}`
        }
    }

    return (
        <header className="flex gap-5 text-sm overflow-x-auto p-5">
            <div className="flex gap-5 items-center">
                <div className="border rounded-full p-2 cursor-pointer">
                    <IconBallpen></IconBallpen>
                </div>
            </div>
            {itens ? (
                itens.map((item, index) => (
                    <div key={item} className={`${index !== itens.length - 1 ? "": "border-b border-gold"}  cursor-pointer flex gap-5 items-center text-zinc-500`} onClick={() => router(item)}>
                        <span className={`${index !== itens.length - 1 ? "text-gray": "text-white"} font-black transition-all tracking-wider hover:text-white capitalize`}>{item}</span>
                        {index !== itens.length - 1 && <IconMathGreater width={10} height={10} />}
                    </div>
                ))
            ) : (
                <div className="cursor-pointer flex gap-3 items-center  border-b border-gold">
                    <span className="transition-all tracking-wider font-medium ">Home</span>
                </div>
            )}
        </header>
    );
}
