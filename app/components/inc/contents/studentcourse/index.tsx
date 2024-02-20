import Image from "next/image";




export default function StudentCourse() {
    return (
        <div className="max-h-44 max-w-28 rounded-md overflow-hidden cursor-pointer hover:scale-105 transition-all">
            <Image src="/img/teste2.jfif" alt="" width={1000} height={1000}/>
        </div>
    )
}