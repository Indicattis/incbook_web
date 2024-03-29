export interface LayoutProps {
    children: React.ReactNode;
    width: "full" | "auto";
}

const MainProps = "flex p-10 max-md:p-5 max-sm:p-2 flex-col gap-10 items-center max-w-[920px] m-auto"
const CenteredMainProps = "flex h-screen p-10 max-md:p-5 max-sm:p-2 flex-col gap-10 items-center max-w-[920px] justify-center m-auto"

export {MainProps, CenteredMainProps}
