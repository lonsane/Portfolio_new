"use client";
import React, { useRef, useState } from "react";
import SectionWrapper from "./SectionWrapper";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { sendEmail } from "@/app/actions/sendEmail";
import { Loader2, CheckCircle, AlertCircle } from "lucide-react";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

export default function ContactSection() {
    const containerRef = useRef(null);
    const [isLoading, setIsLoading] = useState(false);
    const [status, setStatus] = useState<{ success?: boolean; message?: string } | null>(null);

    useGSAP(() => {
        gsap.from(".contact-anim", {
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 80%",
            },
            y: 40,
            opacity: 0,
            duration: 1,
            stagger: 0.1,
            ease: "power3.out",
        });
    }, { scope: containerRef });

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setIsLoading(true);
        setStatus(null);

        const formData = new FormData(event.currentTarget);
        const result = await sendEmail(formData);

        setIsLoading(false);
        setStatus(result);

        if (result.success) {
            (event.target as HTMLFormElement).reset();
        }
    }

    return (
        <SectionWrapper id="contact" className="pb-32">
            <div ref={containerRef}>
                <h2 className="contact-anim text-7xl font-heading font-extrabold text-white mb-2 uppercase leading-[0.9]">
                    LET’S WORK
                </h2>
                <h2 className="contact-anim text-7xl font-heading font-extrabold text-zinc-500 mb-12 uppercase leading-[0.9]">
                    TOGETHER
                </h2>

                <form onSubmit={handleSubmit} className="flex flex-col gap-6 max-w-xl">
                    <div className="contact-anim flex flex-col gap-2">
                        <label className="text-sm font-medium text-zinc-400 uppercase tracking-wider">Name</label>
                        <input
                            name="name"
                            type="text"
                            placeholder="Your Name"
                            required
                            className="bg-transparent border-b border-white/10 py-4 text-white focus:outline-none focus:border-accent-orange transition-colors"
                        />
                    </div>

                    <div className="contact-anim flex flex-col gap-2">
                        <label className="text-sm font-medium text-zinc-400 uppercase tracking-wider">Email</label>
                        <input
                            name="email"
                            type="email"
                            placeholder="your@email.com"
                            required
                            className="bg-transparent border-b border-white/10 py-4 text-white focus:outline-none focus:border-accent-orange transition-colors"
                        />
                    </div>



                    <div className="contact-anim flex flex-col gap-2">
                        <label className="text-sm font-medium text-zinc-400 uppercase tracking-wider">Message</label>
                        <textarea
                            name="message"
                            rows={4}
                            placeholder="Tell me about your project..."
                            required
                            className="bg-transparent border-b border-white/10 py-4 text-white focus:outline-none focus:border-accent-orange transition-colors resize-none"
                        />
                    </div>

                    <div className="contact-anim mt-4">
                        {status && (
                            <div className={`mb-4 p-4 rounded-xl flex items-center gap-3 ${status.success ? "bg-green-500/10 text-green-400" : "bg-red-500/10 text-red-400"}`}>
                                {status.success ? <CheckCircle size={20} /> : <AlertCircle size={20} />}
                                <p className="text-sm font-medium">{status.message}</p>
                            </div>
                        )}

                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full bg-accent-orange text-white font-bold py-4 rounded-[14px] hover:bg-[#E6601A] transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                        >
                            {isLoading ? (
                                <>
                                    <Loader2 className="animate-spin" size={20} />
                                    SENDING...
                                </>
                            ) : (
                                "SEND MESSAGE"
                            )}
                        </button>
                    </div>
                </form>
            </div>
        </SectionWrapper>
    );
}
