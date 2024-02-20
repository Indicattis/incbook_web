import LayoutProps from "../basic";




export default function Section({children}: LayoutProps) {
    return (
        <section className="flex flex-col  gap-10 rounded-2xl bg-slate-900 w-full p-5 shadow-2xl">
            {children}
        </section>
    )
}