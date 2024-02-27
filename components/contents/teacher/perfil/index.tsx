import { useTeacher } from "@/data/contexts/token/teacherToken";
import { IconBell, IconChartHistogram, IconMessage, IconPencil, IconTrophy, IconWallet } from "@tabler/icons-react";






export default function TeacherPerfil() {
    const { teacherLoged, teacherName } = useTeacher();
    return (
        <div className="flex flex-col gap-5 p-5">
            <div className="flex gap-3 font-newake tracking-widest text-2xl text-zinc-500">
                <span>{teacherName}</span>
                <span className="cursor-pointer"><IconPencil></IconPencil></span>
            </div>
            <div className="flex gap-3 border-t border-zinc-500  py-3">
                <div className="p-2 border-b flex gap-3 border-gold cursor-pointer">teste<IconBell></IconBell></div>
                <div className="p-2 border-b flex gap-3 border-gold cursor-pointer">teste<IconMessage></IconMessage></div>
                <div className="p-2 border-b flex gap-3 border-gold cursor-pointer">teste<IconChartHistogram></IconChartHistogram></div>
                <div className="p-2 border-b flex gap-3 border-gold cursor-pointer">teste<IconWallet></IconWallet></div>
                <div className="p-2 border-b flex gap-3 border-gold cursor-pointer">teste<IconTrophy></IconTrophy></div>
            </div>
            <div>

            </div>
        </div>
    )
}