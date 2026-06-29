"use client";

import { useState } from "react";
import Navbar from "@/component/layout/Navbar";
import Hero from "@/component/home/Hero";
import About from "@/component/home/AboutPreview";
import ProcessSection from "@/component/home/Focuses";
import Feature from "@/component/home/Feature";
import ValuesSection from "@/component/home/OurValues";
import ContactUs from "@/component/home/Collaborate";
import Footer from "@/component/layout/Footer";

export default function Home() {
  const [isDark, setIsDark] = useState(false);

  return (
    <div
      className={`min-h-screen transition-colors duration-500 ${
        isDark ? "bg-[#101010]" : "bg-stone-50"
      }`}
    >
      <Navbar isDark={isDark} setIsDark={setIsDark} />

      <main>
        <Hero isDark={isDark} />
        <About isDark={isDark}/>
        <ProcessSection isDark={isDark}/>
        <Feature isDark={isDark}/>
        <ValuesSection isDark={isDark}/>
        <ContactUs isDark={isDark}/>
      </main>
      <Footer isDark={isDark}/>
    </div>
  );
}