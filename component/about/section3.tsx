"use client";

import { motion, Variants } from "framer-motion";

interface ExecutionStepsSectionProps {
  isDark: boolean;
}

export default function ExecutionStepsSection({ isDark }: ExecutionStepsSectionProps) {
  
  const steps = [
    { num: "01", title: "Listen", desc: "We commit extensive time to parsing the deep operational and localized challenges your framework faces daily." },
    { num: "02", title: "Support", desc: "Our team engineers practical data pipelines and multi-lateral solutions to unburden structural workflows." },
    { num: "03", title: "Connect", desc: "We bypass standard siloes to bring premium institutional actors, resource pools, and execution lines together." },
    { num: "04", title: "Grow", desc: "We guide your entire footprint to expand impact securely and sustainably, permanently locked into the global SDGs." }
  ];

  const ladderStepVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] } 
    }
  };

  return (
    <section 
      className={`relative py-28 md:py-40 overflow-hidden transition-colors duration-700 ${
        isDark ? "bg-[#060c0b] text-stone-200" : "bg-[#fcfbf9] text-stone-900"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Section Header Meta Line */}
        <div className="mb-20 md:mb-28">
          <span className={`text-[10px] font-mono uppercase tracking-[0.4em] font-semibold ${
            isDark ? "text-emerald-400" : "text-emerald-800"
          }`}>
            03 // Execution Methodology
          </span>
        </div>

        {/* Hardened Editorial Structural Grid Layout */}
        <div className="space-y-20 md:space-y-32">
          {steps.map((step, idx) => {
            const isLeftAligned = idx % 2 === 0;
            
            return (
              <motion.div
                key={step.num}
                variants={ladderStepVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 items-center group"
              >
                {/* Condition 1: Left Aligned Steps (01, 03) */}
                {isLeftAligned ? (
                  <>
                    {/* Index Number (Spans 2 Cols) */}
                    <div className="lg:col-span-2 text-left">
                      <span className={`text-6xl sm:text-7xl font-black font-sans tracking-tighter leading-none select-none transition-colors duration-500 ${
                        isDark ? "text-stone-900 group-hover:text-emerald-950/40" : "text-stone-200/60 group-hover:text-stone-300"
                      }`}>
                        {step.num}
                      </span>
                    </div>

                    {/* Core Content Box (Spans 7 Cols) */}
                    <div className="lg:col-span-7 space-y-3">
                      <h3 className={`text-lg sm:text-xl font-extrabold tracking-wide uppercase ${
                        isDark ? "text-stone-100" : "text-stone-950"
                      }`}>
                        {step.title}
                      </h3>
                      <p className={`text-sm leading-relaxed font-normal ${
                        isDark ? "text-stone-400" : "text-stone-600"
                      }`}>
                        {step.desc}
                      </p>
                    </div>

                    {/* Decorative Right End Spacer Component (Spans 3 Cols) */}
                    <div className="hidden lg:block lg:col-span-3 pl-4">
                      <div className={`h-[1px] w-full transition-all duration-500 ${
                        isDark ? "bg-stone-900 group-hover:bg-emerald-900/40" : "bg-stone-200 group-hover:bg-stone-300"
                      }`} />
                    </div>
                  </>
                ) : (
                  <>
                    {/* Condition 2: Right Aligned Steps (02, 04) */}
                    {/* Decorative Left End Spacer Component (Spans 3 Cols) */}
                    <div className="hidden lg:block lg:col-span-3 pr-4">
                      <div className={`h-[1px] w-full transition-all duration-500 ${
                        isDark ? "bg-stone-900 group-hover:bg-emerald-900/40" : "bg-stone-200 group-hover:bg-stone-300"
                      }`} />
                    </div>

                    {/* Core Content Box (Spans 7 Cols) */}
                    <div className="lg:col-span-7 space-y-3 lg:text-right">
                      <h3 className={`text-lg sm:text-xl font-extrabold tracking-wide uppercase ${
                        isDark ? "text-stone-100" : "text-stone-950"
                      }`}>
                        {step.title}
                      </h3>
                      <p className={`text-sm leading-relaxed font-normal ${
                        isDark ? "text-stone-400" : "text-stone-600"
                      }`}>
                        {step.desc}
                      </p>
                    </div>

                    {/* Index Number (Spans 2 Cols) */}
                    <div className="lg:col-span-2 lg:text-right order-first lg:order-last">
                      <span className={`text-6xl sm:text-7xl font-black font-sans tracking-tighter leading-none select-none transition-colors duration-500 ${
                        isDark ? "text-stone-900 group-hover:text-emerald-950/40" : "text-stone-200/60 group-hover:text-stone-300"
                      }`}>
                        {step.num}
                      </span>
                    </div>
                  </>
                )}
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}