"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import profileImage from "@/assets/image.jpg";
import TypingTerminal from "./TypingTerminal";
import AboutCard from "./AboutCard";

export default function AboutSection() {
    return (
        <section id="about" className="relative overflow-hidden py-32 lg:py-40">
            {/* Background Grid */}
            <div className="absolute inset-0 -z-20">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
            </div>

            {/* Background Glow Effects */}
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <div className="bg-primary/10 absolute top-20 left-[10%] h-[500px] w-[500px] rounded-full blur-[180px]" />

                <div className="absolute top-[30%] right-[5%] h-[400px] w-[400px] rounded-full bg-blue-500/5 blur-[180px]" />

                <div className="bg-primary/5 absolute bottom-0 left-1/2 h-[300px] w-[700px] -translate-x-1/2 rounded-full blur-[140px]" />
            </div>

            <div className="mx-auto max-w-6xl px-6">
                {/* Section Header */}
                <div className="mb-16 text-center">
                    <span className="text-primary text-3xl font-semibold">Get To Know Me</span>

                    <h2 className="mt-3 text-4xl font-bold md:text-5xl">Building Scalable Software Applications</h2>

                    <p className="text-muted-foreground mx-auto mt-5 max-w-2xl text-lg">
                        Full-Stack Engineer specializing in cloud-native architecture, distributed systems, scalable APIs, and
                        production-grade software delivery.
                    </p>
                </div>

                {/* Main Content */}
                <div className="mx-auto mt-16 grid max-w-5xl items-center gap-10 lg:grid-cols-[360px_1fr]">
                    {/* Profile Image */}
                    <div className="flex justify-center">
                        <div className="relative h-[340px] w-[340px] md:h-[380px] md:w-[380px]">
                            {/* Rotating Rings */}
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{
                                    duration: 30,
                                    repeat: Infinity,
                                    ease: "linear",
                                }}
                                className="border-primary/25 absolute inset-0 rounded-full border"
                            />

                            <motion.div
                                animate={{ rotate: -360 }}
                                transition={{
                                    duration: 20,
                                    repeat: Infinity,
                                    ease: "linear",
                                }}
                                className="border-primary/10 absolute inset-[-15px] rounded-full border"
                            />

                            {/* Glow */}
                            <div className="bg-primary/10 absolute inset-[-40px] rounded-full blur-3xl" />

                            {/* Profile Image */}
                            <motion.div
                                whileHover={{ scale: 1.03 }}
                                className="border-primary/20 absolute inset-8 overflow-hidden rounded-full border-4 shadow-[0_0_80px_rgba(255,92,0,.18)]"
                            >
                                <Image src={profileImage} alt="Sandeep Bayyam" fill className="object-cover" priority />
                            </motion.div>
                        </div>
                    </div>

                    {/* Terminal Card */}
                    <div className="from-primary/20 to-primary/10 relative rounded-3xl bg-gradient-to-br via-white/5 p-[1px]">
                        <div className="bg-background/90 relative h-[500px] w-full overflow-hidden rounded-[23px] backdrop-blur-xl">
                            {/* Gradient Overlay */}
                            <div className="from-primary/15 absolute inset-0 bg-gradient-to-br via-transparent to-transparent" />

                            {/* Ambient Glow */}
                            <div className="bg-primary/10 absolute -top-24 -right-24 h-64 w-64 rounded-full blur-3xl" />

                            {/* Animated Border Beam */}
                            <motion.div
                                animate={{
                                    x: ["-120%", "450%"],
                                }}
                                transition={{
                                    duration: 6,
                                    repeat: Infinity,
                                    ease: "linear",
                                }}
                                className="via-primary absolute top-0 z-20 h-px w-1/3 bg-gradient-to-r from-transparent to-transparent"
                            />

                            {/* Terminal Header */}
                            <div className="border-border/50 relative z-10 flex items-center justify-between border-b px-5 py-4">
                                <div className="flex items-center gap-2">
                                    <div className="h-3 w-3 rounded-full bg-red-500" />
                                    <div className="h-3 w-3 rounded-full bg-yellow-500" />
                                    <div className="h-3 w-3 rounded-full bg-green-500" />

                                    <span className="text-muted-foreground ml-2 text-xs font-medium">sandeep@portfolio ~ terminal</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <motion.div
                                        animate={{
                                            scale: [1, 1.3, 1],
                                            opacity: [0.6, 1, 0.6],
                                        }}
                                        transition={{
                                            duration: 2,
                                            repeat: Infinity,
                                        }}
                                        className="h-2 w-2 rounded-full bg-emerald-500"
                                    />

                                    <span className="text-xs font-medium text-emerald-500">ONLINE</span>
                                </div>
                            </div>

                            {/* Terminal Content */}
                            <div className="relative z-10 h-[430px] overflow-hidden px-8 py-6">
                                <TypingTerminal />
                            </div>
                        </div>
                    </div>
                </div>

                {/* About Cards */}
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
