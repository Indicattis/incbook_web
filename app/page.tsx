import Showroom from "./components/inc/contents/showroom/showroom";
import Header from "./components/inc/header/header";
import Navbar from "./components/inc/header/navbar";
import Section from "./components/layouts/sections/section-default";

export default function Home() {
    return (
        <main className="flex p-10 flex-col gap-10 items-center max-w-[920px] m-auto">
            <Header/>
            <Section>
                <Navbar/>
                <Showroom/>
            </Section>
        </main>
    );
}
