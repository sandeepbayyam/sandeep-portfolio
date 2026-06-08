"use client";

import { motion } from "framer-motion";
import { BsLinkedin as Linkedin } from "react-icons/bs";
import { Mail, ArrowUpRight } from "lucide-react";
import CountUp from "react-countup";

import { PROFILE } from "@/data/profile";

import RoleSwitcher from "./RoleSwitcher";
import EngineeringJourney from "./EngineeringJourney";

export default function HeroSection() {
    return (
        <section id="home" className="flex min-h-screen items-center pt-32 lg:pt-24">
            <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 ">
                {/* Left */}
                <div className="flex flex-col justify-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="relative mb-6 inline-flex w-fit items-center gap-2 overflow-hidden rounded-full border border-green-500/20 bg-green-500/10 px-4 py-2 text-md font-semibold text-foreground"
                    >
                        {/* Shine Effect */}
                        <motion.div
                            animate={{ x: ["-100%", "250%"] }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: "linear",
                            }}
                            className="absolute inset-y-0 w-12 bg-gradient-to-r from-transparent via-white/15 to-transparent"
                        />

                        {/* Pulsing Dot */}
                        <div className="relative flex items-center justify-center">
                            <motion.span
                                animate={{
                                    scale: [1, 2.5, 1],
                                    opacity: [0.8, 0, 0.8],
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                }}
                                className="absolute h-2 w-2 rounded-full bg-green-500"
                            />

                            <span className="h-2 w-2 rounded-full bg-green-500" />
                        </div>

                        <span className="relative z-10">
                            Open To Opportunities
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="mb-4 text-6xl font-black"
                    >
                        {PROFILE.name}
                    </motion.h1>

                    <motion.h6
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="mb-6 max-w-2xl text-2xl font-bold leading-tight"
                    >
                        {PROFILE.headline}
                    </motion.h6>

                    <RoleSwitcher roles={PROFILE.roles} />

                    <p className="mt-4 max-w-xl text-lg text-zinc-400">
                        {PROFILE.summary}
                    </p>

                    <div className="mt-8 flex flex-wrap gap-4">
                        <a
                            href="https://linkedin.com/in/sandeepbayyam"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,92,0,0.45)]"
                        >
                            <Linkedin size={20} />
                            <span>LinkedIn</span>

                            <ArrowUpRight
                                size={16}
                                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                            />
                        </a>

                        <a
                            href="mailto:sandeepbayyam@gmail.com"
                            className="group flex items-center gap-2 rounded-full border border-foreground px-6 py-3 font-semibold transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:bg-primary/10 hover:text-primary hover:shadow-[0_0_20px_rgba(255,92,0,0.15)]"
                        >
                            <Mail size={18} />
                            <span>Email Me</span>

                            <ArrowUpRight
                                size={16}
                                className="opacity-60 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100"
                            />
                        </a>
                    </div>

                    <div className="mt-12 grid grid-cols-2 gap-8 md:grid-cols-4">
                        {PROFILE.stats.map((stat) => (
                            <div
                                key={stat.label}
                                className="group"
                            >
                                <div className="text-3xl font-black text-primary transition-transform duration-300 group-hover:scale-110">
                                    <CountUp start={0} end={stat.value} duration={3.5} suffix={stat.suffix} useEasing />
                                </div>

                                <p className="mt-1 text-sm text-zinc-400 font-medium">
                                    {stat.label}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right */}
                <div className="flex items-center justify-center">
                    <EngineeringJourney />
                </div>
            </div>
        </section>
    );
}