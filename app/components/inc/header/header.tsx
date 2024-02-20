import { IconUserHexagon } from "@tabler/icons-react";

export default function Header() {
    return (
        <header className=" text-sm max-md:mt-8">
            <div className="flex gap-5 items-center">
                <div className=" cursor-pointer">
                    <IconUserHexagon></IconUserHexagon>
                </div>
                <span className="tracking-wider">Bem<span className="font-bold">Vindo!</span></span>
                <span className="cursor-pointer transition-all tracking-wider font-medium text-zinc-500 hover:text-white">[USUARIO]</span>

            </div>
        </header>
    )
}