"use client";

import { motion } from "framer-motion";

interface AboutCardProps {
    title: string;
    items: string[];
    delay?: number;
}

export default function AboutCard({ title, items, delay = 0 }: AboutCardProps) {
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
            className="group border-primary/10 bg-background/80 relative min-h-[280px] overflow-hidden rounded-3xl border p-7 shadow-[0_0_35px_rgba(255,92,0,.12)] backdrop-blur-xl"
        >
            {/* Ambient Glow */}
            <div className="from-primary/[0.18] absolute inset-0 bg-gradient-to-br via-transparent to-transparent" />

            {/* Shine Sweep */}
            <div className="absolute inset-0 overflow-hidden rounded-3xl">
                <motion.div
                    animate={{
                        x: ["-150%", "250%"],
                    }}
                    transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "linear",
                        delay,
                    }}
                    className="via-foreground/10 absolute inset-y-0 w-24 rotate-12 bg-gradient-to-r from-transparent to-transparent blur-md"
                />
            </div>

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
                className="bg-primary/10 absolute -top-16 -right-16 h-40 w-40 rounded-full blur-3xl"
            />

            {/* Accent Bar */}
            <div className="bg-primary/40 absolute top-0 left-0 h-full w-[3px]" />

            <div className="relative z-10">
                <h3 className="text-2xl font-bold tracking-tight">{title}</h3>

                <div className="mt-6 space-y-5">
                    {items.map((item) => (
                        <div key={item} className="text-muted-foreground flex items-center gap-3 text-sm font-semibold">
                            <motion.div
                                animate={{
                                    scale: [1, 1.4, 1],
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                                className="bg-primary h-2 w-2 rounded-full"
                            />

                            <span>{item}</span>
                        </div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}
