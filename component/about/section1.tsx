"use client";

import { useState } from "react";
import { motion, Variants } from "framer-motion";

interface HeroAboutSectionProps {
  isDark: boolean;
  onReadMoreToggle: (isExpanded: boolean) => void;
}

export default function HeroAboutSection({ isDark, onReadMoreToggle }: HeroAboutSectionProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const headlineString = "Stronger Together, Faster Towards the Goals.";
  const headlineWords = headlineString.split(" ");

  // Parent layout wrapper orchestration
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        staggerChildren: 0.04,
        delayChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.3 }
    }
  };

  // Character-by-character typing layout
  const characterVariants: Variants = {
    hidden: { opacity: 0, y: "0.25em" },
    visible: {
      opacity: 1,
      y: "0em",
      transition: { 
        duration: 0.45, 
        ease: [0.215, 0.610, 0.355, 1.000] as const 
      }
    }
  };

  // Delayed editorial layout entry block
  const editorialColumnVariants: Variants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.8, 
        ease: [0.16, 1, 0.3, 1] as const,
        delay: 0.6
      }
    }
  };

  const handleToggle = () => {
    const nextState = !isExpanded;
    setIsExpanded(nextState);
    onReadMoreToggle(nextState);
  };

  return (
    <section 
      id="trams-asymmetric-hero" 
      className={`relative py-28 md:py-44 overflow-hidden transition-colors duration-500 ${
        isDark ? "bg-[#060c0b] text-stone-200" : "bg-[#fcfbf9] text-stone-900"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start"
        >
          
          {/* TRACK 01: Meta Signature Tag */}
          <div className="lg:col-span-12 mb-4">
            <span className={`text-[10px] font-mono uppercase tracking-[0.4em] font-semibold ${
              isDark ? "text-emerald-500" : "text-emerald-800"
            }`}>
              01 // Corporate Intent
            </span>
          </div>

          {/* TRACK 02: Asymmetric Headline Space (Spans 7 Columns) */}
          <div className="lg:col-span-7">
            <h1 className={`text-4xl sm:text-6xl font-extrabold tracking-tight leading-[1.08] ${
              isDark ? "text-stone-100" : "text-stone-950"
            }`}>
              {headlineWords.map((word, wordIdx) => (
                <span key={wordIdx} className="inline-block whitespace-nowrap mr-4 overflow-hidden py-1">
                  {word.split("").map((char, charIdx) => (
                    <motion.span
                      key={charIdx}
                      variants={characterVariants}
                      className="inline-block"
                    >
                      {char}
                    </motion.span>
                  ))}
                </span>
              ))}
            </h1>
          </div>

          {/* TRACK 03: Editorial Right-Shift Column (Spans 5 Columns) */}
          <motion.div 
            variants={editorialColumnVariants}
            className="lg:col-span-5 space-y-8 lg:pt-4"
          >
            <p className={`text-lg leading-relaxed font-normal ${
              isDark ? "text-stone-300" : "text-stone-700"
            }`}>
              At Trams, we believe the fastest way to achieve the Sustainable Development Goals (SDGs) is through deep, cross-sector partnerships. Global systemic challenges cannot be managed in isolation—they require coordinated networks.
            </p>

            <p className={`text-xs leading-relaxed tracking-wide font-normal max-w-sm ${
              isDark ? "text-stone-400" : "text-stone-500"
            }`}>
              We work as an independent operational resource engine providing NGOs, modern startups, and leading organizations with optimized frameworks, critical execution connectivity, and strategic advisory pathways.
            </p>

            {/* Premium Interactive Wire Trigger */}
            <div className="pt-2">
              <button
                onClick={handleToggle}
                className="group flex items-center space-x-6 text-[11px] font-mono uppercase tracking-[0.25em] font-bold"
              >
                <span className={isDark ? "text-stone-400 group-hover:text-stone-100" : "text-stone-600 group-hover:text-stone-950"}>
                  {isExpanded ? "Minimize Narrative" : "Explore Full Parameters"}
                </span>
                <span className="relative flex h-2 w-2">
                  <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
                    isDark ? "bg-emerald-400" : "bg-stone-900"
                  }`} />
                  <span className={`relative inline-flex rounded-full h-2 w-2 ${
                    isDark ? "bg-emerald-500" : "bg-stone-950"
                  }`} />
                </span>
              </button>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}