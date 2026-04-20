import React from "react";

interface SectionDividerProps {
    fromColor?: string; // Tailwind bg class, e.g., 'bg-white dark:bg-midnight-bg'
    toColor?: string;   // Tailwind text class, e.g., 'text-slate-50 dark:text-midnight-surface'
    direction?: "up" | "down";
}

export default function SectionDivider({ 
    fromColor = "bg-white dark:bg-midnight-bg", 
    toColor = "text-slate-50 dark:text-midnight-surface",
    direction = "down" 
}: SectionDividerProps) {
    // ─── Constants ────────────────────────────────────────────────────────────
    
    // Wave paths for layered effect
    const paths = {
        down: [
            "M0 0 C480 80, 960 80, 1440 0 V100 H0 Z", // Base
            "M0 0 C480 60, 960 100, 1440 0 V100 H0 Z", // Layer 1
            "M0 0 C320 40, 1120 120, 1440 0 V100 H0 Z", // Layer 2
        ],
        up: [
            "M0 100 C480 20, 960 20, 1440 100 V100 H0 Z", // Base
            "M0 100 C480 40, 960 0, 1440 100 V100 H0 Z",   // Layer 1
            "M0 100 C320 60, 1120 -20, 1440 100 V100 H0 Z", // Layer 2
        ],
    };

    return (
        <div className={`${fromColor} relative h-16 w-full overflow-hidden -mt-px z-10 transition-colors duration-300`}>
            <svg
                viewBox="0 0 1440 100"
                preserveAspectRatio="none"
                className={`absolute inset-0 block h-full w-full ${toColor} transition-colors duration-300`}
                xmlns="http://www.w3.org/2000/svg"
            >
                {/* Layer 2 (Deepest) */}
                <path
                    d={paths[direction][2]}
                    fill="currentColor"
                    opacity="0.1"
                />
                {/* Layer 1 */}
                <path
                    d={paths[direction][1]}
                    fill="currentColor"
                    opacity="0.2"
                />
                {/* Base Layer */}
                <path
                    d={paths[direction][0]}
                    fill="currentColor"
                />
            </svg>
        </div>
    );
}
