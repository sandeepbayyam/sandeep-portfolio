"use client";

import Image from "next/image";
import Link from "next/link";
import { Download } from "lucide-react";
import { motion } from "framer-motion";

import logo from "@/assets/icon.png";
import { NAV_ITEMS as navItems } from "@/constants/navigation";

import ThemeToggle from "./ThemeToggle";
import MobileMenu from "./MobileMenu";

import useActiveSection from "@/hooks/useActiveSection";

export default function Header() {
    const activeSection = useActiveSection();

    return (
        <motion.header
            initial={{
                y: -80,
                opacity: 0,
            }}
            animate={{
                y: 0,
                opacity: 1,
            }}
            transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
            }}
            className="fixed inset-x-0 top-0 z-50"
        >
            {/* Frosted glass strip */}
            <div className="bg-background/80 absolute inset-x-0 top-0 h-32 [mask-image:linear-gradient(to_bottom,black_70%,transparent)] backdrop-blur-3xl" />
            {/* Content */}
            <div className="relative px-4 pt-4 md:px-6">
                <div className="mx-auto flex h-20 max-w-7xl items-center justify-between rounded-full border border-white/10 bg-white/10 px-4 shadow-[0_8px_40px_rgba(0,0,0,0.15)] backdrop-blur-3xl md:px-6 dark:bg-zinc-900/70">
                    {/* Logo */}
                    <Link href="/" className="flex items-center">
                        <motion.div
                            whileHover={{
                                scale: 1.04,
                            }}
                            transition={{
                                duration: 0.2,
                            }}
                        >
                            <Image
                                src={logo}
                                alt="Sandeep Bayyam Logo"
                                width={100}
                                height={100}
                                priority
                                className="rounded-full object-cover"
                            />
                        </motion.div>
                    </Link>

                    {/* Navigation */}
                    <motion.nav
                        layout
                        className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/5 p-2 backdrop-blur-xl md:flex"
                    >
                        {navItems.map((item) => {
                            const isActive = activeSection === item.href.replace("#", "");

                            return (
                                <Link key={item.href} href={item.href} className="text-md relative rounded-full px-6 py-3 font-bold">
                                    {isActive && (
                                        <motion.div
                                            layoutId="navbar-pill"
                                            initial={false}
                                            transition={{
                                                layout: {
                                                    duration: 0.45,
                                                    ease: [0.22, 1, 0.36, 1],
                                                },
                                            }}
                                            className="bg-primary absolute inset-0 rounded-full"
                                            style={{
                                                boxShadow: "0 0 30px rgba(255,92,0,0.35)",
                                            }}
                                        />
                                    )}

                                    <motion.span
                                        whileHover={{
                                            y: -1,
                                        }}
                                        transition={{
                                            duration: 0.2,
                                        }}
                                        className={`relative z-10 block transition-colors duration-200 ${
                                            isActive ? "text-white" : "text-foreground"
                                        }`}
                                    >
                                        {item.label}
                                    </motion.span>
                                </Link>
                            );
                        })}
                    </motion.nav>

                    {/* Actions */}
                    <div className="flex items-center gap-4">
                        <motion.a
                            href="/resume.pdf"
                            whileHover={{
                                y: -2,
                                scale: 1.03,
                            }}
                            whileTap={{
                                scale: 0.98,
                            }}
                            transition={{
                                duration: 0.2,
                            }}
                            className="bg-primary hidden items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold text-white shadow-[0_0_20px_rgba(255,92,0,0.25)] transition-all duration-300 hover:shadow-[0_0_35px_rgba(255,92,0,0.45)] sm:flex"
                        >
                            <Download size={18} />
                            Download CV
                        </motion.a>

                        <ThemeToggle />

                        <MobileMenu />
                    </div>
                </div>
            </div>
        </motion.header>
    );
}
