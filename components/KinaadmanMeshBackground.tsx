"use client";

import type React from "react";
import { cn } from "@/lib/utils/utils";

interface KinaadmanMeshBackgroundProps extends React.HTMLAttributes<HTMLDivElement> {
    showRadialGradient?: boolean;
    /** Animation duration in seconds (higher = more subtle). */
    animationSpeed?: number;
    /** Force white background even when the app is in dark mode */
    forceLight?: boolean;
}

export function KinaadmanMeshBackground({
    className,
    showRadialGradient = true,
    animationSpeed = 80,
    forceLight = false,
    ...props
}: KinaadmanMeshBackgroundProps) {
    return (
        <div
            className={cn(
                "pointer-events-none absolute inset-0 overflow-hidden",
                // Theme tokens
                "[--blue-1:#0F2A44] [--blue-2:#2563EB] [--gold:#C9A227] [--gold-2:#FBBF24]",
                // Base background
                forceLight ? "[--bg:#FFFFFF]" : "[--bg:#FFFFFF] dark:[--bg:#0B1120]",
                className
            )}
            style={{ ["--animation-speed" as any]: `${animationSpeed}s` }}
            {...props}
        >
            {/* Base */}
            <div className="absolute inset-0 bg-[var(--bg)]" />

            {/* Gold emphasis hotspots (adds “theme gold” presence without staining the base) */}
            <div className="absolute -top-[10%] right-[-10%] h-[70%] w-[70%] rounded-full blur-[90px] opacity-[0.55]
                      bg-[radial-gradient(circle,rgba(201,162,39,0.35)_0%,transparent_60%)]" />
            <div className="absolute bottom-[-15%] left-[-10%] h-[65%] w-[65%] rounded-full blur-[100px] opacity-[0.45]
                      bg-[radial-gradient(circle,rgba(251,191,36,0.28)_0%,transparent_62%)]" />

            {/* Aurora / Mesh layer */}
            <div
                className={cn(
                    "absolute inset-0",
                    // More gold-forward, more contrast, still safe on white base
                    "[--aurora:repeating-linear-gradient(115deg,rgba(15,42,68,0.16)_0%,rgba(37,99,235,0.12)_14%,rgba(201,162,39,0.26)_28%,rgba(251,191,36,0.22)_40%,rgba(201,162,39,0.24)_52%,rgba(37,99,235,0.10)_64%,rgba(15,42,68,0.14)_78%)]",
                    "[--dark-gradient:repeating-linear-gradient(115deg,#000_0%,#000_7%,transparent_10%,transparent_12%,#000_16%)]",
                    "[--light-gradient:repeating-linear-gradient(115deg,#fff_0%,#fff_8%,transparent_12%,transparent_16%,#fff_22%)]"
                )}
            >
                <div
                    className={cn(
                        "absolute -inset-[12px] blur-[16px] will-change-transform",
                        // Slightly stronger than before so it’s visible
                        "opacity-[0.38] dark:opacity-[0.40]",
                        "[background-image:var(--light-gradient),var(--aurora)] dark:[background-image:var(--dark-gradient),var(--aurora)]",
                        "[background-size:300%_240%] [background-position:50%_50%,50%_50%]",
                        // Keep base white; don't dye it
                        "mix-blend-normal",
                        // Animated overlay
                        "after:absolute after:inset-0 after:content-['']",
                        "after:[background-image:var(--light-gradient),var(--aurora)] after:dark:[background-image:var(--dark-gradient),var(--aurora)]",
                        "after:[background-size:240%_160%] after:[background-position:50%_50%,50%_50%]",
                        "after:opacity-70",
                        "after:[animation:aurora_var(--animation-speed)_linear_infinite] motion-reduce:after:animate-none",
                        showRadialGradient &&
                        "[mask-image:radial-gradient(ellipse_at_60%_0%,black_14%,transparent_72%)]"
                    )}
                />

                {/* White paper veil (reduced so colors show more) */}
                <div className="absolute inset-0 bg-white/72 dark:bg-white/10" />
            </div>

            {/* Grain overlay */}
            <svg className="absolute inset-0 h-full w-full opacity-[0.08] mix-blend-soft-light" aria-hidden="true">
                <filter id="kinaadman-grain">
                    <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" stitchTiles="stitch" seed="2">
                        <animate attributeName="baseFrequency" dur="12s" values="0.85;0.95;0.85" repeatCount="indefinite" />
                        <animate attributeName="seed" dur="8s" values="2;8;2" repeatCount="indefinite" />
                    </feTurbulence>
                    <feColorMatrix type="saturate" values="0" />
                </filter>
                <rect width="100%" height="100%" filter="url(#kinaadman-grain)" />
            </svg>

            {/* Tiny vignette */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_15%,transparent_45%,rgba(0,0,0,0.04)_100%)]" />
        </div>
    );
}