"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

gsap.registerPlugin(useGSAP);

const ParticleBackground = () => {
    const particlesRef = useRef<(HTMLDivElement | null)[]>([]);

    useGSAP(() => {
        particlesRef.current.forEach((particle) => {
            if (!particle) return;

            gsap.set(particle, {
                width: Math.random() * 3 + 1,
                height: Math.random() * 3 + 1,
                opacity: Math.random() * 0.5 + 0.2,
                left: Math.random() * window.innerWidth,
                top: Math.random() * (window.innerHeight + 1),
            });

            gsap.to(particle, {
                y: window.innerHeight,
                duration: Math.random() * 10 + 10,
                opacity: 0,
                repeat: -1,
                ease: "none",
            });
        });
    }, []);

    return (
        <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
            {[...Array(100)].map((_, i) => (
                <div
                    key={i}
                    ref={(el) => {
                        particlesRef.current[i] = el;
                    }}
                    className="bg-foreground absolute rounded-full shadow-[0_0_8px_currentColor] blur-[0.5px]"
                />
            ))}
        </div>
    );
};

export default ParticleBackground;
