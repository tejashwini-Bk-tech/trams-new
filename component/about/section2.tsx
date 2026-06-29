"use client";

import { motion, Variants } from "framer-motion";
import NextImage from "next/image";
import IllustrationImg from "@/public/illustration-1.svg";

interface ObjectivesTreeSectionProps {
  isDark: boolean;
}

export default function ObjectivesTreeSection({ isDark }: ObjectivesTreeSectionProps) {
  
  const objectives = [
    { num: "01", label: "Unite", side: "left", desc: "Bringing global changemakers together for measurable local impact." },
    { num: "02", label: "Support", side: "right", desc: "Equipping structural organizations with frameworks to grow stronger." },
    { num: "03", label: "Connect", side: "left", desc: "Building cross-sector institutional partnerships that matter." },
    { num: "04", label: "Accelerate", side: "right", desc: "Moving with precision and speed towards the global SDGs." },
    { num: "05", label: "Sustain", side: "left", desc: "Creating deep, lasting ecological change for people and planet." }
  ];

  // Ultra-smooth custom easing curves for a high-end editorial feel
  const branchLeft: Variants = {
    hidden: { opacity: 0, x: -40, filter: "blur(4px)" },
    visible: { 
      opacity: 1, 
      x: 0, 
      filter: "blur(0px)",
      transition: { duration: 0.9, ease: [0.25, 1, 0.5, 1] } 
    }
  };

  const branchRight: Variants = {
    hidden: { opacity: 0, x: 40, filter: "blur(4px)" },
    visible: { 
      opacity: 1, 
      x: 0, 
      filter: "blur(0px)",
      transition: { duration: 0.9, ease: [0.25, 1, 0.5, 1] } 
    }
  };

  return (
    <section 
      className={`relative py-28 md:py-40 overflow-hidden border-b transition-colors duration-700 ${
        isDark ? "bg-[#060c0b] border-emerald-950/20 text-stone-200" : "bg-[#fcfbf9] border-stone-200 text-stone-900"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Header Meta Line */}
        <div className="mb-20 md:mb-28 text-center">
          <span className={`text-[10px] font-mono uppercase tracking-[0.4em] font-semibold ${
            isDark ? "text-emerald-400" : "text-emerald-800"
          }`}>
            02 // Operational Objectives
          </span>
        </div>

        {/* Tree Layout Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-0 items-center relative">
          
          {/* 1. LEFT BRANCH SYSTEM */}
          <div className="hidden lg:flex flex-col lg:col-span-4 space-y-24 text-right items-end justify-center h-full py-4">
            {objectives.filter(obj => obj.side === "left").map((obj) => (
              <motion.div 
                key={obj.num}
                variants={branchLeft}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-140px" }}
                className="space-y-2.5 pr-10 relative w-full max-w-sm group"
              >
                <div className="flex items-baseline justify-end space-x-3">
                  <span className={`text-[11px] font-mono font-medium ${isDark ? "text-emerald-500/70" : "text-emerald-800/70"}`}>
                    {obj.num}.
                  </span>
                  <h3 className={`text-lg font-extrabold tracking-wide uppercase transition-colors duration-300 ${
                    isDark ? "text-stone-100 group-hover:text-emerald-400" : "text-stone-950 group-hover:text-emerald-800"
                  }`}>
                    {obj.label}
                  </h3>
                </div>
                <p className={`text-sm leading-relaxed font-normal ${
                  isDark ? "text-stone-400" : "text-stone-600"
                }`}>
                  {obj.desc}
                </p>
                {/* Minimal Link Line */}
                <div className={`absolute top-3.5 -right-2 w-8 h-[1px] transition-colors duration-300 ${
                  isDark ? "bg-stone-800 group-hover:bg-emerald-500" : "bg-stone-200 group-hover:bg-emerald-800"
                }`} />
              </motion.div>
            ))}
          </div>

          {/* 2. CENTER PILLAR CONTAINER (Increased Dynamic Scale) */}
          <div className="lg:col-span-4 flex flex-col items-center justify-center relative py-2 h-full">
            {/* Visual Center Stem Spine */}
            <div className={`absolute top-0 bottom-0 w-[1px] hidden lg:block ${
              isDark 
                ? "bg-gradient-to-b from-transparent via-stone-800/40 to-transparent" 
                : "bg-gradient-to-b from-transparent via-stone-200 to-transparent"
            }`} />

            <div className="relative w-full max-w-[320px] md:max-w-[420px] aspect-square flex items-center justify-center bg-transparent z-10">
              <NextImage 
                src={IllustrationImg} 
                alt="Strategic Objectives Architecture Map"
                priority
                className={`w-full h-full object-contain transition-all duration-700 select-none pointer-events-none ${
                  isDark ? "opacity-85 brightness-110" : "opacity-100"
                }`}
              />
            </div>
          </div>

          {/* 3. RIGHT BRANCH SYSTEM */}
          <div className="hidden lg:flex flex-col lg:col-span-4 space-y-36 text-left items-start justify-center h-full py-4 lg:pt-20">
            {objectives.filter(obj => obj.side === "right").map((obj) => (
              <motion.div 
                key={obj.num}
                variants={branchRight}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-140px" }}
                className="space-y-2.5 pl-10 relative w-full max-w-sm group"
              >
                <div className="flex items-baseline space-x-3">
                  <span className={`text-[11px] font-mono font-medium ${isDark ? "text-emerald-500/70" : "text-emerald-800/70"}`}>
                    {obj.num}.
                  </span>
                  <h3 className={`text-lg font-extrabold tracking-wide uppercase transition-colors duration-300 ${
                    isDark ? "text-stone-100 group-hover:text-emerald-400" : "text-stone-950 group-hover:text-emerald-800"
                  }`}>
                    {obj.label}
                  </h3>
                </div>
                <p className={`text-sm leading-relaxed font-normal ${
                  isDark ? "text-stone-400" : "text-stone-600"
                }`}>
                  {obj.desc}
                </p>
                {/* Minimal Link Line */}
                <div className={`absolute top-3.5 -left-2 w-8 h-[1px] transition-colors duration-300 ${
                  isDark ? "bg-stone-800 group-hover:bg-emerald-500" : "bg-stone-200 group-hover:bg-emerald-800"
                }`} />
              </motion.div>
            ))}
          </div>

          {/* MOBILE ADAPTIVE PILL TRACK */}
          <div className="block lg:hidden col-span-1 space-y-10 mt-6">
            {objectives.map((obj) => (
              <div key={`mob-${obj.num}`} className={`space-y-2 pl-5 border-l transition-colors duration-300 ${
                isDark ? "border-stone-800" : "border-stone-200"
              }`}>
                <div className="flex items-baseline space-x-2">
                  <span className="text-xs font-mono text-stone-500">{obj.num}.</span>
                  <h4 className={`text-base font-bold tracking-wide uppercase ${isDark ? "text-stone-100" : "text-stone-950"}`}>
                    {obj.label}
                  </h4>
                </div>
                <p className={`text-sm leading-relaxed ${isDark ? "text-stone-400" : "text-stone-600"}`}>
                  {obj.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}