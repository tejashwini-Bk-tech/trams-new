"use client";

import { motion,Variants } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import globe from "@/public/globe.png"

interface HeroProps {
  isDark: boolean;
}

export default function Hero({ isDark }: HeroProps) {
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.215, 0.61, 0.355, 1] as const,
    },
  },
};

  return (
    <section className="relative min-h-[calc(100vh-80px)] flex items-center overflow-hidden px-6 lg:px-8 py-16 md:py-24">
      
      {/* Background Graphic Grid */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute top-0 right-0 w-[50rem] h-[50rem] rounded-full blur-[160px] transition-opacity duration-700 ${
          isDark ? "bg-emerald-950/20" : "bg-emerald-100/40"
        }`} />
      </div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center relative z-10">
        
        {/* LEFT COLUMN: Elite Corporate Typography */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8 lg:col-span-7 text-left"
        >
          {/* Subtle Kick */}
          <motion.div variants={itemVariants} className="inline-flex items-center space-x-3">
            <span className={`text-xs font-bold uppercase tracking-[0.35em] ${isDark ? "text-emerald-400" : "text-emerald-800"}`}>
              Welcome to Trams
            </span>
            <span className={`w-16 h-[1px] ${isDark ? "bg-stone-800" : "bg-stone-300"}`} />
          </motion.div>

          {/* TAGLINE: High-Impact Hero Headline */}
          <motion.h1 
            variants={itemVariants}
            className={`text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.1] ${
              isDark ? "text-white" : "text-stone-900"
            }`}
          >
            Together We Can, <br />
            <span className={`bg-clip-text text-transparent bg-gradient-to-r ${
              isDark ? "from-emerald-400 to-teal-300" : "from-emerald-800 to-emerald-950"
            }`}>
              Make It Happen
            </span>
          </motion.h1>

          {/* DESCRIPTION: Editorial Corporate Description Structure */}
          <div className="space-y-4">
            <motion.h2 
              variants={itemVariants}
              className={`text-xl sm:text-2xl font-semibold tracking-wide leading-snug ${
                isDark ? "text-stone-200" : "text-stone-800"
              }`}
            >
              Building a sustainable future for people and the planet.
            </motion.h2>

            <motion.p 
              variants={itemVariants}
              className={`text-base sm:text-lg font-normal leading-relaxed tracking-wide max-w-2xl ${
                isDark ? "text-stone-400" : "text-stone-600"
              }`}
            >
              Empowering NGOs, startups, and businesses with strategic solutions that 
              drive sustainable growth and lasting impact.
            </motion.p>
          </div>

          {/* Corporate CTA Matrix */}
          <motion.div variants={itemVariants} className="pt-4 flex flex-wrap items-center gap-5">
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="/contact"
                className={`relative inline-block border-2 font-bold text-xs uppercase tracking-widest px-8 py-4 transition-colors duration-300 isolate before:absolute before:inset-0 before:scale-x-0 hover:before:scale-x-100 before:origin-left before:transition-transform before:duration-300 before:-z-10 ${
                  isDark 
                    ? "border-emerald-500 text-emerald-400 before:bg-emerald-500 hover:text-[#101010]" 
                    : "border-emerald-800 bg-emerald-800 text-white before:bg-stone-900 hover:border-stone-900"
                }`}
              >
                Get In Touch
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link href="#who-we-are" className={`font-bold text-xs uppercase tracking-widest px-6 py-4 border-2 border-transparent transition-colors duration-300 ${isDark ? "text-stone-400 hover:text-white" : "text-stone-600 hover:text-stone-900"}`}>
                Explore Solutions ↓
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* RIGHT COLUMN: Professional Image Placeholder Grid */}
       {/* RIGHT COLUMN: Updated to remove background and border styling */}
<motion.div
  initial={{ opacity: 0, x: 50 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.9, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
  className="lg:col-span-5 w-full h-[380px] sm:h-[480px] lg:h-[540px] relative"
>
  <Image
    src={globe} 
    alt="Consultancy Visual Asset"
    fill
    priority
    className="object-contain transition-transform duration-700 hover:scale-105"
  />
</motion.div>

      </div>
    </section>
  );
}
