"use client";
import React, { useRef } from "react";
import Image from "next/image";
import SectionWrapper from "./SectionWrapper";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

export default function RecentProjects() {
    const containerRef = useRef(null);

    useGSAP(() => {
        gsap.from(".project-row", {
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 85%",
            },
            y: 50,
            opacity: 0,
            duration: 1,
            stagger: 0.15,
            ease: "power3.out",
        });
    }, { scope: containerRef });

    return (
        <SectionWrapper id="projects">
            <div ref={containerRef}>
                <h2 className="text-7xl font-heading font-extrabold text-white mb-2 uppercase">RECENT</h2>
                <h2 className="text-7xl font-heading font-extrabold text-zinc-500 mb-12 uppercase">PROJECTS</h2>

                <div className="flex flex-col gap-6">
                    {projects.map((project) => (
                        <a
                            key={project.id}
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-row group flex items-center justify-between p-6 rounded-3xl hover:bg-white/5 transition-colors duration-300 cursor-pointer border-b border-white/5 pb-10"
                        >
                            <div className="flex items-center gap-8">
                                <div className="w-32 h-20 relative bg-zinc-800 rounded-xl overflow-hidden shrink-0">
                                    <Image src={project.image} alt={project.title} fill className="object-cover" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white group-hover:text-accent-orange transition-colors">{project.title}</h3>
                                    <p className="text-muted text-sm">{project.subtitle}</p>
                                </div>
                            </div>

                            <div className="p-3 text-accent-orange opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                                <ArrowUpRight size={28} />
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </SectionWrapper>
    );
}
