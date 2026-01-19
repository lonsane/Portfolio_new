"use client";
import React, { useRef } from "react";
import SectionWrapper from "./SectionWrapper";
import { ArrowUpRight } from "lucide-react";
import { experience } from "@/data/experience";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

export default function ExperienceSection() {
    const containerRef = useRef(null);

    useGSAP(() => {
        gsap.from(".exp-item", {
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 80%",
            },
            y: 40,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
            ease: "power3.out",
        });
    }, { scope: containerRef });

    return (
        <SectionWrapper id="experience">
            <div ref={containerRef}>
                <h2 className="text-7xl font-heading font-extrabold text-white mb-2 uppercase leading-[0.9]">
                    2 YEARS OF
                </h2>
                <h2 className="text-7xl font-heading font-extrabold text-zinc-500 mb-16 uppercase leading-[0.9]">
                    EXPERIENCE
                </h2>

                <div className="flex flex-col gap-6">
                    {experience.map((item) => (
                        <a
                            key={item.id}
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="exp-item group relative bg-zinc-900/50 rounded-3xl p-10 hover:bg-zinc-800 transition-colors duration-300 cursor-pointer overflow-hidden border border-white/5 block"
                        >
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 relative z-10">
                                <div>
                                    <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-accent-orange transition-colors">
                                        {item.company}
                                    </h3>
                                    <p className="text-gray-400 text-sm mb-4 md:mb-0">{item.role}</p>
                                </div>

                                <div className="flex items-center gap-8">
                                    <span className="text-zinc-500 text-sm font-medium">{item.date}</span>
                                    <div className="text-accent-orange opacity-0 group-hover:opacity-100 transition-opacity">
                                        <ArrowUpRight size={24} />
                                    </div>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </SectionWrapper>
    );
}
