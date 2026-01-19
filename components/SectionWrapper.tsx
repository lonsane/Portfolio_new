import React from "react";

interface SectionWrapperProps {
    children: React.ReactNode;
    id?: string;
    className?: string;
}

export default function SectionWrapper({ children, id, className = "" }: SectionWrapperProps) {
    return (
        <section
            id={id}
            className={`relative py-8 lg:py-16 w-full max-w-[1540px] mx-auto px-6 lg:bg-transparent lg:pr-8 lg:pl-[460px] xl:pl-[600px] ${className}`}
        >
            {children}
        </section>
    );
}
