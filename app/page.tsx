import Showroom from "@/components/contents/showroom";
import StudentCourses from "@/components/contents/studentcourses";
import Header from "@/components/inc/header/header";
import Navbar from "@/components/inc/header/navbar";
import { MainProps } from "@/components/layouts/basic";
import Section from "@/components/layouts/sections/section-default";


export default function Home() {
    return (
        <main className={MainProps}>
            <Header/>
            <Section width="full">
                <Navbar/>
                <Showroom/>
                <StudentCourses/>
            </Section>
        </main>
    );
}
