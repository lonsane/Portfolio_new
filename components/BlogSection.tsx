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
        gsap.from(".blog-card", {
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 90%",
            },
            y: 40,
            opacity: 0,
            duration: 1,
            stagger: 0.15,
            ease: "power3.out",
        });
    }, { scope: containerRef });

    return (
        <SectionWrapper id="blog">
            <div ref={containerRef}>
                <h2 className="text-7xl font-heading font-extrabold text-white mb-2 uppercase">DESIGN</h2>
                <h2 className="text-7xl font-heading font-extrabold text-zinc-500 mb-12 uppercase">THOUGHTS</h2>

                <div className="flex flex-col gap-4">
                    {blogs.slice(0, 2).map((blog) => (
                        <BlogCard key={blog.id} blog={blog} />
                    ))}
                </div>
            </div>
        </SectionWrapper>
    );
}
