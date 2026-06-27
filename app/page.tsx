"use client";

import { useState } from "react";
import Navbar from "@/component/layout/Navbar";
import Hero from "@/component/home/Hero";

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
      </main>
    </div>
  );
}