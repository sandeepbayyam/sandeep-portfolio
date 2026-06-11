"use client";

import { motion } from "framer-motion";

const items = [
    // Top
    { text: "()=>{}", left: "4%", top: "8%", size: "text-xl" },
    { text: "npm", left: "88%", top: "8%", size: "text-xl" },

    { text: "{}", left: "12%", top: "14%", size: "text-3xl" },
    { text: "</>", left: "84%", top: "14%", size: "text-3xl" },

    // Upper Middle
    { text: "React", left: "8%", top: "26%", size: "text-xl" },
    { text: "JavaScript", left: "87%", top: "26%", size: "text-xl" },
    { text: "Python", left: "6%", top: "42%", size: "text-xl" },
    { text: "FastAPI", left: "86%", top: "42%", size: "text-xl" },

    // Center Side
    { text: "MongoDB", left: "8%", top: "56%", size: "text-xl" },
    { text: "TypeScript", left: "85%", top: "56%", size: "text-xl" },

    // Lower Middle
    { text: "Microservices", left: "5%", top: "70%", size: "text-lg" },
    { text: "CI/CD", left: "88%", top: "70%", size: "text-lg" },
    { text: "Redis", left: "10%", top: "90%", size: "text-lg" },
    { text: "Kafka", left: "84%", top: "82%", size: "text-lg" },

    // Bottom
    { text: "[]", left: "18%", top: "92%", size: "text-2xl" },
    { text: "()", left: "78%", top: "92%", size: "text-2xl" },
];

export default function BackgroundEffects() {
    return (
        <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
            <div className="bg-grid-light dark:bg-grid-dark absolute inset-0" />

            {items.map((item, index) => (
                <motion.div
                    key={index}
                    initial={{
                        opacity: 0,
                        scale: 0.9,
                    }}
                    animate={{
                        opacity: [0, 0.4, 0.4, 0],
                        scale: [0.9, 1.04, 1.04, 0.9],
                        y: [0, -6, -6, 0],
                    }}
                    transition={{
                        duration: 15,
                        delay: index * 0.8,
                        repeat: Infinity,
                        repeatDelay: 4,
                        ease: "easeInOut",
                    }}
                    className={`${item.size} text-foreground/30 absolute font-mono font-medium`}
                    style={{
                        left: item.left,
                        top: item.top,
                    }}
                >
                    {item.text}
                </motion.div>
            ))}
        </div>
    );
}
