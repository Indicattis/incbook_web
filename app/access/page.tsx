'use client'
import AccessForms from "@/components/contents/access/accessforms";
import Navbar from "@/components/inc/header/navbar";
import { MainProps } from "@/components/layouts/basic";
import Section from "@/components/layouts/sections/section-default";
import { useCallback } from "react";

export default function Home() {


    return (
        <main className={MainProps}>
            <Section width="full">
                <Navbar/>
            </Section>      
            <Section width="auto">
                <AccessForms></AccessForms>
            </Section>      
        </main>
    )
}