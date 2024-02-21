'use client'

import { useStudent } from "@/data/contexts/token/studentToken";
import { useTeacher } from "@/data/contexts/token/teacherToken";
import { IconLogin2, IconUserHexagon } from "@tabler/icons-react";

export default function Header() {
    const { studentLoged, studentName } = useStudent();
    return (
        <header className=" max-md:mt-8 w-full">
            <div className="flex items-center gap-5 w-full justify-between px-3">
                <div className="flex gap-3 items-center">
                    <div className="h-14 w-14 flex items-center justify-center rounded-full border">
                        <span className="font-wildword tracking-widest">INC</span>
                    </div>
                    <div className="h-14 w-14 flex items-center justify-center">
                        <span className="font-wildword tracking-widest">BOOK</span>
                    </div>
                </div>
                {studentLoged ? (
                    <>
                    <span className="flex gap-3 items-center cursor-pointer transition-all tracking-wider font-medium text-blue hover:text-white" onClick={() => window.location.href = "/student"}>{studentName}<IconUserHexagon width={40} height={40}/></span>
                    </>
                ) : (
                    <>
                    <span className="flex gap-3 items-center cursor-pointer transition-all text-zinc-500 hover:text-white" onClick={() => window.location.href = "/access"}>Entrar | Cadastrar<IconLogin2 width={30} height={30}/></span>
                    </>
                )}

            </div>
        </header>
    )
}