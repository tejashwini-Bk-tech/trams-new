"use client";

import { motion, Variants } from "framer-motion";

interface StorySectionProps {
  isDark: boolean;
}

export default function StorySection({ isDark }: StorySectionProps) {
  
  // Executive subtle fade-in sequence
  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.8, 
        ease: [0.25, 1, 0.5, 1],
        delay: custom * 0.15 
      }
    })
  };

  return (
    <section 
      className={`relative py-24 md:py-32 overflow-hidden border-b transition-colors duration-700 ${
        isDark ? "bg-[#060c0b] border-emerald-950/20 text-stone-200" : "bg-[#fcfbf9] border-stone-200 text-stone-900"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Top Header Block: Unifies both concepts cleanly */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b pb-8 mb-16 gap-4 ${isDark ? 'border-stone-900' : 'border-stone-200'}">
          <div className="space-y-3">
            <span className={`text-[10px] font-mono uppercase tracking-[0.4em] font-semibold block ${
              isDark ? "text-emerald-400" : "text-emerald-800"
            }`}>
              01 // Corporate Heritage
            </span>
            <h2 className={`text-3xl sm:text-4xl font-black tracking-tight ${
              isDark ? "text-stone-100" : "text-stone-950"
            }`}>
              Story Behind <span className={isDark ? "text-emerald-400/90" : "text-emerald-900"}>Trams</span>
            </h2>
          </div>
          <p className={`text-xs font-mono uppercase tracking-widest max-w-xs md:text-right ${
            isDark ? "text-stone-500" : "text-stone-400"
          }`}>
            Carrying forward a profound legacy of structural human impact.
          </p>
        </div>

        {/* The 4-Column Executive Balance Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
          
          {/* Pillar 1: Roots */}
          <motion.div 
            custom={0}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className={`p-6 border rounded-sm flex flex-col justify-between group transition-all duration-500 ${
              isDark ? "bg-[#0b1210]/30 border-emerald-950/20" : "bg-stone-50/50 border-stone-200"
            }`}
          >
            <div className="space-y-4">
              <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500 block">01 / Origin</span>
              <h3 className={`text-lg font-bold tracking-tight transition-colors duration-300 ${
                isDark ? "text-stone-200 group-hover:text-emerald-400" : "text-stone-950 group-hover:text-emerald-800"
              }`}>
                Tola Ram Sachdeva
              </h3>
              <p className={`text-xs leading-relaxed ${isDark ? "text-stone-400" : "text-stone-600"}`}>
                Built out of deep familial respect. The enterprise honors our grandfather whose life work balanced commercial prosperity with measurable, lasting local development.
              </p>
            </div>
          </motion.div>

          {/* Pillar 2: Strategy (The Inversion Concept) */}
          <motion.div 
            custom={1}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className={`p-6 border rounded-sm flex flex-col justify-between group transition-all duration-500 ${
              isDark ? "bg-[#0b1210]/30 border-emerald-950/20" : "bg-stone-50/50 border-stone-200"
            }`}
          >
            <div className="space-y-4">
              <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500 block">02 / Alignment</span>
              <h3 className={`text-lg font-bold tracking-tight transition-colors duration-300 ${
                isDark ? "text-stone-200 group-hover:text-emerald-400" : "text-stone-950 group-hover:text-emerald-800"
              }`}>
                Strategic Inversion
              </h3>
              <p className={`text-xs leading-relaxed ${isDark ? "text-stone-400" : "text-stone-600"}`}>
                Established on December 13th, 2024. The framework is engineered around a core mental model: reading our name in reverse unlocks the ultimate goal—building <strong className="font-bold">SMART</strong> solutions.
              </p>
            </div>
            
            {/* Minimal Inline Visual Trick */}
            <div className="pt-4 mt-4 border-t border-dashed border-stone-800 flex items-center justify-between text-[10px] font-mono text-stone-500">
              <span>TRAMS</span>
              <span>⇄</span>
              <span className={isDark ? "text-emerald-400" : "text-emerald-800"}>SMART</span>
            </div>
          </motion.div>

          {/* Pillar 3: Protocol */}
          <motion.div 
            custom={2}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className={`p-6 border rounded-sm flex flex-col justify-between group transition-all duration-500 ${
              isDark ? "bg-[#0b1210]/30 border-emerald-950/20" : "bg-stone-50/50 border-stone-200"
            }`}
          >
            <div className="space-y-4">
              <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500 block">03 / Capital</span>
              <h3 className={`text-lg font-bold tracking-tight transition-colors duration-300 ${
                isDark ? "text-stone-200 group-hover:text-emerald-400" : "text-stone-950 group-hover:text-emerald-800"
              }`}>
                Self-Sustaining Stance
              </h3>
              <p className={`text-xs leading-relaxed ${isDark ? "text-stone-400" : "text-stone-600"}`}>
                We intentionally operate independently from external donor dependencies. We structure models that empower partner organizations to unlock and manage their own operational capital safely.
              </p>
            </div>
          </motion.div>

          {/* Pillar 4: Stance */}
          <motion.div 
            custom={3}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className={`p-6 border rounded-sm flex flex-col justify-between group transition-all duration-500 ${
              isDark ? "bg-[#0b1210]/30 border-emerald-950/20" : "bg-stone-50/50 border-stone-200"
            }`}
          >
            <div className="space-y-4">
              <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500 block">04 / Velocity</span>
              <h3 className={`text-lg font-bold tracking-tight transition-colors duration-300 ${
                isDark ? "text-stone-200 group-hover:text-emerald-400" : "text-stone-950 group-hover:text-emerald-800"
              }`}>
                The SDG Mandate
              </h3>
              <p className={`text-xs leading-relaxed ${isDark ? "text-stone-400" : "text-stone-600"}`}>
                Every layout line, cross-sector partnership, and advisory system we build is fine-tuned to accelerate cross-institutional workflows toward the United Nations Sustainable Development Goals.
              </p>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}