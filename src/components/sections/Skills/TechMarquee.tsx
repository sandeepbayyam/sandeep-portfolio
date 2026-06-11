"use client";

import Image from "next/image";
import Marquee from "react-fast-marquee";

import * as Skills from "@/assets/skills";

const row1 = [
    { name: "JavaScript", icon: Skills.JavaScriptImg },
    { name: "TypeScript", icon: Skills.TypeScriptImg },
    { name: "Node.js", icon: Skills.NodeJsImg },
    { name: "Redux", icon: Skills.ReduxImg },
    { name: "Firebase", icon: Skills.FirebaseImg },
];

const row2 = [
    { name: "Git", icon: Skills.GitImg },
    { name: "GitHub", icon: Skills.GitHubImg },
    { name: "GitHub Actions", icon: Skills.GitHubActionsImg },
    { name: "Linux", icon: Skills.LinuxImg },
    { name: "Postman", icon: Skills.PostmanImg },
    { name: "Slack", icon: Skills.SlackImg },
];

function TechBadge({ name, icon }: { name: string; icon: any }) {
    return (
        <div className="border-border/50 bg-background/70 hover:border-primary/40 mx-2 flex items-center gap-2 rounded-full border px-3 py-2 backdrop-blur-xl transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,92,0,.15)] sm:mx-3 sm:gap-3 sm:px-4 sm:py-2 lg:px-5 lg:py-3">
            <Image src={icon} alt={name} width={22} height={22} className="h-4 w-4 object-contain sm:h-5 sm:w-5 lg:h-[22px] lg:w-[22px]" />

            <span className="text-xs font-medium whitespace-nowrap sm:text-sm">{name}</span>
        </div>
    );
}

export default function TechMarquee() {
    return (
        <div className="mt-12 overflow-hidden sm:mt-16 lg:mt-20">
            {/* Header */}
            <div className="mb-6 text-center sm:mb-8 lg:mb-10">
                <h3 className="text-foreground/60 text-[10px] font-semibold tracking-[0.2em] uppercase sm:text-xs sm:tracking-[0.3em] md:text-sm md:tracking-[0.4em]">
                    Additional Technologies
                </h3>
            </div>

            {/* Marquee Container */}
            <div className="relative w-full overflow-hidden">
                {/* Left Fade */}
                <div className="from-background pointer-events-none absolute top-0 left-0 z-10 h-full w-10 bg-gradient-to-r to-transparent sm:w-16" />

                {/* Right Fade */}
                <div className="from-background pointer-events-none absolute top-0 right-0 z-10 h-full w-10 bg-gradient-to-l to-transparent sm:w-16" />

                <div className="space-y-3 sm:space-y-4 lg:space-y-5">
                    <Marquee speed={20} gradient={false} pauseOnHover>
                        {row1.map((item) => (
                            <TechBadge key={item.name} name={item.name} icon={item.icon} />
                        ))}
                    </Marquee>

                    <Marquee speed={16} direction="right" gradient={false} pauseOnHover>
                        {row2.map((item) => (
                            <TechBadge key={item.name} name={item.name} icon={item.icon} />
                        ))}
                    </Marquee>
                </div>
            </div>
        </div>
    );
}
