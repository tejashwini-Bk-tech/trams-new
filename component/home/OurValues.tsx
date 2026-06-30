"use client";

import { motion } from "framer-motion";

interface ValuesSectionProps {
  isDark: boolean;
}

export default function ValuesSection({ isDark }: ValuesSectionProps) {
  const values = [
    {
      title: "Collaborative",
      description: "We build strong partnerships to create lasting positive change.",
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.25}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
        </svg>
      ),
    },
    {
      title: "Insightful",
      description: "We share meaningful research and practical insights that drive action.",
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.25}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125H3.375A1.125 1.125 0 012.25 20.25V4.125c0-.621.504-1.125 1.125-1.125H9.75M9 5.25h6m-6 3h6m-3-3v3m-6.75 3h13.5" />
        </svg>
      ),
    },
    {
      title: "Impactful",
      description: "We design solutions that deliver real benefits for partners and communities.",
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.25}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
        </svg>
      ),
    },
    {
      title: "Innovative",
      description: "We embrace fresh ideas and approaches to solve emerging challenges.",
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.25}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
    },
    {
      title: "Transparent",
      description: "We act with integrity and foster trust through open communication.",
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.25}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      title: "Empowering",
      description: "We equip organizations with the tools and resources they need to succeed.",
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.25}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
        </svg>
      ),
    },
  ];

  const duplicatedValues = [...values, ...values];

  return (
    <section 
      id="values" 
      className={`relative py-16 md:py-24 overflow-hidden transition-colors duration-500 border-t ${
        isDark ? "bg-[#030712] border-stone-900" : "bg-gradient-to-b from-stone-50 to-white border-stone-100"
      }`}
    >
      {/* Ambient Background Gradients */}
      {isDark && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 right-1/4 w-[40rem] h-[40rem] rounded-full bg-emerald-600/10 blur-[130px]" />
          <div className="absolute -bottom-20 left-10 w-[30rem] h-[30rem] rounded-full bg-emerald-500/5 blur-[120px]" />
        </div>
      )}

      {/* INFINITE MARQUEE STRIP TRACK */}
      <div className="w-full relative flex items-center overflow-x-hidden mask-inline-fade z-20">
        <motion.div
          className="flex space-x-16 whitespace-nowrap pr-16"
          animate={{ x: [0, "-50%"] }}
          transition={{
            ease: "linear",
            duration: 25,
            repeat: Infinity,
          }}
        >
          {duplicatedValues.map((value, index) => (
            <div 
              key={`${value.title}-${index}`}
              className="w-[260px] sm:w-[280px] shrink-0 flex flex-col space-y-5 whitespace-normal text-left"
            >
              {/* Micro-Icon */}
              <div className={`${isDark ? "text-stone-400" : "text-stone-600"}`}>
                {value.icon}
              </div>

              {/* Text Frame */}
              <div className="space-y-2">
                <h3 className={`text-xl font-bold tracking-tight ${isDark ? "text-white" : "text-stone-900"}`}>
                  {value.title}
                </h3>
                <p className={`text-sm leading-relaxed tracking-wide font-normal ${
                  isDark ? "text-stone-400" : "text-stone-500"
                }`}>
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <style jsx global>{`
        .mask-inline-fade {
          mask-image: linear-gradient(to right, transparent, white 15%, white 85%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, white 15%, white 85%, transparent);
        }
      `}</style>
    </section>
  );
}
