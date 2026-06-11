"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import { AzureImg } from "@/assets/skills";

export default function ProductionCore() {
    return (
        <motion.div
            animate={{
                scale: [1, 1.03, 1],
            }}
            transition={{
                duration: 6,
                repeat: Infinity,
            }}
            className="absolute top-1/2 left-1/2 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center sm:h-36 sm:w-36 md:h-56 md:w-56 lg:h-72 lg:w-72"
        >
            {/* Outer Orbit */}
            <motion.div
                animate={{ rotate: 360 }}
                transition={{
                    duration: 120,
                    repeat: Infinity,
                    ease: "linear",
                }}
                className="border-primary/10 absolute h-[150px] w-[150px] rounded-full border sm:h-[260px] sm:w-[260px] md:h-[420px] md:w-[420px] lg:h-[520px] lg:w-[520px]"
            />

            {/* Outer Orbit Dashed */}
            <motion.div
                animate={{ rotate: -360 }}
                transition={{
                    duration: 180,
                    repeat: Infinity,
                    ease: "linear",
                }}
                className="border-primary/5 absolute h-[210px] w-[210px] rounded-full border border-dashed sm:h-[320px] sm:w-[320px] md:h-[500px] md:w-[500px] lg:h-[580px] lg:w-[580px]"
            />

            {/* Inner Ring */}
            <motion.div
                animate={{ rotate: 360 }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "linear",
                }}
                className="border-primary/15 absolute inset-0 rounded-full border"
            />

            {/* Inner Dashed Ring */}
            <motion.div
                animate={{ rotate: -360 }}
                transition={{
                    duration: 35,
                    repeat: Infinity,
                    ease: "linear",
                }}
                className="border-primary/10 absolute inset-[8px] rounded-full border border-dashed sm:inset-[12px] md:inset-[16px]"
            />

            {/* Glow */}
            <div className="bg-primary/15 absolute inset-0 rounded-full blur-3xl" />

            {/* Core */}
            <div className="border-primary/20 bg-background/80 relative flex h-20 w-20 flex-col items-center justify-center rounded-full border shadow-[0_0_60px_rgba(255,92,0,.18)] backdrop-blur-3xl sm:h-28 sm:w-28 md:h-44 md:w-44 lg:h-52 lg:w-52">
                <Image
                    src={AzureImg}
                    alt="Azure"
                    width={50}
                    height={50}
                    className="h-6 w-6 object-contain transition-transform duration-500 sm:h-8 sm:w-8 md:h-12 md:w-12"
                />

                <h3 className="mt-1 text-xs font-bold sm:mt-2 sm:text-sm md:text-lg lg:text-xl">Azure</h3>

                <p className="text-foreground/60 text-[8px] sm:text-[9px] md:text-xs lg:text-sm">Cloud Platform</p>
            </div>
        </motion.div>
    );
}
