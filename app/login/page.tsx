import AccessForms from "../components/access/accessforms";
import Navbar from "../components/inc/header/navbar";
import { MainProps } from "../components/layouts/basic";
import Section from "../components/layouts/sections/section-default";






export default function Home() {
    return (
        <main className={MainProps}>
            <Section>
                <Navbar/>
            </Section>      
            <Section>
                <AccessForms></AccessForms>
            </Section>      
        </main>
    )
}