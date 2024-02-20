import Showroom from "./components/inc/contents/showroom/showroom";
import StudentCourses from "./components/inc/contents/studentcourses";
import Header from "./components/inc/header/header";
import Navbar from "./components/inc/header/navbar";
import { MainProps } from "./components/layouts/basic";
import Section from "./components/layouts/sections/section-default";

export default function Home() {
    return (
        <main className={MainProps}>
            <Header/>
            <Section>
                <Navbar/>
                <Showroom/>
                <StudentCourses/>
            </Section>
        </main>
    );
}
