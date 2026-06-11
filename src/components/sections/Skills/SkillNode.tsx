"use client";

import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";

interface SkillNodeProps {
    title: string;
    className?: string;
    imageSrc?: string | StaticImageData;
    invertInDark?: boolean;
}

export default function SkillNode({ imageSrc, title, invertInDark = false, className = "" }: SkillNodeProps) {
    return (
        <motion.div
            animate={{
                y: [-4, 4, -4],
                rotate: [-1, 1, -1],
            }}
            transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
            }}
            whileHover={{
                scale: 1.08,
                y: -8,
            }}
            className={`absolute ${className}`}
        >
            <div className="group flex flex-col items-center">
                <div className="border-border/50 bg-background/80 group-hover:border-primary/40 relative flex h-10 w-10 items-center justify-center rounded-xl border backdrop-blur-xl transition-all duration-300 group-hover:shadow-[0_0_35px_rgba(255,92,0,.30)] sm:h-12 sm:w-12 md:h-16 md:w-16 lg:h-20 lg:w-20">
                    {imageSrc && (
                        <Image
                            src={imageSrc}
                            alt={title}
                            width={40}
                            height={40}
                            className={`h-5 w-5 object-contain transition-all duration-300 group-hover:scale-110 sm:h-7 sm:w-7 md:h-10 md:w-10 ${invertInDark ? "dark:invert" : ""} `}
                        />
                    )}

                    <div className="bg-primary/10 absolute inset-0 rounded-xl opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100" />
                </div>

                <p className="mt-1.5 max-w-[60px] text-center text-[9px] font-semibold tracking-tight sm:mt-2 sm:max-w-[80px] sm:text-[11px] md:max-w-[110px] md:text-sm lg:max-w-none lg:text-base">
                    {title}
                </p>
            </div>
        </motion.div>
    );
}
