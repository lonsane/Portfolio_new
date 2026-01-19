"use client";
import React from 'react';
import LeftProfileCard from "@/components/LeftProfileCard";
import HeroSection from "@/components/HeroSection";
import FeatureCards from "@/components/FeatureCards";
import RecentProjects from "@/components/RecentProjects";
import ExperienceSection from "@/components/ExperienceSection";
import ToolsGrid from "@/components/ToolsGrid";
import BlogSection from "@/components/BlogSection";
import ContactSection from "@/components/ContactSection";

import Navbar from "@/components/Navbar";

export default function Home() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="relative min-h-screen w-full bg-background selection:bg-accent-orange selection:text-white pb-20">
      <Navbar />
      {/* Fixed Profile Card */}
      <LeftProfileCard />

      {/* Main Scrollable Content */}
      <div className="w-full">
        <HeroSection />
        <FeatureCards />
        <RecentProjects />
        <ExperienceSection />
        <ToolsGrid />
        <BlogSection />
        <ContactSection />

        <footer className="w-full py-8 text-center border-t border-white/5 mt-12">
          <p className="text-zinc-500 font-medium">
            Made by <span className="text-accent-orange font-bold">Creativity</span> | Powered by <span className="text-accent-orange font-bold">Onkar</span>
          </p>
        </footer>
      </div>
    </main>
  );
}
