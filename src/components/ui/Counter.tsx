"use client";

import CountUp from "react-countup";

interface CounterProps { end: number; suffix?: string; }

export default function Counter({ end, suffix = "" }: CounterProps) {
    return <CountUp
        start={0}
        end={end}
        duration={3.5}
        suffix={suffix}
        useEasing
    />
}