"use client";
import React, { useRef } from "react";
import SectionWrapper from "./SectionWrapper";
import { Layers, Layout, ArrowRight } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

export default function FeatureCards() {
    const containerRef = useRef(null);

    useGSAP(() => {
        gsap.from(".feature-card", {
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 80%",
            },
            y: 100,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
            ease: "power3.out",
        });
    }, { scope: containerRef });

    return (
        <SectionWrapper id="features">
            <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-0">
                {/* Card 1 - Orange -> Projects */}
                <a href="#projects" className="feature-card relative bg-accent-orange rounded-[32px] p-10 h-[380px] flex flex-col justify-between hover:scale-[1.02] transition-transform duration-300 cursor-pointer block overflow-hidden">
                    {/* Decorative Background: Waves */}
                    <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
                        <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                            <path d="M0 50 Q 50 0 100 50 T 200 50" stroke="white" strokeWidth="2" fill="none" />
                            <path d="M0 70 Q 50 20 100 70 T 200 70" stroke="white" strokeWidth="2" fill="none" />
                            <path d="M0 30 Q 50 -20 100 30 T 200 30" stroke="white" strokeWidth="2" fill="none" />
                        </svg>
                    </div>

                    <div className="relative z-10">
                        {/* Icon - No background box, just icon */}
                        <Layers className="text-white mb-4" size={48} strokeWidth={1.5} />
                    </div>

                    <div className="relative z-10 flex items-end justify-between">
                        <h3 className="text-4xl font-bold text-white leading-[1.1] max-w-[70%]">
                            Agentic AI, LLM Project, User Persona
                        </h3>
                        {/* Static Arrow in Box */}
                        <div className="border border-white/30 rounded-xl p-3 text-white">
                            <ArrowRight size={24} />
                        </div>
                    </div>
                </a>

                {/* Card 2 - Lime -> Tools */}
                <a href="#tools" className="feature-card relative bg-accent-lime rounded-[32px] p-10 h-[380px] flex flex-col justify-between hover:scale-[1.02] transition-transform duration-300 cursor-pointer block overflow-hidden">
                    {/* Decorative Background: ZigZag */}
                    <div className="absolute top-0 right-0 w-full h-full opacity-20 pointer-events-none">
                        <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                            <path d="M0 0 L 25 100 L 50 0 L 75 100 L 100 0" stroke="#4D7C0F" strokeWidth="1" fill="none" />
                        </svg>
                    </div>

                    <div className="relative z-10">
                        {/* Icon - No background box, just icon */}
                        <Layout className="text-black mb-4" size={48} strokeWidth={1.5} />
                    </div>

                    <div className="relative z-10 flex items-end justify-between">
                        <h3 className="text-3xl font-bold text-black uppercase leading-[1.1] max-w-[75%]">
                            POSTMAN, FIGMA, GSAP,<br /> REACTJS & ANGULAR
                        </h3>
                        {/* Static Arrow in Box */}
                        <div className="border border-black/20 rounded-xl p-3 text-black">
                            <ArrowRight size={24} />
                        </div>
                    </div>
                </a>
            </div>
        </SectionWrapper>
    );
}
