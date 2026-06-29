"use client";

import { motion, Variants } from "framer-motion";

interface ProcessSectionProps {
  isDark: boolean;
}

export default function ProcessSection({ isDark }: ProcessSectionProps) {
  // Your exact tailored strategy steps mapped directly into the timeline array
  const steps = [
    {
      id: "/001",
      title: "Obstacle Diagnosis",
      description: "Addressing complex structural obstacles to organizational growth and unlocking frozen operational capacity.",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.25}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      ),
    },
    {
      id: "/002",
      title: "Tailored Architecture",
      description: "Identifying ecosystem challenges and recommending hyper-customized, practical strategic solutions.",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.25}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      id: "/003",
      title: "Strategic Insights",
      description: "Providing valuable, forward-looking industry knowledge and cutting-edge ESG/sustainability macro insights.",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.25}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
    },
    {
      id: "/004",
      title: "Responsible Scaling",
      description: "Enabling regional and global organizations to scale effectively, securely, and socio-environmentally responsibly.",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.25}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
    },
    {
      id: "/005",
      title: "Capital & Resource Hub",
      description: "Offering clean access to specialized partner-driven impact funds, growth benefits, and ecological credits.",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.25}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.1 },
    },
  };

  const stepVariants: Variants = {
    hidden: { opacity: 0, y: 35 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <section 
      id="process" 
      className={`relative py-28 md:py-36 overflow-hidden transition-colors duration-500 px-6 lg:px-8 border-t ${
        isDark ? "bg-[#101010] border-stone-900" : "bg-white border-stone-100"
      }`}
    >
      {/* Dynamic Radial Ambient Blur Overlay */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute top-1/4 -right-20 w-[45rem] h-[45rem] rounded-full blur-[160px] transition-all duration-1000 ${
          isDark ? "bg-emerald-500/5 opacity-50" : "bg-emerald-50/30 opacity-70"
        }`} />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Top Header Block */}
        <div className="mb-24 space-y-4">
          <span className={`text-xs font-mono font-bold uppercase tracking-[0.4em] block ${isDark ? "text-emerald-400" : "text-emerald-800"}`}>
            [ Our Methodology ]
          </span>
          <h2 className={`text-4xl sm:text-5xl font-black tracking-tight leading-none ${isDark ? "text-white" : "text-stone-900"}`}>
            Here’s How We Make It Happen
          </h2>
          <p className={`text-sm sm:text-base font-mono uppercase tracking-widest ${isDark ? "text-stone-500" : "text-stone-400"}`}>
            Sequential Alignment Pipeline // Continuous Delivery
          </p>
        </div>

        {/* Timeline Infrastructure Container */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative space-y-0"
        >
          {/* Main Spine Timeline Vertical Line Vector - Shifted left to clear space */}
          <div className={`absolute left-[7px] top-6 bottom-6 w-[1px] ${
            isDark 
              ? "bg-gradient-to-b from-emerald-500/80 via-stone-800 to-stone-900/10" 
              : "bg-gradient-to-b from-emerald-700 via-stone-200 to-stone-100"
          }`} />

          {/* Loop through process steps */}
          {steps.map((step) => (
            <motion.div 
              key={step.id}
              variants={stepVariants}
              whileHover={{ x: 6 }}
              transition={{ type: "spring", stiffness: 120, damping: 18 }}
              className={`relative grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-start pl-10 md:pl-16 py-10 border-b transition-colors duration-500 group cursor-default ${
                isDark ? "border-stone-900/60 hover:bg-stone-900/10" : "border-stone-100 hover:bg-stone-50/40"
              }`}
            >
              
              {/* Timeline Indicator Hub (The Nodes) */}
              <div className="absolute left-0 top-11 z-20 flex items-center justify-center">
                {/* Outer dynamic glowing ring morphs on parent hover */}
                <div className={`w-[15px] h-[15px] rounded-full flex items-center justify-center border transition-all duration-500 ${
                  isDark 
                    ? "bg-[#101010] border-stone-800 group-hover:border-emerald-400 group-hover:scale-125 shadow-black" 
                    : "bg-white border-stone-300 group-hover:border-emerald-800 group-hover:scale-125 shadow-stone-100"
                }`}>
                  {/* Inner Core Solid Dot */}
                  <div className={`w-[5px] h-[5px] rounded-full transition-all duration-500 ${
                    isDark ? "bg-stone-700 group-hover:bg-emerald-400" : "bg-stone-300 group-hover:bg-emerald-800"
                  }`} />
                </div>
              </div>

              {/* Step Index & Name Column */}
              <div className="md:col-span-4 space-y-2">
                <div className={`text-xs font-mono font-bold tracking-[0.25em] transition-colors duration-300 ${
                  isDark ? "text-stone-600 group-hover:text-emerald-400" : "text-stone-400 group-hover:text-emerald-800"
                }`}>
                  {step.id}
                </div>
                <h3 className={`text-xl font-extrabold tracking-tight transition-colors duration-300 ${
                  isDark ? "text-stone-200 group-hover:text-white" : "text-stone-900 group-hover:text-stone-900"
                }`}>
                  {step.title}
                </h3>
              </div>

              {/* Description Column */}
              <div className="md:col-span-6 lg:col-span-7 pt-1 md:pt-6">
                <p className={`text-sm sm:text-base font-normal leading-relaxed tracking-wide transition-colors duration-300 ${
                  isDark ? "text-stone-400 group-hover:text-stone-300" : "text-stone-500 group-hover:text-stone-700"
                }`}>
                  {step.description}
                </p>
              </div>

              {/* Editorial Icon Alignment Column */}
              <div className={`hidden md:col-span-2 lg:col-span-1 md:flex justify-end pt-5 transition-all duration-500 ${
                isDark 
                  ? "text-stone-800 group-hover:text-emerald-400/20 group-hover:translate-x-1" 
                  : "text-stone-200 group-hover:text-emerald-800/15 group-hover:translate-x-1"
              }`}>
                {step.icon}
              </div>

            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}