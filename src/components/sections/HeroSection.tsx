"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";

import { PROFILE } from "@/data/profile";

import RoleSwitcher from "./RoleSwitcher";
import EngineeringJourney from "./EngineeringJourney";

export default function HeroSection() {
    return (
        <section id="home" className="flex min-h-screen items-center">
            <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2">
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

                    <div className="mt-8 flex gap-4">
                        <button className="rounded-full bg-primary px-6 py-3 font-semibold text-white">
                            Download CV
                        </button>

                        <button className="rounded-full border border-white/10 px-6 py-3 font-semibold">
                            Contact Me
                        </button>
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