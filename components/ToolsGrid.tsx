"use client";
import React, { useRef } from "react";
import Image from "next/image";
import SectionWrapper from "./SectionWrapper";
import { tools } from "@/data/tools";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

export default function ToolsGrid() {
    const containerRef = useRef(null);

    useGSAP(() => {
        gsap.from(".tool-card", {
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 85%",
            },
            scale: 0.9,
            opacity: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: "back.out(1.7)",
        });
    }, { scope: containerRef });

    return (
        <SectionWrapper id="tools">
            <div ref={containerRef}>
                <h2 className="text-7xl font-heading font-extrabold text-white mb-2 uppercase">PREMIUM</h2>
                <h2 className="text-7xl font-heading font-extrabold text-zinc-500 mb-12 uppercase">TOOLS</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {tools.map((tool) => (
                        <div key={tool.id} className="tool-card flex items-center gap-5 bg-background p-6 rounded-3xl hover:bg-zinc-900 transition-colors duration-300 border border-white/5">
                            <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center shadow-sm shrink-0 p-3">
                                <Image 
                                    src={tool.image} 
                                    alt={tool.name} 
                                    width={50} 
                                    height={50} 
                                    className="object-contain w-full h-full"
                                />
                            </div>
                            <div>
                                <h4 className="text-xl font-bold text-white">{tool.name}</h4>
                                <p className="text-zinc-500 text-sm">{tool.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </SectionWrapper>
    );
}
