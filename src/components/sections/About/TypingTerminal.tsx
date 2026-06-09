"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function TypingTerminal() {
    const lines = [
        "$ whoami",
        "Sandeep Bayyam",
        "",
        "$ stack",
        "React • Next.js • FastAPI • Kafka",
        "MongoDB • Docker • Kubernetes",
        "",
        "$ mindset",
        "Build once. Scale forever.",
        "",
        "$ status",
        "● Available For Opportunities",
    ];

    const fullText = lines.join("\n");

    const [displayedText, setDisplayedText] = useState("");

    useEffect(() => {
        let timeout: NodeJS.Timeout;

        const startTyping = () => {
            let index = 0;

            const interval = setInterval(() => {
                setDisplayedText(fullText.slice(0, index));
                index++;

                if (index > fullText.length) {
                    clearInterval(interval);

                    timeout = setTimeout(() => {
                        setDisplayedText("");
                        startTyping();
                    }, 3000);
                }
            }, 18);
        };

        startTyping();

        return () => clearTimeout(timeout);
    }, [fullText]);

    return (
        <div className="font-mono text-sm md:text-base">
            <pre className="whitespace-pre-wrap leading-8">
                {displayedText.split("\n").map((line, index) => {
                    const trimmed = line.trim();

                    // Status
                    if (
                        trimmed.includes(
                            "Available For Opportunities"
                        )
                    ) {
                        return (
                            <div
                                key={index}
                                className="font-medium text-emerald-500"
                            >
                                ● Available For Opportunities
                            </div>
                        );
                    }

                    // Commands
                    if (trimmed.startsWith("$")) {
                        return (
                            <div
                                key={index}
                                className="
                                    text-blue-500
                                    dark:text-white-500
                                    font-medium
                                "
                            >
                                {line}
                            </div>
                        );
                    }

                    // Empty Line
                    if (trimmed === "") {
                        return (
                            <div
                                key={index}
                                className="h-2"
                            />
                        );
                    }

                    // Responses
                    return (
                        <div
                            key={index}
                            className="
                                text-white-900
                                dark:text-white
                            "
                        >
                            {line}
                        </div>
                    );
                })}

                <motion.span
                    animate={{
                        opacity: [0, 1, 0],
                    }}
                    transition={{
                        duration: 1,
                        repeat: Infinity,
                    }}
                    className="
                        text-blue-500
                        dark:text-white
                    "
                >
                    █
                </motion.span>
            </pre>
        </div>
    );
}