import React from "react";

import Header from "@/components/layout/Header";
import HeroSection from "@/components/sections/Hero/HeroSection";
import About from "@/components/sections/About/About";
import SkillsSection from "@/components/sections/Skills/SkillsSection";

export default function HomePage() {
    return (
        <React.Fragment>
            <Header />

            <main className="scroll-smooth">
                <section id="home" className="flex min-h-screen items-center justify-center">
                    <HeroSection />
                </section>

                <section id="about" className="flex min-h-screen items-center justify-center">
                    <About />
                </section>
                <section id="skills" className="flex min-h-screen items-center justify-center">
                    <SkillsSection />
                </section>

                <section id="experience" className="flex min-h-screen items-center justify-center">
                    <h1 className="text-5xl font-bold">Experience</h1>
                </section>

                <section id="projects" className="flex min-h-screen items-center justify-center">
                    <h1 className="text-5xl font-bold">Projects</h1>
                </section>

                <section id="contact" className="flex min-h-screen items-center justify-center">
                    <h1 className="text-5xl font-bold">Contact</h1>
                </section>
            </main>
        </React.Fragment>
    );
}
