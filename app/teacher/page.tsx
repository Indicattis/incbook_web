'use client'
import TeacherPerfil from "@/components/contents/teacher/perfil";
import TeacherCourses from "@/components/contents/teacher/teacher-courses";
import Navbar from "@/components/inc/header/navbar";
import { MainProps } from "@/components/layouts/basic";
import Section from "@/components/layouts/sections/section-default";
import Tabller from "@/components/utils/tab-controller";
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

    const tab1Content = "teste1";
    const tab2Content = "teste2";
    const tab3Content = "teste3";
    const tab4Content = "teste4";
    const tab5Content = "teste5";
    const tab6Content = <TeacherCourses/>;
    
    const tabContents = [tab6Content, tab1Content, tab2Content, tab3Content, tab4Content, tab5Content];

    const tabLabels = ['Meus cursos', `Notificações`, 'Comentários', 'Status', 'Carteira', 'Conquistas'];

    return (
        <main className={MainProps}>
                Olá professor!
            <Section width="full">
                <Navbar itens={["home", "teacher"]}/>
                {/* <TeacherPerfil/> */}
                <Tabller tabContents={tabContents} tabLabels={tabLabels}></Tabller>
            </Section>
        </main>
    )
}