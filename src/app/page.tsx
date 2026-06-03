import React from "react";

import Header from "@/components/layout/Header";

export default function HomePage() {
    return (
        <React.Fragment>
            <Header />

            <main className="pt-32">
                <section
                    id="home"
                    className="flex min-h-screen items-center justify-center"
                >
                    <h1 className="text-5xl font-bold">Home Test</h1>
                </section>

                <section
                    id="about"
                    className="flex min-h-screen items-center justify-center"
                >
                    <h1 className="text-5xl font-bold">About</h1>
                </section>

                <section
                    id="projects"
                    className="flex min-h-screen items-center justify-center"
                >
                    <h1 className="text-5xl font-bold">Projects</h1>
                </section>

                <section
                    id="skills"
                    className="flex min-h-screen items-center justify-center"
                >
                    <h1 className="text-5xl font-bold">Skills</h1>
                </section>

                <section
                    id="experience"
                    className="flex min-h-screen items-center justify-center"
                >
                    <h1 className="text-5xl font-bold">Experience</h1>
                </section>

                <section
                    id="contact"
                    className="flex min-h-screen items-center justify-center"
                >
                    <h1 className="text-5xl font-bold">Contact</h1>
                </section>
            </main>
        </React.Fragment>
    );
}