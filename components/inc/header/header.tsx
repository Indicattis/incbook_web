'use client'

import { useStudent } from "@/data/contexts/token/studentToken";
import { useTeacher } from "@/data/contexts/token/teacherToken";
import { IconUserHexagon } from "@tabler/icons-react";

export default function Header() {
    const { studentLoged, studentName } = useStudent();
    return (
        <header className=" text-sm max-md:mt-8">
            <div className="flex gap-5 items-center">
                <div className=" cursor-pointer">
                    <IconUserHexagon></IconUserHexagon>
                </div>
                {studentLoged ? (
                    <>
                    <span className="tracking-wider">Bem<span className="font-bold">Vindo!</span></span>
                    <span className="cursor-pointer transition-all tracking-wider font-medium text-zinc-500 hover:text-white" onClick={() => window.location.href = "/student"}>{studentName}</span>
                    </>
                ) : (
                    <>
                    <span className="tracking-wider">Inc<span className="font-bold">Book!</span></span>
                    <span className="cursor-pointer transition-all tracking-wider font-medium text-zinc-500 hover:text-white" onClick={() => window.location.href = "/access"}>Entre ou Crie sua conta!</span>
                    </>
                )}

            </div>
        </header>
    )
}