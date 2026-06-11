"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

import * as Skills from "@/assets/skills";
import ProductionCore from "./ProductionCore";
import ConnectionLines from "./ConnectionLines";
import SkillNode from "./SkillNode";
import TechMarquee from "./TechMarquee";

export default function SkillsSection() {
    const [mounted, setMounted] = useState(false);

    const { resolvedTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    const kafkaLogo = resolvedTheme === "dark" ? Skills.KafkaDarkImg : Skills.KafkaLightImg;

    return (
        <section id="skills" className="relative overflow-hidden py-20 sm:py-24 md:py-28 lg:py-32">
            {/* Glow */}
            <div className="bg-primary/10 absolute top-20 left-20 rounded-full blur-[180px]" />

            <div className="bg-primary/10 absolute top-1/2 left-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[120px] sm:h-[450px] sm:w-[450px] md:h-[600px] md:w-[600px] lg:h-[700px] lg:w-[700px]" />

            <div className="absolute right-0 bottom-0 h-[400px] w-[400px] rounded-full bg-blue-500/5 blur-[180px]" />

            <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center">
                    <span className="text-primary text-lg font-semibold sm:text-xl md:text-2xl lg:text-3xl">Technical Expertise</span>

                    <h2 className="mt-3 text-3xl leading-tight font-bold sm:text-4xl md:text-5xl lg:text-5xl">
                        Architecture Behind My Systems
                    </h2>

                    <p className="text-muted-foreground mx-auto mt-5 max-w-2xl px-2 text-sm leading-relaxed sm:text-base md:text-lg">
                        A production-ready technology stack powering scalable APIs, distributed systems, cloud-native deployments,
                        event-driven workflows, and AI-powered applications.
                    </p>
                </div>

                {/* Content */}
                <div className="relative mx-auto aspect-square w-full max-w-[320px] sm:max-w-[500px] md:max-w-[650px] lg:max-w-[850px]">
                    <ConnectionLines />

                    <ProductionCore />

                    {/* 12 O'CLOCK */}
                    <SkillNode
                        imageSrc={Skills.ReactImg}
                        title="React"
                        className="top-[12%] left-1/2 -translate-x-1/2 sm:top-[14%] lg:top-[14%]"
                    />

                    {/* 10 O'CLOCK */}
                    <SkillNode imageSrc={Skills.PythonImg} title="Python" className="top-[22%] left-[18%] sm:left-[20%] lg:left-[23%]" />

                    {/* 2 O'CLOCK */}
                    <SkillNode
                        imageSrc={Skills.FastAPIImg}
                        title="FastAPI"
                        className="top-[22%] right-[18%] sm:right-[20%] lg:right-[23%]"
                    />

                    {/* 9 O'CLOCK */}
                    <SkillNode imageSrc={Skills.MongoDBImg} title="MongoDB" className="top-[42%] left-[14%] sm:left-[12%] lg:left-[15%]" />

                    {/* 3 O'CLOCK */}
                    <SkillNode imageSrc={kafkaLogo} title="Kafka" className="top-[42%] right-[14%] sm:right-[12%] lg:right-[15%]" />

                    {/* 7 O'CLOCK */}
                    <SkillNode
                        imageSrc={Skills.DockerImg}
                        title="Docker"
                        className="bottom-[16%] left-[25%] sm:left-[18%] lg:bottom-[22%] lg:left-[22%]"
                    />

                    {/* 5 O'CLOCK */}
                    <SkillNode
                        imageSrc={Skills.KubernetesImg}
                        title="Kubernetes"
                        className="right-[22%] bottom-[16%] sm:right-[18%] lg:right-[22%] lg:bottom-[22%]"
                    />

                    {/* 6 O'CLOCK */}
                    <SkillNode
                        imageSrc={Skills.RedisImg}
                        title="Redis"
                        className="bottom-[8%] left-1/2 -translate-x-1/2 sm:bottom-[9%] lg:bottom-[10%]"
                    />
                </div>
                <TechMarquee />
            </div>
        </section>
    );
}
