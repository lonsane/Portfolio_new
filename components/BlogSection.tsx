"use client";
import React, { useRef } from "react";
import SectionWrapper from "./SectionWrapper";
import BlogCard from "./BlogCard";
import { blogs } from "@/data/blogs";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

export default function BlogSection() {
    const containerRef = useRef(null);

    useGSAP(() => {
        gsap.from(".blog-card-wrapper", {
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 80%",
            },
            x: 100, // Slide in from right
            opacity: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: "power3.out",
            clearProps: "all"
        });
    }, { scope: containerRef });

    return (
        <SectionWrapper id="blog">
            <div ref={containerRef}>
                <h2 className="text-7xl font-heading font-extrabold text-white mb-2 uppercase">DESIGN</h2>
                <h2 className="text-7xl font-heading font-extrabold text-zinc-500 mb-12 uppercase">THOUGHTS</h2>

                <div className="flex flex-col gap-4">
                    {blogs.map((blog) => (
                        <div key={blog.id} className="blog-card-wrapper">
                            <BlogCard blog={blog} />
                        </div>
                    ))}
                </div>
            </div>
        </SectionWrapper>
    );
}
