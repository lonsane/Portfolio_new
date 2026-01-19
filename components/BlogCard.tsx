"use client";
import React from "react";
import { ArrowUpRight } from "lucide-react";

interface BlogCardProps {
    blog: {
        id: number;
        title: string;
        excerpt: string;
        date: string;
        readTime: string;
        link: string;
    };
}

export default function BlogCard({ blog }: BlogCardProps) {
    return (
        <div className="blog-card group flex flex-col p-8 rounded-[32px] bg-zinc-900/40 border border-white/10 hover:border-white/20 hover:bg-zinc-800/60 transition-all duration-300 cursor-pointer">
            <div className="flex justify-between items-start mb-6">
                <h3 className="text-3xl font-bold text-white group-hover:text-accent-orange transition-colors max-w-2xl leading-tight">
                    {blog.title}
                </h3>
                <div className="text-accent-orange opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                    <ArrowUpRight size={32} />
                </div>
            </div>

            <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-4xl">
                {blog.excerpt}
            </p>

            <div className="mt-auto flex items-center gap-3 text-sm font-medium text-zinc-500 uppercase tracking-wider">
                <span>{blog.date}</span>
                <span className="w-1 h-1 bg-zinc-600 rounded-full"></span>
                <span>{blog.readTime}</span>
            </div>
        </div>
    );
}
