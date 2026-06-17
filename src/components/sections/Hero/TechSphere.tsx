"use client";

import { useEffect, useRef, useState } from "react";
import {
    Atom,
    Blocks,
    Code2,
    Cpu,
    Database,
    FileCode,
    GitFork,
    Globe,
    HardDrive,
    Layers,
    Network,
    Server,
    Terminal,
    Workflow,
} from "lucide-react";

// Categorized skill data to match the high-contrast hierarchy in the image
const skillData = [
    // Primary Skills (Larger fonts and more prominent icons)
    { name: "Kubernetes", icon: Server, isPrimary: true },
    { name: "React", icon: Atom, isPrimary: true },
    { name: "Kafka", icon: Network, isPrimary: true },
    { name: "MongoDB", icon: Database, isPrimary: true },
    { name: "Docker", icon: Layers, isPrimary: true },
    { name: "FastAPI", icon: Cpu, isPrimary: true },
    { name: "Azure", icon: Globe, isPrimary: true },
    { name: "Python", icon: Terminal, isPrimary: true },
    { name: "TypeScript", icon: Code2, isPrimary: true },
    { name: "Redis", icon: HardDrive, isPrimary: true },
    { name: "GitHub", icon: GitFork, isPrimary: true },

    // Secondary Skills (Smaller typography to add depth)
    { name: "gRPC", icon: Code2 },
    { name: "GraphQL", icon: Code2 },
    { name: "Node.js", icon: Server },
    { name: "Microservices", icon: Layers },
    { name: "PostgreSQL", icon: Database },
    { name: "RabbitMQ", icon: Network },
    { name: "REST API", icon: Code2 },
    { name: "API Gateway", icon: Network },
    { name: "AWS", icon: Globe },
    { name: "DevOps", icon: Workflow },
    { name: "Elasticsearch", icon: Database },
    { name: "System Design", icon: Network },
    { name: "Nginx", icon: Server },
    { name: "Jenkins", icon: Workflow },
    { name: "Tailwind CSS", icon: Code2 },
    { name: "CSS3", icon: FileCode },
    { name: "HTML5", icon: FileCode },
    { name: "Sass", icon: FileCode },
];

export default function PremiumTechSphere() {
    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [isMounted, setIsMounted] = useState(false);
    const rotationSpeedMultiplier = useRef(1.0);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    useEffect(() => {
        const container = containerRef.current;
        const canvas = canvasRef.current;
        if (!container || !canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let radius = 230;
        let perspective = 800;

        const resizeCanvas = () => {
            const rect = container.getBoundingClientRect();
            const width = rect.width;

            if (width < 500) {
                radius = width * 0.38;
                perspective = 600;
            } else {
                radius = 230;
                perspective = 800;
            }

            canvas.width = rect.width * window.devicePixelRatio;
            canvas.height = rect.height * window.devicePixelRatio;
            canvas.style.width = `${rect.width}px`;
            canvas.style.height = `${rect.height}px`;
            ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
        };

        resizeCanvas();
        window.addEventListener("resize", resizeCanvas);

        const tags = Array.from(container.querySelectorAll(".sphere-tag")) as HTMLDivElement[];

        // 1. Natural 3D Surface Distribution for ALL elements across the entire globe shell
        const skillPoints = skillData.map((_, i) => {
            const phi = Math.acos(-1 + (2 * i) / (skillData.length - 1));
            const theta = Math.sqrt(skillData.length * Math.PI) * phi;
            return {
                x: radius * Math.cos(theta) * Math.sin(phi),
                y: radius * Math.cos(phi),
                z: radius * Math.sin(theta) * Math.sin(phi),
            };
        });

        // 2. High-Density Longitude & Latitude Dotted Lines
        const gridPoints: { x: number; y: number; z: number }[] = [];
        const latitudeCount = 20;
        const longitudeCount = 32;
        const dotsPerLine = 130;

        for (let i = 1; i < latitudeCount; i++) {
            const phi = (Math.PI * i) / latitudeCount;
            for (let j = 0; j < dotsPerLine; j++) {
                const theta = (2 * Math.PI * j) / dotsPerLine;
                gridPoints.push({
                    x: radius * Math.sin(phi) * Math.cos(theta),
                    y: radius * Math.cos(phi),
                    z: radius * Math.sin(phi) * Math.sin(theta),
                });
            }
        }

        for (let i = 0; i < longitudeCount; i++) {
            const theta = (2 * Math.PI * i) / longitudeCount;
            for (let j = 0; j < dotsPerLine; j++) {
                const phi = (Math.PI * j) / dotsPerLine;
                gridPoints.push({
                    x: radius * Math.sin(phi) * Math.cos(theta),
                    y: radius * Math.cos(phi),
                    z: radius * Math.sin(phi) * Math.sin(theta),
                });
            }
        }

        // 3. Continuous Thin Orbit Path Traces
        const orbitRings: { x: number; y: number; z: number }[][] = [];
        const ringTilts = [14, -26, 44];
        const pointsPerRing = 220;

        ringTilts.forEach((tilt) => {
            const ring: { x: number; y: number; z: number }[] = [];
            const rad = (tilt * Math.PI) / 180;
            const ringRadius = radius * 1.08;

            for (let i = 0; i < pointsPerRing; i++) {
                const theta = (2 * Math.PI * i) / pointsPerRing;
                let x = ringRadius * Math.cos(theta);
                let y = 0;
                let z = ringRadius * Math.sin(theta);

                const rx = x * Math.cos(rad) + y * Math.sin(rad);
                const ry = -x * Math.sin(rad) + y * Math.cos(rad);
                ring.push({ x: rx, y: ry, z });
            }
            orbitRings.push(ring);
        });

        let rotY = 0;
        let rotX = 0.05; // Set a permanent elegant presentation angle tilt

        // Increased rotation speeds as requested for a livelier presentation
        const baseSpeedY = 0.0018;
        let packetProgress = [0, 0.33, 0.66];

        let frameId: number;

        const renderLoop = () => {
            rotY += baseSpeedY * rotationSpeedMultiplier.current;

            const cosY = Math.cos(rotY);
            const sinY = Math.sin(rotY);
            const cosX = Math.cos(rotX);
            const sinX = Math.sin(rotX);

            const cx = canvas.width / (2 * window.devicePixelRatio);
            const cy = canvas.height / (2 * window.devicePixelRatio);

            ctx.clearRect(0, 0, canvas.width, canvas.height);

            const project = (p: { x: number; y: number; z: number }) => {
                let x1 = p.x * cosY - p.z * sinY;
                let z1 = p.x * sinY + p.z * cosY;
                let y2 = p.y * cosX - z1 * sinX;
                let z2 = p.y * sinX + z1 * cosX;

                const scale = perspective / (perspective - z2);
                return { x: cx + x1 * scale, y: cy + y2 * scale, z: z2, scale };
            };

            ctx.globalCompositeOperation = "screen";

            // A. DRAW DOTTED LATITUDE & LONGITUDE SCHEME (Clean and sharp)
            gridPoints.forEach((p) => {
                const proj = project(p);
                const depthFactor = (proj.z + radius) / (radius * 2);
                const alpha = Math.max(0.08, depthFactor) * 0.45;
                const dotSize = Math.max(0.4, 0.8 * proj.scale);

                ctx.beginPath();
                ctx.arc(proj.x, proj.y, dotSize, 0, 2 * Math.PI);
                ctx.fillStyle = `rgba(249, 115, 22, ${alpha})`;
                ctx.fill();
            });

            // B. DRAW VECTOR ORBIT LINES WITH HIGHLIGHT SPEED DATA PACKETS
            orbitRings.forEach((ring, ringIdx) => {
                ctx.beginPath();
                ring.forEach((p, idx) => {
                    const proj = project(p);
                    if (idx === 0) ctx.moveTo(proj.x, proj.y);
                    else ctx.lineTo(proj.x, proj.y);
                });
                ctx.closePath();
                ctx.strokeStyle = "rgba(249, 115, 22, 0.15)";
                ctx.lineWidth = 1.0;
                ctx.stroke();

                packetProgress[ringIdx] += 0.0022;
                if (packetProgress[ringIdx] > 1) packetProgress[ringIdx] = 0;

                const packetIdx = Math.floor(packetProgress[ringIdx] * (ring.length - 1));
                const packetPoint = ring[packetIdx];
                if (packetPoint) {
                    const projPacket = project(packetPoint);

                    ctx.beginPath();
                    ctx.arc(projPacket.x, projPacket.y, 5 * projPacket.scale, 0, 2 * Math.PI);
                    ctx.fillStyle = "rgba(249, 115, 22, 0.45)";
                    ctx.fill();

                    ctx.beginPath();
                    ctx.arc(projPacket.x, projPacket.y, 2 * projPacket.scale, 0, 2 * Math.PI);
                    ctx.fillStyle = "#ffffff";
                    ctx.fill();
                }
            });

            ctx.globalCompositeOperation = "source-over";

            // C. MAP HIGH-CONTRAST LABELS (Both Center and Edge placement)
            skillPoints.forEach((p, i) => {
                const proj = project(p);
                const tag = tags[i];
                if (!tag) return;

                const scale = proj.scale * 0.92;
                const opacity = Math.max(0.15, (proj.z + radius) / (radius * 1.8));
                const blur = Math.max(0, ((radius - proj.z) / radius) * 1.5);

                tag.style.filter = `blur(${blur}px)`;
                tag.style.opacity = opacity.toFixed(3);
                tag.style.zIndex = Math.round(scale * 1000).toString();
                tag.style.transform = `translate3d(${proj.x - cx}px, ${proj.y - cy}px, 0) scale(${scale})`;
            });

            frameId = requestAnimationFrame(renderLoop);
        };

        renderLoop();

        return () => {
            window.removeEventListener("resize", resizeCanvas);
            cancelAnimationFrame(frameId);
        };
    }, []);

    const handleMouseEnter = () => {
        rotationSpeedMultiplier.current = 0.3;
    };

    const handleMouseLeave = () => {
        rotationSpeedMultiplier.current = 1.0;
    };
    return (
        <div
            ref={containerRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={`cubic-bezier(0.16, 1, 0.3, 1) relative mx-auto flex aspect-square w-full max-w-[650px] items-center justify-center overflow-hidden rounded-full bg-[#050505] transition-all duration-[1500ms] select-none ${
                isMounted ? "blur-0 scale-100 opacity-100 filter" : "scale-95 opacity-0 blur-md filter"
            }`}
        >
            {/* Center Core Glow */}
            <div className="pointer-events-none absolute top-1/2 left-1/2 h-[70px] w-[70px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-500/20 blur-xl" />

            {/* Premium Flat Horizontal Bottom Glow Stripe */}
            <div className="pointer-events-none absolute bottom-[-12%] left-1/2 h-[35%] w-[85%] -translate-x-1/2 animate-pulse rounded-full bg-orange-600/[0.14] blur-[80px] duration-[7000ms]" />

            <div className="pointer-events-none absolute bottom-[-6%] left-1/2 h-[15%] w-[55%] -translate-x-1/2 rounded-full bg-orange-500/[0.09] blur-[45px]" />

            {/* Grid Canvas Engine Layer */}
            <canvas ref={canvasRef} className="pointer-events-none absolute inset-0 h-full w-full" />

            {/* Layered Text Overlay Components */}
            {skillData.map((skill, index) => {
                const IconComponent = skill.icon || Code2;
                const isPrimary = skill.isPrimary ?? true;

                return (
                    <div
                        key={`${skill.name}-${index}`}
                        className="sphere-tag group absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer whitespace-nowrap will-change-transform"
                    >
                        <div
                            className={`flex items-center bg-transparent text-white transition-transform duration-300 group-hover:scale-110 ${
                                isPrimary ? "gap-2.5 px-2 py-1" : "gap-1.5 opacity-80"
                            }`}
                        >
                            <IconComponent
                                className={`text-orange-500 drop-shadow-[0_0_5px_rgba(249,115,22,0.9)] filter transition-colors group-hover:text-orange-400 ${
                                    isPrimary ? "h-[22px] w-[22px] sm:h-6 sm:w-6" : "h-3.5 w-3.5 opacity-70 sm:h-4 sm:w-4"
                                }`}
                                strokeWidth={isPrimary ? 2.2 : 1.6}
                            />

                            <span
                                className={`font-sans tracking-wide text-white drop-shadow-[0_0_3px_rgba(0,0,0,0.95)] transition-colors group-hover:text-orange-200 ${
                                    isPrimary
                                        ? "text-xs font-bold tracking-normal sm:text-[15px]"
                                        : "text-[10px] font-normal text-zinc-300 sm:text-[11px]"
                                }`}
                            >
                                {skill.name}
                            </span>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
