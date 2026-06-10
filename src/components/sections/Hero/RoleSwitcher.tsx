"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

interface RoleSwitcherProps {
    roles: string[];
}

export default function RoleSwitcher({ roles }: RoleSwitcherProps) {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev === roles.length - 1 ? 0 : prev + 1));
        }, 2500);

        return () => clearInterval(timer);
    }, [roles]);

    return (
        <div className="h-14 overflow-hidden">
            <AnimatePresence mode="wait">
                <motion.div
                    key={roles[index]}
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -25 }}
                    transition={{ duration: 0.4 }}
                    className="bg-gradient-to-r from-[#ff5c00] via-orange-300 to-[#ff5c00] bg-clip-text text-4xl font-black text-transparent"
                >
                    {roles[index]}
                </motion.div>
            </AnimatePresence>
        </div>
    );
}
