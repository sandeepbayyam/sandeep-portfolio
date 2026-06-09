"use client";

import { motion } from "framer-motion";

interface AboutCardProps {
    title: string;
    items: string[];
    delay?: number;
}

export default function AboutCard({
    title,
    items,
    delay = 0,
}: AboutCardProps) {
    return (
        <motion.div
            animate={{
                y: [0, -12, 0],
                rotate: [-0.5, 0.5, -0.5],
            }}
            transition={{
                duration: 6 + delay,
                repeat: Infinity,
                ease: "easeInOut",
            }}
            className="
                group
                relative
                min-h-[280px]
                overflow-hidden
                rounded-3xl
                border border-primary/10
                bg-background/80
                p-7
                backdrop-blur-xl

                shadow-[0_0_35px_rgba(255,92,0,.12)]
            "
        >
            {/* Ambient Glow */}
            <div
                className="
                    absolute inset-0
                    bg-gradient-to-br
                    from-primary/[0.18]
                    via-transparent
                    to-transparent
                "
            />

            {/* Floating Light */}
            <motion.div
                animate={{
                    x: [-20, 20, -20],
                    y: [-10, 10, -10],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="
                    absolute
                    -right-16
                    -top-16
                    h-40
                    w-40
                    rounded-full
                    bg-primary/10
                    blur-3xl
                "
            />

            {/* Accent Bar */}
            <div
                className="
                    absolute
                    left-0
                    top-0
                    h-full
                    w-[3px]
                    bg-primary/40
                "
            />

            <div className="relative z-10">
                <h3 className="text-2xl font-bold tracking-tight">
                    {title}
                </h3>

                <div className="mt-6 space-y-5">
                    {items.map((item) => (
                        <div
                            key={item}
                            className="
                                flex items-center gap-3
                                text-sm
                                font-semibold
                                text-muted-foreground
                            "
                        >
                            <motion.div
                                animate={{
                                    scale: [1, 1.4, 1],
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                                className="
                                    h-2
                                    w-2
                                    rounded-full
                                    bg-primary
                                "
                            />

                            <span>{item}</span>
                        </div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}