'use client'

import { useStudent } from "@/data/contexts/token/studentToken";
import { IconLogin2, IconUserHexagon } from "@tabler/icons-react";

export default function Header() {
    const { studentLoged, studentName, studentId } = useStudent();    
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
        <header className=" max-md:mt-8 w-full">
            <div className="flex items-center gap-5 w-full justify-between px-3">
                <div className="flex gap-2 items-center">
                    <div className="flex items-center justify-center text-lg">
                        <span className="font-bold tracking-widest">INC</span>
                        <span className=" tracking-widest">BOOK</span>
                    </div>
                </div>
                {studentLoged ? (
                    <>
                    <span className="flex gap-3 items-center cursor-pointer transition-all tracking-wider font-medium text-zinc-300 hover:text-white" onClick={() => window.location.href = "/student"}>{studentName}<IconUserHexagon width={40} height={40}/></span>
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