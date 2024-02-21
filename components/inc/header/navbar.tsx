import { IconBallpen, IconUserHexagon } from "@tabler/icons-react";
import Image from "next/image";






export default function Navbar() {
    return (
        <header className="flex gap-5 text-sm">
            <div className="flex gap-5 items-center">
                <div className="border rounded-full p-2 cursor-pointer">
                    <IconBallpen></IconBallpen>
                </div>
            </div>
            <div className="cursor-pointer flex items-center">
                <span className="transition-all tracking-wider font-medium text-zinc-500 hover:text-white">Home</span>
            </div>
        </header>
    )
}