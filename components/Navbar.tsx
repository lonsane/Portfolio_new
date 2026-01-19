"use client";
import { Home, Briefcase, Wrench, PenTool, Mail } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

const navItems = [
    { icon: Home, href: "#hero", label: "Home" },
    { icon: Briefcase, href: "#projects", label: "Projects" },
    { icon: Wrench, href: "#tools", label: "Tools" },
    { icon: PenTool, href: "#blog", label: "Blog" },
    { icon: Mail, href: "#contact", label: "Contact" },
];

export default function Navbar() {
    const navRef = useRef(null);

    useGSAP(() => {
        gsap.from(navRef.current, {
            y: -100,
            opacity: 0,
            duration: 1,
            delay: 0.5,
            ease: "power3.out",
        });
    }, { scope: navRef });

    return (
        <div ref={navRef} className="fixed top-4 left-1/2 -translate-x-1/2 z-[100] bg-[#1A1A1A]/80 backdrop-blur-md px-4 md:px-6 py-3 rounded-full border border-white/10 shadow-xl shadow-black/20 w-[90%] max-w-fit">
            <div className="flex items-center justify-between md:justify-center gap-1 md:gap-2 w-full">
                {navItems.map((item, index) => (
                    <a
                        key={index}
                        href={item.href}
                        className="group relative p-3 flex items-center justify-center text-zinc-400 hover:text-white transition-colors"
                    >
                        <item.icon size={24} strokeWidth={2} className="hover:scale-110 transition-transform duration-300" />

                        {/* Tooltip */}
                        <div className="absolute top-full mt-2 px-3 py-1.5 bg-zinc-800/90 backdrop-blur-sm text-white text-sm font-medium rounded-xl opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 whitespace-nowrap pointer-events-none shadow-lg border border-white/5">
                            {item.label}
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
}
