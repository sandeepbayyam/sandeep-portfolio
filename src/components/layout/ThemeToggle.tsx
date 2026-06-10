"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
    const { theme, setTheme } = useTheme();

    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return (
            <button className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/10 backdrop-blur-xl dark:bg-zinc-900/70" />
        );
    }

    return (
        <button
            aria-label="Toggle Theme"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="text-white-700 hover:border-primary hover:text-primary flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border border-white/10 bg-white/10 backdrop-blur-xl transition-all duration-300 dark:bg-zinc-900/70 dark:text-zinc-200"
        >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
        </button>
    );
}
