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
        className={`w-${width} flex flex-col gap-3 rounded-2xl bg-dark shadow-2xl max-sm:w-full overflow-hidden`}>
            {children}
        </motion.section>
    )
}