'use client'
import TeacherPerfil from "@/components/contents/teacher/perfil";
import Navbar from "@/components/inc/header/navbar";
import { MainProps } from "@/components/layouts/basic";
import Section from "@/components/layouts/sections/section-default";
import { getTeacherToken, useTeacher } from "@/data/contexts/token/teacherToken";
import { IconUserCircle } from "@tabler/icons-react";
import { useCallback, useEffect } from "react";




export default function Home() {
    const Auth = useCallback( async () => {
    try {
        const tokenInfo = await getTeacherToken();
        if (!tokenInfo) {
            window.location.href = "/access"
        } else {
            return true;
        } 
    }
    finally {

    }
    }, []); 
    useEffect( () => {
        Auth()
    },[Auth])

    return (
        <main className={MainProps}>
                Olá professor!
            <Section width="full">
                <Navbar itens={["home", "teacher"]}/>
                <TeacherPerfil/>
            </Section>
        </main>
    )
}