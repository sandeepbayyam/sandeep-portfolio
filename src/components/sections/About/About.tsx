"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import profileImage from "@/assets/image.jpg";

import TypingTerminal from "./TypingTerminal";
import AboutCard from "./AboutCard";


export default function AboutSection() {

    return (
        <section
            id="about"
            className="relative overflow-hidden py-28"
        >
            {/* BACKGROUND EFFECT */}
            <div className="absolute inset-0 -z-20">
                <div
                    className="
            absolute inset-0
            bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)]
            bg-[size:60px_60px]
        "
                />
            </div>

            <div className="absolute inset-0 -z-10 overflow-hidden">
                <div className="absolute left-[10%] top-20 h-[500px] w-[500px] rounded-full bg-primary/10 blur-[180px]" />

                <div className="absolute right-[5%] top-[30%] h-[400px] w-[400px] rounded-full bg-blue-500/5 blur-[180px]" />

                <div className="absolute left-1/2 bottom-0 h-[300px] w-[700px] -translate-x-1/2 rounded-full bg-primary/5 blur-[140px]" />
            </div>

            <div className="mx-auto max-w-6xl px-6">
                <div className="mb-16 text-center">
                    <span className="font-semibold text-3xl text-primary">
                        Get To Know Me
                    </span>

                    <h2 className="mt-3 text-4xl font-bold md:text-5xl">
                        Building Scalable Software Applications
                    </h2>

                    <p className="mx-auto mt-5 max-w-2xl text-muted-foreground text-lg">
                        Full-Stack Engineer specializing in cloud-native architecture,
                        distributed systems, scalable APIs, and production-grade
                        software delivery.
                    </p>
                </div>

                <div className="
                                mt-16
                                mx-auto
                                grid
                                max-w-5xl
                                items-center
                                gap-10
                                lg:grid-cols-[360px_1fr]
                            "
                >

                    {/* PROFILE IMAGE */}
                    <div className="flex justify-center lg:justify-center">
                        <div className="relative h-[340px] w-[340px]  lg:h-[380px] lg:w-[380px] md:h-[380px] md:w-[380px] ">


                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{
                                    duration: 30,
                                    repeat: Infinity,
                                    ease: "linear",
                                }}
                                className="
                    absolute inset-0
                    rounded-full
                    border border-primary/25
                "
                            />

                            <motion.div
                                animate={{ rotate: -360 }}
                                transition={{
                                    duration: 20,
                                    repeat: Infinity,
                                    ease: "linear",
                                }}
                                className="
                    absolute inset-[-15px]
                    rounded-full
                    border border-primary/10
                "
                            />

                            <div
                                className="
                    absolute inset-[-40px]
                    rounded-full
                    bg-primary/10
                    blur-3xl
                "
                            />

                            <motion.div
                                whileHover={{
                                    scale: 1.03,
                                }}
                                className="
                    absolute inset-8
                    overflow-hidden
                    rounded-full
                    border-4 border-primary/20
                    shadow-[0_0_80px_rgba(255,92,0,.18)]
                "
                            >
                                <Image
                                    src={profileImage}
                                    alt="Sandeep Bayyam"
                                    fill
                                    className="object-cover"
                                />
                            </motion.div>
                        </div>
                    </div>

                    {/* TERMINAL */}
                    <div
                        className="
        relative rounded-3xl p-[1px]
        bg-gradient-to-br
        from-primary/20
        via-white/5
        to-primary/10
    "
                    >
                        <div
                            className="
            relative
            h-[500px]
            w-full
            overflow-hidden
            rounded-[23px]
            bg-background/90
            backdrop-blur-xl
        "
                        >
                            {/* Background Glow */}
                            <div
                                className="
                absolute inset-0
                bg-gradient-to-br
                from-primary/15
                via-transparent
                to-transparent
            "
                            />

                            {/* Ambient Glow */}
                            <div
                                className="
                absolute
                -right-24
                -top-24
                h-64
                w-64
                rounded-full
                bg-primary/10
                blur-3xl
            "
                            />

                            {/* Border Beam */}
                            <motion.div
                                animate={{
                                    x: ["-120%", "450%"],
                                }}
                                transition={{
                                    duration: 6,
                                    repeat: Infinity,
                                    ease: "linear",
                                }}
                                className="
                absolute top-0 z-20
                h-px w-1/3
                bg-gradient-to-r
                from-transparent
                via-primary
                to-transparent
            "
                            />

                            {/* Header */}
                            <div
                                className="
                relative z-10
                flex items-center justify-between
                border-b border-border/50
                border-foreground/20
                px-5 py-4
            "
                            >
                                <div className="flex items-center gap-2">
                                    <div className="h-3 w-3 rounded-full bg-red-500" />
                                    <div className="h-3 w-3 rounded-full bg-yellow-500" />
                                    <div className="h-3 w-3 rounded-full bg-green-500" />

                                    <span className="ml-2 text-sm font-semibold text-muted-foreground">
                                        Terminal
                                    </span>
                                </div>
                            </div>

                            {/* Content */}
                            <div
                                className="
                relative z-10
                h-[430px]
                overflow-hidden
                px-8 py-6
            "
                            >
                                <TypingTerminal />
                            </div>
                        </div>
                    </div>
                </div>

                {/* ABOUT CARDS */}
                <div className="mt-14 grid gap-12 md:grid-cols-3">
                    <AboutCard
                        title="About Me"
                        delay={0}
                        items={[
                            "Full Stack Software Engineer",
                            "React & Next.js Frontend",
                            "Python & FastAPI Backend",
                            "Cloud-Native Enthusiast",
                            "Production-First Mindset",
                        ]}
                    />

                    <AboutCard
                        title="What I Deliver"
                        delay={1}
                        items={[
                            "Scalable Web Applications",
                            "REST APIs & Microservices",
                            "Event-Driven Architectures",
                            "Automation Platforms",
                            "Enterprise Solutions",
                        ]}
                    />
                    <AboutCard
                        title="How I Engineer"
                        delay={2}
                        items={[
                            "Design → Build → Automate",
                            "Deploy → Monitor → Improve",
                            "Performance & Reliability Focus",
                            "Clean & Maintainable Code",
                            "Continuous Learning",
                        ]}
                    />
                </div>
            </div>
        </section>
    );
}
