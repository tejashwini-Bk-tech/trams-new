"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import featureimage from "@/public/illustration-1.svg";

interface PartnershipFeatureProps {
  isDark: boolean;
}

export default function Feature({ isDark }: PartnershipFeatureProps) {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.1 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <section
      id="sdg-partnership"
      className={`relative py-20 md:py-32 overflow-hidden transition-colors duration-500 px-6 lg:px-8 border-t ${
        isDark ? "bg-[#101010] border-stone-900" : "bg-white border-stone-100"
      }`}
    >
      {/* Subtle Linear Light Spill - Moved low to completely prevent header bleed */}
      <div className="absolute inset-x-0 bottom-0 h-96 overflow-hidden pointer-events-none">
        <div
          className={`absolute bottom-0 right-1/4 w-[45rem] h-[45rem] rounded-full blur-[150px] transition-opacity duration-1000 ${
            isDark ? "bg-emerald-950/20" : "bg-emerald-50/40"
          }`}
        />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
        >
          
          {/* LEFT SIDE: Narrative Canvas (7 Columns) */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <motion.div variants={itemVariants} className="inline-flex items-center space-x-3">
                <span className={`text-xs font-mono font-bold uppercase tracking-[0.35em] ${isDark ? "text-emerald-400" : "text-emerald-800"}`}>
                  Ecosystem Alignment
                </span>
                <span className={`w-8 h-[1px] ${isDark ? "bg-stone-800" : "bg-stone-200"}`} />
              </motion.div>

              <motion.h2
                variants={itemVariants}
                className={`text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-[1.1] ${
                  isDark ? "text-white" : "text-stone-900"
                }`}
              >
                Empowering Growth <br />
                <span className={`bg-clip-text text-transparent bg-gradient-to-r ${
                  isDark ? "from-emerald-400 to-teal-300" : "from-emerald-700 to-emerald-900"
                }`}>
                  Through Partnerships.
                </span>
              </motion.h2>
            </div>

            <div className="space-y-5">
              <motion.h3
                variants={itemVariants}
                className={`text-lg sm:text-xl font-bold tracking-wide leading-relaxed ${
                  isDark ? "text-stone-200" : "text-stone-800"
                }`}
              >
                Our philosophy is rooted in the 17th Goal – Partnerships for the Goals.
              </motion.h3>

              <motion.p
                variants={itemVariants}
                className={`text-base sm:text-lg font-normal leading-relaxed tracking-wide ${
                  isDark ? "text-stone-400" : "text-stone-500"
                }`}
              >
                We recognize that no single organization, no matter how strong, can solve the world’s challenges alone. But when people, ideas, and resources connect, progress happens faster, deeper, and more sustainably.
              </motion.p>
            </div>

            {/* Clean Minimalist Horizontal Data Track */}
            <motion.div
              variants={itemVariants}
              className={`grid grid-cols-2 gap-6 pt-6 border-t border-dashed transition-colors duration-500 ${
                isDark ? "border-stone-800" : "border-stone-200"
              }`}
            >
              <div>
                <div className={`text-2xl font-black font-mono tracking-tight ${isDark ? "text-emerald-400" : "text-emerald-800"}`}>
                  Goal 17
                </div>
                <div className={`text-[10px] uppercase tracking-[0.2em] font-bold mt-1 ${isDark ? "text-stone-500" : "text-stone-400"}`}>
                  Global Ecosystem Anchor
                </div>
              </div>
              <div>
                <div className={`text-2xl font-black font-mono tracking-tight ${isDark ? "text-white" : "text-stone-900"}`}>
                  100%
                </div>
                <div className={`text-[10px] uppercase tracking-[0.2em] font-bold mt-1 ${isDark ? "text-stone-500" : "text-stone-400"}`}>
                  Collective Action Focus
                </div>
              </div>
            </motion.div>
          </div>

          {/* RIGHT SIDE: Borderless Floating Vector Stage (5 Columns) */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -8, x: 4 }}
            transition={{ type: "spring", stiffness: 100, damping: 15 }}
            className="lg:col-span-5 w-full flex items-center justify-center cursor-default pt-6 lg:pt-0"
          >
            {/* Simple, unconstrained container box */}
            <div className="relative w-full max-w-[360px] aspect-square flex items-center justify-center">
              {/* Soft underlying shadow to give depth without layout objects */}
              <div className={`absolute bottom-4 inset-x-12 h-6 rounded-full blur-xl opacity-40 transition-colors duration-500 ${
                isDark ? "bg-black/60" : "bg-stone-300/50"
              }`} />
              
              <Image
                src={featureimage}
                alt="Empowering Growth Through Partnerships Illustration"
                fill
                className="object-contain"
                sizes="(max-w-7xl) 35vw"
                priority
              />
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}