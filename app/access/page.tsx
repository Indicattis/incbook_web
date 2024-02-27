'use client'
import AccessForms from "@/components/contents/access/accessforms";
import Navbar from "@/components/inc/header/navbar";
import { CenteredMainProps, MainProps } from "@/components/layouts/basic";
import Section from "@/components/layouts/sections/section-default";
import { useCallback } from "react";

export default function Home() {


    return (
        <main className={CenteredMainProps}>   
            <Section width="auto">
                <div className="w-full flex gap-3">
                    <AccessForms></AccessForms>
                    <img className="max-md:hidden" src={`https://source.unsplash.com/featured/500x500?ocean`} alt="" />
                </div>
            </Section>      
        </main>
    )
}