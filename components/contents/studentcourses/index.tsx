'use client'
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import StudentCourse from "./studentcourse";





export default function StudentCourses() {
    return (
        <div className="p-5">
            <div className="text-xs text-zinc-500">Comece agora!</div>
            <div className="font-poppins font-bold mt-1 tracking-widest text-2xl">Meus cursos</div>
            <div className="flex gap-3 mt-3">
                <StudentCourse/>
                <StudentCourse/>
            </div>
            <div className="w-full mt-3 text-end text-xs text-zinc-400  "><span className="cursor-pointer hover:text-white">Ver mais</span></div>
        </div>
    )
}