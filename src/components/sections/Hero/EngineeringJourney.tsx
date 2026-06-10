"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaGithub, FaReact, FaDocker } from "react-icons/fa";
import { SiApachekafka, SiKubernetes, SiGithubactions } from "react-icons/si";
import { Code2, Database, Rocket, Server } from "lucide-react";

const nodes = [
    // Development
    { id: "code", label: "Code", icon: Code2, x: 110, y: 70 },
    { id: "git", label: "GitHub", icon: FaGithub, x: 310, y: 70 },
    { id: "cicd", label: "CI/CD", icon: SiGithubactions, x: 510, y: 70 },

    // Deployment
    { id: "docker", label: "Docker", icon: FaDocker, x: 310, y: 170 },
    { id: "k8s", label: "Kubernetes", icon: SiKubernetes, x: 310, y: 270 },

    // Application
    { id: "react", label: "React", icon: FaReact, x: 110, y: 380 },
    // { id: "fastapi", label: "FastAPI", icon: Server, x: 310, y: 380 },
    {
        id: "micro",
        label: "Microservices",
        subLabel: "Python • FastAPI",
        icon: Server,
        x: 310,
        y: 380,
    },
    { id: "kafka", label: "Kafka", icon: SiApachekafka, x: 510, y: 380 },

    // Database
    { id: "mongo", label: "MongoDB", icon: Database, x: 310, y: 490 },

    // Production

    { id: "prod", label: "Production", icon: Rocket, x: 310, y: 650 },
];

const workflow = ["code", "git", "cicd", "docker", "k8s", "react", "micro", "kafka", "mongo", "prod"];

type FlowLineProps = React.SVGProps<SVGLineElement> & {
    active?: boolean;
    completed?: boolean;
};

function FlowLine({ active, completed, ...props }: FlowLineProps) {
    return (
        <>
            {/* Future path */}
            <line {...props} stroke="rgba(113,113,122,.35)" strokeWidth="2" />

            {/* Completed path */}
            {completed && <line x1={props.x1} y1={props.y1} x2={props.x2} y2={props.y2} stroke="#FF5C00" strokeWidth="2" opacity={0.2} />}

            {/* Active path */}
            {active && (
                <motion.line
                    x1={props.x1}
                    y1={props.y1}
                    x2={props.x2}
                    y2={props.y2}
                    stroke="#FF5C00"
                    strokeWidth="3"
                    strokeLinecap="round"
                    style={{
                        filter: "drop-shadow(0 0 10px rgba(255,92,0,.75))",
                    }}
                    initial={{
                        pathLength: 0,
                    }}
                    animate={{
                        pathLength: 1,
                    }}
                    transition={{
                        duration: 1.0,
                        ease: "easeOut",
                    }}
                />
            )}
        </>
    );
}

export default function EngineeringJourney() {
    const [activeStep, setActiveStep] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveStep((prev) => (prev >= workflow.length - 1 ? 0 : prev + 1));
        }, 1300);

        return () => clearInterval(interval);
    }, []);

    const currentNode = workflow[activeStep];
    const currentIndex = workflow.indexOf(currentNode);
    const productionActive = currentNode === "prod";

    return (
        <motion.div
            animate={{ y: [-3, 3, -3] }}
            transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
            }}
            className="relative h-[720px] w-full max-w-[620px] overflow-hidden rounded-[36px] border border-white/10 bg-gradient-to-b from-zinc-900/70 to-black/80 shadow-[0_0_80px_rgba(255,92,0,0.08)] backdrop-blur-3xl"
        >
            <div className="bg-primary/5 absolute top-1/2 left-1/2 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl" />

            <svg className="absolute inset-0 h-full w-full" viewBox="0 0 620 620">
                {/* VS Code → GitHub */}
                <FlowLine active={activeStep === 1} completed={activeStep > 1} x1="160" y1="5" x2="290" y2="5" />

                {/* GitHub → Actions */}
                <FlowLine active={activeStep === 2} completed={activeStep > 2} x1="370" y1="5" x2="500" y2="5" />

                {/* Actions → Docker */}
                <FlowLine active={activeStep === 3} completed={activeStep > 3} x1="545" y1="45" x2="545" y2="110" />

                <FlowLine active={activeStep === 3} completed={activeStep > 3} x1="372" y1="110" x2="545" y2="110" />

                {/* Docker → Kubernetes */}
                <FlowLine active={activeStep === 4} completed={activeStep > 4} x1="330" y1="150" x2="330" y2="175" />

                {/* React Branch */}
                <FlowLine active={activeStep === 5} completed={activeStep > 5} x1="115" y1="215" x2="290" y2="215" />

                <FlowLine active={activeStep === 5} completed={activeStep > 5} x1="115" y1="215" x2="115" y2="290" />

                {/* Microservices */}
                <FlowLine active={activeStep === 6} completed={activeStep > 6} x1="330" y1="255" x2="330" y2="285" />

                {/* Kafka Branch */}
                <FlowLine active={activeStep === 7} completed={activeStep > 7} x1="370" y1="215" x2="540" y2="215" />

                <FlowLine active={activeStep === 7} completed={activeStep > 7} x1="540" y1="215" x2="540" y2="290" />

                {/* React Merge */}
                <FlowLine active={activeStep === 8} completed={activeStep > 8} x1="115" y1="370" x2="115" y2="500" />

                {/* Microservices → Mongo */}
                <FlowLine active={activeStep === 8} completed={activeStep > 8} x1="330" y1="380" x2="330" y2="410" />

                {/* Kafka Merge */}
                <FlowLine active={activeStep === 8} completed={activeStep > 8} x1="540" y1="370" x2="540" y2="500" />

                <FlowLine active={activeStep === 8} completed={activeStep > 8} x1="115" y1="500" x2="540" y2="500" />

                {/* Mongo → Production */}
                <FlowLine active={activeStep === 9} completed={activeStep > 9} x1="330" y1="500" x2="330" y2="575" />
            </svg>

            {nodes.map((node) => {
                const Icon = node.icon;

                const nodeIndex = workflow.indexOf(node.id);

                const completed = nodeIndex !== -1 && nodeIndex < currentIndex;

                const active = node.id === currentNode;

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
                            className={`flex flex-col items-center justify-center rounded-2xl border backdrop-blur-xl transition-all duration-700 ${node.id === "micro" ? "h-24 w-24" : "h-20 w-20"} ${
                                isProduction
                                    ? productionActive
                                        ? `border-green-500 bg-green-500/15 text-green-400 shadow-[0_0_30px_rgba(34,197,94,.45)]`
                                        : `border-zinc-700/60 bg-zinc-800/40 text-zinc-400`
                                    : active
                                      ? `border-primary/60 bg-primary/15 text-primary shadow-[0_0_35px_rgba(255,92,0,.45)]`
                                      : completed
                                        ? `border-primary/60 bg-primary/5 text-zinc-400 shadow-[0_0_20px_rgba(255,92,0,.1)]`
                                        : `border-zinc-700/60 bg-zinc-800/40 text-zinc-500`
                            } `}
                        >
                            <Icon size={24} />

                            <p className="mt-1 text-xs font-semibold">{node.label}</p>

                            {"subLabel" in node && node.subLabel && <p className="text-[9px] text-zinc-500">{node.subLabel}</p>}
                        </motion.div>

                        {isProduction && productionActive && (
                            <motion.div
                                initial={{ opacity: 0, x: -6 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="absolute top-1/2 left-[95px] flex -translate-y-1/2 items-center gap-1.5 text-xs font-medium whitespace-nowrap text-emerald-400"
                            >
                                <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
                                Live
                            </motion.div>
                        )}
                    </div>
                );
            })}
        </motion.div>
    );
}
