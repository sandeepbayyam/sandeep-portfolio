"use client";

export default function ConnectionLines() {
    return (
        <svg className="absolute inset-0 hidden h-full w-full lg:block" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid meet">
            <defs>
                <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="rgba(255,92,0,0.30)" />
                    <stop offset="100%" stopColor="rgba(255,92,0,0.08)" />
                </linearGradient>
            </defs>

            {/* React */}
            <line x1="600" y1="170" x2="600" y2="400" stroke="url(#lineGradient)" strokeWidth="1.5" />

            {/* Python */}
            <line x1="380" y1="240" x2="600" y2="400" stroke="url(#lineGradient)" strokeWidth="1.5" />

            {/* FastAPI */}
            <line x1="820" y1="240" x2="600" y2="400" stroke="url(#lineGradient)" strokeWidth="1.5" />

            {/* MongoDB */}
            <line x1="260" y1="400" x2="600" y2="400" stroke="url(#lineGradient)" strokeWidth="1.5" />

            {/* Kafka */}
            <line x1="940" y1="400" x2="600" y2="400" stroke="url(#lineGradient)" strokeWidth="1.5" />

            {/* Docker */}
            <line x1="380" y1="560" x2="600" y2="400" stroke="url(#lineGradient)" strokeWidth="1.5" />

            {/* Kubernetes */}
            <line x1="820" y1="560" x2="600" y2="400" stroke="url(#lineGradient)" strokeWidth="1.5" />

            {/* Redis */}
            <line x1="600" y1="650" x2="600" y2="400" stroke="url(#lineGradient)" strokeWidth="1.5" />
        </svg>
    );
}
