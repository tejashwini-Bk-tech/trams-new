"use client";

import { useState } from "react";
import HeroAboutSection from "@/component/about/section1";
import Navbar from "@/component/layout/Navbar";
import NarrativeTreeSection from "@/component/about/section2";
import ExecutionStepsSection from "@/component/about/section3";
import StorySection from "@/component/about/section";
import Footer from "@/component/layout/Footer";

interface AboutSubSectionProps {
  isDark: boolean;
}

export default function AboutSubSection({ isDark }: AboutSubSectionProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
    <Navbar isDark={isDark} setIsDark={setIsExpanded}/>
    <main>
    <HeroAboutSection
      isDark={isDark}
      onReadMoreToggle={setIsExpanded}
    />
    <StorySection isDark={isDark}/>
    <NarrativeTreeSection isDark={isDark}/>
    <ExecutionStepsSection isDark={isDark}/>
    </main>
    <Footer isDark={isDark}/>
    </>
  );
}