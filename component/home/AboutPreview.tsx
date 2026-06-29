"use client";

import { motion,Variants} from "framer-motion";
import Link from "next/link";

interface AboutSectionProps {
  isDark: boolean;
}

export default function About({ isDark }: AboutSectionProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.1 },
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
      // Add 'as const' right here to lock the array type
      ease: [0.215, 0.61, 0.355, 1] as const, 
    },
  },
};

  return (
    <section 
      id="who-we-are" 
      className={`relative py-24 md:py-32 overflow-hidden transition-colors duration-500 px-6 lg:px-8 border-t ${
        isDark ? "bg-[#101010] border-stone-900" : "bg-white border-stone-100"
      }`}
    >
      {/* Background Subtle Accent */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute bottom-0 left-0 w-[40rem] h-[40rem] rounded-full blur-[140px] transition-opacity duration-700 ${
          isDark ? "bg-emerald-950/10" : "bg-emerald-50/30"
        }`} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start"
        >
          
          {/* LEFT PANEL: Massive Partnership Core Hook */}
          <div className="lg:col-span-5 space-y-6">
            <motion.div variants={itemVariants} className="inline-flex items-center space-x-3">
              <span className={`text-xs font-bold uppercase tracking-[0.35em] ${isDark ? "text-emerald-400" : "text-emerald-800"}`}>
                Our Core Philosophy
              </span>
              <span className={`w-12 h-[1px] ${isDark ? "bg-stone-800" : "bg-stone-200"}`} />
            </motion.div>

            <motion.h2 
              variants={itemVariants}
              className={`text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.15] ${
                isDark ? "text-white" : "text-stone-900"
              }`}
            >
              Stronger Together, <br />
              <span className={`bg-clip-text text-transparent bg-gradient-to-r ${
                isDark ? "from-emerald-400 to-teal-300" : "from-emerald-800 to-emerald-950"
              }`}>
                Faster Towards the Goals.
              </span>
            </motion.h2>
          </div>

          {/* RIGHT PANEL: Comprehensive Narrative Statement & Call-To-Action */}
          <div className="lg:col-span-7 space-y-8 lg:pt-10">
            <motion.p 
              variants={itemVariants}
              className={`text-lg sm:text-xl font-medium leading-relaxed tracking-wide ${
                isDark ? "text-stone-200" : "text-stone-800"
              }`}
            >
              At Trams, we believe the fastest way to achieve the Sustainable Development Goals (SDGs) is through partnerships. No single organization can solve global challenges alone — but together, we can.
            </motion.p>

            <motion.p 
              variants={itemVariants}
              className={`text-base sm:text-lg font-normal leading-relaxed tracking-wide ${
                isDark ? "text-stone-400" : "text-stone-600"
              }`}
            >
              We are a not-for-profit that supports NGOs, startups, and businesses by providing connections, resources, and guidance. Our mission is to unite changemakers, strengthen their work, and accelerate collective action for people and the planet.
            </motion.p>

            {/* Premium Interactive Read More Hub Anchor */}
            <motion.div variants={itemVariants} className="pt-4">
              <Link 
                href="/about" 
                className={`group inline-flex items-center space-x-3 text-xs font-bold uppercase tracking-[0.2em] transition-colors duration-200 ${
                  isDark ? "text-emerald-400 hover:text-emerald-300" : "text-emerald-800 hover:text-emerald-950"
                }`}
              >
                <span>Read More About Us</span>
                <motion.svg 
                  className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-2" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor" 
                  strokeWidth={2.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </motion.svg>
              </Link>
            </motion.div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}