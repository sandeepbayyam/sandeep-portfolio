"use client";

import { motion } from "framer-motion";
import {
    Atom,
    Boxes,
    Code2,
    Container,
    Database,
    GitGraph,
    Rocket,
    Server,
    Share2,
    Workflow,
} from "lucide-react";

const nodes = [

    // Development
    { id: "code", label: "Code", icon: Code2, x: 110, y: 70 },
    { id: "git", label: "Git", icon: GitGraph, x: 310, y: 70 },
    { id: "cicd", label: "CI/CD", icon: Workflow, x: 510, y: 70 },

    // Deployment
    { id: "docker", label: "Docker", icon: Container, x: 310, y: 170 },
    { id: "k8s", label: "Kubernetes", icon: Boxes, x: 310, y: 270 },

    // Application
    { id: "react", label: "React", icon: Atom, x: 110, y: 380 },
    { id: "fastapi", label: "FastAPI", icon: Server, x: 310, y: 380 },
    { id: "kafka", label: "Kafka", icon: Share2, x: 510, y: 380 },

    // Database
    { id: "mongo", label: "MongoDB", icon: Database, x: 310, y: 480 },

    // Production
    { id: "prod", label: "Production", icon: Rocket, x: 310, y: 650 },
];

export default function EngineeringJourney() {
    return (
        <motion.div
            animate={{ y: [-3, 3, -3] }}
            transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
            }}
            className="
        relative
        h-[720px]
        w-full
        max-w-[620px]
        overflow-hidden
        rounded-[36px]
        border
        border-white/10
        bg-gradient-to-b
        from-zinc-900/70
        to-black/80
        backdrop-blur-3xl
        shadow-[0_0_80px_rgba(255,92,0,0.08)]
      "
        >
            {/* Center Glow */}
            <div className="absolute left-1/2 top-1/2 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-3xl" />

            {/* Flow Lines */}
            <svg
                className="absolute inset-0 h-full w-full"
                viewBox="0 0 620 620"
            >
                {/* Code → Git */}
                <line
                    x1="160"
                    y1="10"
                    x2="290"
                    y2="10"
                    stroke="rgba(113,113,122,.45)"
                    strokeWidth="2"
                />

                {/* Git → CI/CD */}
                <line
                    x1="370"
                    y1="10"
                    x2="500"
                    y2="10"
                    stroke="rgba(113,113,122,.45)"
                    strokeWidth="2"
                />

                {/* CI/CD → Docker */}
                {/* CI/CD to Docker  vertical line*/}
                <line
                    x1="550"
                    y1="50"
                    x2="550"
                    y2="130"
                    stroke="rgba(113,113,122,.45)"
                    strokeWidth="2"
                />
                {/* CI/CD to Docker horizontal line */}
                <line
                    x1="370"
                    y1="130"
                    x2="550"
                    y2="130"
                    stroke="rgba(113,113,122,.45)"
                    strokeWidth="2"
                />

                {/* Docker → Kubernetes */}
                <line
                    x1="330"
                    y1="150"
                    x2="330"
                    y2="170"
                    stroke="rgba(113,113,122,.45)"
                    strokeWidth="2"
                />

                {/* Kubernetes main branch */}
                {/* Left */}
                <line
                    x1="115"
                    y1="215"
                    x2="290"
                    y2="215"
                    stroke="rgba(113,113,122,.45)"
                    strokeWidth="2"
                />
                {/* Right */}
                <line
                    x1="370"
                    y1="215"
                    x2="540"
                    y2="215"
                    stroke="rgba(113,113,122,.45)"
                    strokeWidth="2"
                />

                {/* React */}
                <line
                    x1="115"
                    y1="215"
                    x2="115"
                    y2="290"
                    stroke="rgba(113,113,122,.45)"
                    strokeWidth="2"
                />

                {/* Microservices */}
                <line
                    x1="330"
                    y1="260"
                    x2="330"
                    y2="290"
                    stroke="rgba(113,113,122,.45)"
                    strokeWidth="2"
                />

                {/* Kafka */}
                <line
                    x1="540"
                    y1="215"
                    x2="540"
                    y2="290"
                    stroke="rgba(113,113,122,.45)"
                    strokeWidth="2"
                />

                {/* Merge down react*/}
                <line
                    x1="115"
                    y1="370"
                    x2="115"
                    y2="500"
                    stroke="rgba(113,113,122,.45)"
                    strokeWidth="2"
                />
                {/* FastAPI to MongoDB */}
                <line
                    x1="330"
                    y1="370"
                    x2="330"
                    y2="400"
                    stroke="rgba(113,113,122,.45)"
                    strokeWidth="2"
                />

                {/* Merge down kafka*/}
                <line
                    x1="540"
                    y1="370"
                    x2="540"
                    y2="500"
                    stroke="rgba(113,113,122,.45)"
                    strokeWidth="2"
                />

                {/* Merge down full line */}
                <line
                    x1="115"
                    y1="500"
                    x2="540"
                    y2="500"
                    stroke="rgba(113,113,122,.45)"
                    strokeWidth="2"
                />

                {/* Merge → Production */}
                <line
                    x1="330"
                    y1="500"
                    x2="330"
                    y2="575"
                    stroke="rgba(113,113,122,.45)"
                    strokeWidth="2"
                />
            </svg>

            {/* Nodes */}
            {nodes.map((node) => {
                const Icon = node.icon;
                const isProduction = node.id === "prod";

                return (
                    <div
                        key={node.id}
                        className="absolute -translate-x-1/2 -translate-y-1/2"
                        style={{
                            left: node.x,
                            top: node.y,
                        }}
                    >
                        <motion.div
                            whileHover={{ scale: 1.08 }}
                            className={
                                isProduction
                                    ? `
        flex
        h-21
        w-21
        flex-col
        items-center
        justify-center
        rounded-2xl
        border
        border-primary/50
        bg-primary/15
        text-primary
        shadow-[0_0_25px_rgba(255,92,0,.35)]
      `
                                    : `
        flex
        h-21
        w-21
        flex-col
        items-center
        justify-center
        rounded-2xl
        border
        border-zinc-700/60
        bg-zinc-800/40
        text-zinc-400
        backdrop-blur-xl
        transition-all
        duration-500

        hover:border-primary/40
        hover:bg-primary/10
        hover:text-primary
        hover:shadow-[0_0_25px_rgba(255,92,0,.25)]
      `
                            }
                        >
                            <Icon size={22} />

                            <p className="mt-1 text-sm font-semibold">
                                {node.label}
                            </p>

                            {/* {node.subLabel && (
                                <p className="mt-1 text-center text-[10px] text-zinc-500">
                                    {node.subLabel}
                                </p>
                            )} */}
                        </motion.div>
                    </div>
                );
            })}
        </motion.div>
    );
}