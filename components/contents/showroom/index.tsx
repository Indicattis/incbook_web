'use client'
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";

import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import ShowroomItem from "./showroomitem";




export default function Showroom() {
    return (
        <div className="flex flex-col bg-slate">
            <div className="text-xs text-zinc-500">Explore!</div>
            <div className="font-poppins font-bold mt-1 tracking-widest text-2xl">Cursos disponíveis</div>
            <div className="font-poppins max-w-full max-h-80 flex items-center rounded-3xl overflow-hidden">
            <Carousel showThumbs={true} emulateTouch swipeable infiniteLoop showArrows={false}>
                <ShowroomItem title="Iniciante" description="Inicie sua jornada como tatuador"/>
                <ShowroomItem title="Proficionalizante" description="Melhore seu conhecimento e saia do básico"/>
                <ShowroomItem title="Avançado" description="Se torne o melhor profissional"/>
            </Carousel>
            </div>
            
        </div>
    )
}