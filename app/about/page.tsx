"use client";

import { useState } from "react";
import HeroAboutSection from "@/component/about/section1";
import Navbar from "@/component/layout/Navbar";
import NarrativeTreeSection from "@/component/about/section2";
import ExecutionStepsSection from "@/component/about/section3";
import StorySection from "@/component/about/section";
import Footer from "@/component/layout/Footer";

export default function AboutSubSection() {
  const [isDark, setIsDark] = useState(false);

  return (
    <div
      className={`min-h-screen transition-colors duration-500 ${
        isDark ? "bg-[#101010]" : "bg-stone-50"
      }`}
    >
    <Navbar isDark={isDark} setIsDark={setIsDark}/>
    <main>
    <HeroAboutSection
      isDark={isDark}
      onReadMoreToggle={() => {}}
    />
    <StorySection isDark={isDark}/>
    <NarrativeTreeSection isDark={isDark}/>
    <ExecutionStepsSection isDark={isDark}/>
    </main>
    <Footer isDark={isDark}/>
    </div>
  );
}
