import Image from "next/image";
import { useState } from "react";




interface ItemProps {
    title?: string
    description?: string
}

export default function ShowroomItem({title, description}: ItemProps) {
    const [hover, setHover] = useState<boolean>(false)
    return (
        <div className="h-96 cursor-pointer"
        onMouseOver={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        >
            <div className={`flex flex-col items-start tracking-widest font-newake text-5xl absolute left-5 top-1/2 z-50 transition-all ease-in-out
            `}>
                <span className="max-md:text-3xl text-5xl">{title}</span>
                <span className="max-md:text-xs text-sm font-poppins text-left">{description}!</span>
            </div>
            <Image className={`transition-all ease-in-out ${hover ? "blur-[2px]" : "blur-none"}`} alt="" src={`/img/teste4.jfif`} width={1000} height={1000}></Image>
        </div>
    )
}