import type { Metadata } from "next";
import "./globals.css";

import ThemeProvider from "@/providers/ThemeProvider";
import BackgroundEffects from "@/components/ui/BackgroundEffects";

export const metadata: Metadata = {
    title: "Sandeep Bayyam | Software Engineer",
    description:
        "Software Engineer with experience in building scalable web applications, REST APIs, cloud-native solutions, and modern user interfaces using Python, FastAPI, React, JavaScript, Docker, Kubernetes, and Azure.",
    keywords: [
        "Sandeep Bayyam",
        "Software Engineer",
        "Python Developer",
        "FastAPI",
        "React",
        "JavaScript",
        "TypeScript",
        "Docker",
        "Kubernetes",
        "Azure",
        "REST API",
        "Full Stack Developer",
        "Backend Developer",
        "Frontend Developer",
    ],
    authors: [{ name: "Sandeep Bayyam" }],
    creator: "Sandeep Bayyam",
    openGraph: {
        title: "Sandeep Bayyam | Software Engineer",
        description:
            "Explore my portfolio featuring full-stack development projects, cloud-native applications, API development, and modern web solutions.",
        type: "website",
    },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body>
                <ThemeProvider>
                    <BackgroundEffects />
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
