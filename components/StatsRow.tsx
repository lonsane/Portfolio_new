"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const stats = [
    { value: "+2", label: "YEARS OF EXPERIENCE" },
    { value: "+4", label: "PROJECTS COMPLETED" },
    { value: "+10", label: "WORLDWIDE CLIENTS" },
];

export default function StatsRow() {
    const containerRef = useRef(null);

    useGSAP(() => {
        gsap.from(".stat-item", {
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 85%",
                toggleActions: "play none none reverse",
            },
            y: 60,
            opacity: 0,
            duration: 1.2,
            stagger: 0.2,
            ease: "power3.out",
        });
    }, { scope: containerRef });

    return (
        <div ref={containerRef} className="flex flex-wrap gap-12 mt-12">
            {stats.map((stat, index) => (
                <div key={index} className="stat-item flex flex-col">
                    <span className="text-6xl font-heading font-extrabold text-white mb-2">{stat.value}</span>
                    <span className="text-sm font-semibold text-zinc-500 w-24 leading-tight tracking-wide">{stat.label}</span>
                </div>
            ))}
        </div>
    );
}
