"use client";
import Image from "next/image";
import { Linkedin, Mail, Instagram, Github, Flame } from "lucide-react";

const SocialIcon = ({ Icon, href }: { Icon: any; href: string }) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-accent-orange hover:scale-110 transition-transform duration-300"
    >
        <Icon size={24} strokeWidth={2} />
    </a>
);

export default function LeftProfileCard() {
    return (
        <div className="relative w-full max-w-[380px] mx-auto mt-24 mb-12 lg:mb-0 lg:mt-0 lg:fixed lg:left-12 xl:left-[8%] lg:top-1/2 lg:-translate-y-1/2 z-50 lg:h-[calc(100vh-80px)] lg:max-h-[700px] flex items-center px-4 lg:px-0">
            <div className="w-full h-auto min-h-[500px] lg:h-full lg:max-h-[640px] bg-card-white rounded-[28px] shadow-xl relative overflow-hidden flex flex-col items-center text-center p-8">

                {/* Decorative SVG */}
                <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
                    <svg width="100%" height="100%" viewBox="0 0 320 640" preserveAspectRatio="none">
                        {/* Top left curved dash */}
                        <path
                            d="M -20 80 Q 50 140 120 40"
                            fill="none"
                            stroke="#FF7A2F"
                            strokeWidth="2"
                            strokeDasharray="6 6"
                        />
                        {/* Bottom dashed curve */}
                        <path
                            d="M -20 540 Q 80 540 120 480"
                            fill="none"
                            stroke="#FF7A2F"
                            strokeWidth="2"
                            strokeDasharray="6 6"
                        />
                    </svg>
                    {/* Small Orange Nodes - Positioned manually to match visual roughly */}
                    <div className="absolute top-[40px] left-[120px] w-2 h-2 bg-accent-orange rounded-full hidden"></div>
                </div>

                {/* Content */}
                <div className="relative z-10 w-full flex flex-col items-center h-full">
                    <div className="mt-8 mb-6 relative w-48 h-48 rounded-2xl overflow-hidden shadow-sm">
                        <Image
                            src="/assets/card-img.png"
                            alt="Onkar Lonsane"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>

                    <h1 className="text-3xl font-heading font-extrabold text-black mb-2 tracking-tight">
                        Onkar Lonsane
                    </h1>

                    {/* Flame Icon */}
                    <div className="my-4">
                        <div className="bg-accent-orange rounded-full p-2.5 shadow-md shadow-orange-500/20 inline-flex">
                            <Flame className="text-white fill-white" size={20} />
                        </div>
                    </div>

                    <p className="text-gray-500 text-sm font-medium leading-relaxed max-w-[220px] mb-auto">
                        A Software Engineer who has developed countless innovative solutions.
                    </p>

                    {/* Social Icons */}
                    <div className="flex items-center justify-center gap-6 mt-8 mb-4 w-full">
                        <SocialIcon Icon={Linkedin} href="https://www.linkedin.com/in/onkar-lonsane/" />
                        <SocialIcon Icon={Mail} href="mailto:lonsaneonkar@gmail.com" />
                        <SocialIcon Icon={Instagram} href="https://www.instagram.com/onkarlon_1601/" />
                        <SocialIcon Icon={Github} href="https://github.com/lonsane" />
                    </div>
                </div>
            </div>
        </div>
    );
}
