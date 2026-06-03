"use client";

import { motion } from "framer-motion";

const symbols = [
    { text: "{}", left: "12%", top: "18%" },
    { text: "</>", left: "82%", top: "25%" },
    { text: "React", left: "25%", top: "72%" },
    { text: "JavaScript", left: "70%", top: "78%" },
    { text: "API", left: "52%", top: "14%" },
    { text: "Git", left: "12%", top: "55%" },
    { text: "npm", left: "85%", top: "60%" },
    { text: "=>", left: "60%", top: "40%" },
    { text: "[]", left: "35%", top: "35%" },
];

const nodes = [
    { left: "18%", top: "25%" },
    { left: "28%", top: "35%" },
    { left: "22%", top: "48%" },

    { left: "72%", top: "22%" },
    { left: "82%", top: "30%" },
    { left: "76%", top: "42%" },

    { left: "58%", top: "68%" },
    { left: "70%", top: "80%" },

    { left: "40%", top: "25%" },
    { left: "50%", top: "35%" },
    { left: "60%", top: "28%" },
];

export default function BackgroundEffects() {
    return (
        <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
            {/* GRID */}
            <div className="absolute inset-0 bg-grid-light dark:bg-grid-dark" />

            {/* GLOW 1 */}
            <motion.div
                animate={{
                    x: [-40, 40, -40],
                    y: [-20, 20, -20],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                }}
                className="absolute left-[12%] top-[18%] h-[280px] w-[280px] rounded-full bg-[#ff5c00]/10 blur-[120px]"
            />

            {/* GLOW 2 */}
            <motion.div
                animate={{
                    x: [30, -30, 30],
                    y: [20, -20, 20],
                }}
                transition={{
                    duration: 24,
                    repeat: Infinity,
                    ease: "linear",
                }}
                className="absolute left-1/2 top-1/2 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ff5c00]/15 blur-[150px]"
            />

            {/* GLOW 3 */}
            <motion.div
                animate={{
                    x: [-30, 30, -30],
                    y: [20, -20, 20],
                }}
                transition={{
                    duration: 22,
                    repeat: Infinity,
                    ease: "linear",
                }}
                className="absolute bottom-[15%] right-[10%] h-[250px] w-[250px] rounded-full bg-[#ff5c00]/10 blur-[120px]"
            />

            {/* SYMBOLS */}
            {symbols.map((item, index) => (
                <motion.div
                    key={index}
                    animate={{ y: [-12, 12, -12] }}
                    transition={{
                        duration: 8 + index * 1.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute font-mono text-3xl font-black text-[#ff5c00]/25 dark:text-[#ff5c00]/20"
                    style={{
                        left: item.left,
                        top: item.top,
                    }}
                >
                    {item.text}
                </motion.div>
            ))}

            {/* NETWORK */}
            <svg className="absolute inset-0 h-full w-full">
                <line
                    x1="18%"
                    y1="25%"
                    x2="28%"
                    y2="35%"
                    stroke="#ff5c00"
                    strokeOpacity="0.15"
                />
                <line
                    x1="28%"
                    y1="35%"
                    x2="22%"
                    y2="48%"
                    stroke="#ff5c00"
                    strokeOpacity="0.15"
                />
                <line
                    x1="72%"
                    y1="22%"
                    x2="82%"
                    y2="30%"
                    stroke="#ff5c00"
                    strokeOpacity="0.15"
                />
                <line
                    x1="82%"
                    y1="30%"
                    x2="76%"
                    y2="42%"
                    stroke="#ff5c00"
                    strokeOpacity="0.15"
                />
                <line
                    x1="58%"
                    y1="68%"
                    x2="70%"
                    y2="80%"
                    stroke="#ff5c00"
                    strokeOpacity="0.15"
                />
                <line
                    x1="40%"
                    y1="25%"
                    x2="50%"
                    y2="35%"
                    stroke="#ff5c00"
                    strokeOpacity="0.15"
                />
                <line
                    x1="50%"
                    y1="35%"
                    x2="60%"
                    y2="28%"
                    stroke="#ff5c00"
                    strokeOpacity="0.15"
                />
            </svg>

            {/* NODES */}
            {nodes.map((node, index) => (
                <motion.div
                    key={index}
                    animate={{
                        scale: [1, 1.4, 1],
                        opacity: [0.3, 1, 0.3],
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        delay: index * 0.3,
                    }}
                    className="absolute h-2.5 w-2.5 rounded-full bg-[#ff5c00]"
                    style={{
                        left: node.left,
                        top: node.top,
                    }}
                />
            ))}
        </div>
    );
}
