"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SectionWrapper from "./SectionWrapper";
import StatsRow from "./StatsRow";

export default function HeroSection() {
    const containerRef = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline();
        tl.from(".hero-text-product", {
            y: 100,
            opacity: 0,
            duration: 1.4,
            ease: "power3.out"
        })
            .from(".hero-text-dev", {
                y: 100,
                opacity: 0,
                duration: 1.4,
                ease: "power3.out"
            }, "-=1.2")
            .from(".hero-desc", {
                y: 40,
                opacity: 0,
                duration: 1,
                ease: "power3.out"
            }, "-=1.0");
    }, { scope: containerRef });

    return (
        <SectionWrapper id="hero" className="min-h-screen flex flex-col justify-center pt-10 lg:pt-32">
            <div ref={containerRef}>
                <h1 className="flex flex-col font-heading font-extrabold text-[clamp(80px,11vw,160px)] leading-[0.82] tracking-tighter mb-12 select-none">
                    <span className="hero-text-product text-white uppercase">Product</span>
                    <span className="hero-text-dev text-zinc-500 uppercase">Developer</span>
                </h1>

                <p className="hero-desc text-muted text-lg md:text-xl max-w-lg leading-relaxed font-medium">
                    Passionate about creating intuitive and engaging user experiences. Specialise in transforming ideas into innovation-crafted products.
                </p>

                <StatsRow />
            </div>
        </SectionWrapper>
    )
}
