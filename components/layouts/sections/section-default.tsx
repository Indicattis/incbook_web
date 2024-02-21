'use client'

import { LayoutProps } from "../basic";
import { motion } from "framer-motion";
import React from 'react';


export default function Section({children, width}: LayoutProps) {
    return (
        <motion.section
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}     
        transition={{ duration: 0.5, ease: "easeInOut" }}     
        className={`w-${width} flex flex-col gap-10 rounded-2xl bg-slate-900 p-5 shadow-2xl max-sm:w-full`}>
            {children}
        </motion.section>
    )
}