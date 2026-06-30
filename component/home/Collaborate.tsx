"use client";

import { useState} from "react";
import { motion } from "framer-motion";

interface ContactPageProps {
  isDark: boolean;
}

export default function ContactUs({ isDark }: ContactPageProps) {
  const [selectedInquiry, setSelectedInquiry] = useState("Partnership");
  const [formData, setFormData] = useState({
    name: "",
    organization: "",
    email: "",
    phone: "",
    message: "",
  });

  const inquiryOptions = ["Partnership", "General Inquiry", "Media/Press", "Other"];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Payload initialized:", { selectedInquiry, ...formData });
  };

  // Advanced Animation Configurations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

 const fadeInLeft = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] as const }, // Added as const here
    },
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] as const }, // Added as const here
    },
  };

  return (
    <section 
      id="contact-portal" 
      className={`relative min-h-screen py-24 md:py-36 flex items-center overflow-hidden transition-colors duration-700 border-t ${
        isDark ? "bg-[#030712] border-stone-900" : "bg-gradient-to-b from-stone-50 to-white border-stone-100"
      }`}
    >
      {/* Cinematic Ambient Background Gradients — Integrated smoothly with adjacent sections */}
      {isDark && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <div className="absolute top-1/4 right-1/4 w-[55rem] h-[55rem] rounded-full bg-emerald-600/10 blur-[150px] transform translate-z-0" />
          <div className="absolute bottom-1/4 left-1/3 w-[45rem] h-[45rem] rounded-full bg-emerald-500/5 blur-[140px] transform translate-z-0" />
        </div>
      )}

      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full relative z-10">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start"
        >
          
          {/* LEFT COLUMN: Deep Editorial Typography */}
          <motion.div variants={fadeInLeft} className="lg:col-span-5 space-y-8">
            <div className="flex items-center space-x-3">
              <span className={`text-xs font-mono uppercase tracking-[0.3em] ${isDark ? "text-emerald-400" : "text-emerald-800"}`}>
                Connection Routing
              </span>
              <span className={`w-12 h-[1px] ${isDark ? "bg-stone-800" : "bg-stone-200"}`} />
            </div>
            
            <h1 className={`text-4xl sm:text-6xl font-black tracking-tight leading-[1.05] ${
              isDark ? "text-white" : "text-stone-900"
            }`}>
              Let’s build <br />
              <span className={`bg-clip-text text-transparent bg-gradient-to-r ${
                isDark ? "from-emerald-300 via-stone-100 to-emerald-500" : "from-stone-900 to-stone-600"
              }`}>
                something real.
              </span>
            </h1>
            
            <div className="space-y-4 max-w-md">
              <p className={`text-base leading-relaxed font-normal ${
                isDark ? "text-stone-400" : "text-stone-600"
              }`}>
                Complete the configuration map to route your details directly to our product or engineering clusters. 
              </p>
              <p className={`text-sm leading-relaxed ${
                isDark ? "text-stone-500" : "text-stone-400"
              }`}>
                We secure raw communication strings via modern dynamic routing frameworks. Review our <span className="underline cursor-pointer hover:text-emerald-500 transition-colors">Privacy Notice</span> for full data criteria.
              </p>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: Asymmetric Dynamic Form Matrix */}
          <motion.div variants={fadeInRight} className="lg:col-span-7 w-full">
            <form onSubmit={handleSubmit} className="space-y-12">
              
              {/* Option Select Array */}
              <div className="space-y-4">
                <label className={`text-xs font-mono uppercase tracking-widest block ${isDark ? "text-stone-500" : "text-stone-400"}`}>
                  01 / System Scope Selection
                </label>
                <div className="flex flex-wrap gap-3">
                  {inquiryOptions.map((option) => {
                    const isSelected = selectedInquiry === option;
                    return (
                      <button
                        key={option}
                        type="button"
                        onClick={() => setSelectedInquiry(option)}
                        className={`px-5 py-3 text-xs font-mono uppercase tracking-wider rounded-lg border transition-all duration-300 ${
                          isSelected
                            ? isDark 
                              ? "border-emerald-500/50 text-white bg-emerald-600/10 shadow-[0_0_25px_rgba(16,185,129,0.15)]"
                              : "border-stone-900 bg-stone-900 text-white"
                            : isDark
                              ? "border-stone-800/80 text-stone-400 hover:border-stone-700 hover:text-stone-200 bg-stone-950/40"
                              : "border-stone-200 text-stone-600 hover:border-stone-400 bg-white"
                        }`}
                      >
                        {option}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Data Field Grid Layout */}
              <div className="space-y-10">
                <label className={`text-xs font-mono uppercase tracking-widest block -mb-4 ${isDark ? "text-stone-500" : "text-stone-400"}`}>
                  02 / Variable Inputs
                </label>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-8">
                  {/* Name Input */}
                  <div className="relative group">
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={`w-full bg-transparent border-b py-3 text-base outline-none transition-all duration-300 peer ${
                        isDark ? "border-stone-800 text-white focus:border-emerald-500" : "border-stone-200 text-stone-900 focus:border-stone-900"
                      }`}
                      placeholder=" "
                    />
                    <label className={`absolute left-0 top-3 text-sm font-medium tracking-wide transition-all duration-300 pointer-events-none peer-focus:-top-4 peer-focus:text-xs ${
                      formData.name ? "-top-4 text-xs" : ""
                    } ${isDark ? "text-stone-500 peer-focus:text-emerald-400" : "text-stone-400 peer-focus:text-stone-900"}`}>
                      Name
                    </label>
                  </div>

                  {/* Organization Input */}
                  <div className="relative group">
                    <input
                      type="text"
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      className={`w-full bg-transparent border-b py-3 text-base outline-none transition-all duration-300 peer ${
                        isDark ? "border-stone-800 text-white focus:border-emerald-500" : "border-stone-200 text-stone-900 focus:border-stone-900"
                      }`}
                      placeholder=" "
                    />
                    <label className={`absolute left-0 top-3 text-sm font-medium tracking-wide transition-all duration-300 pointer-events-none peer-focus:-top-4 peer-focus:text-xs ${
                      formData.organization ? "-top-4 text-xs" : ""
                    } ${isDark ? "text-stone-500 peer-focus:text-emerald-400" : "text-stone-400 peer-focus:text-stone-900"}`}>
                      Organization
                    </label>
                  </div>

                  {/* Email Input */}
                  <div className="relative group">
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full bg-transparent border-b py-3 text-base outline-none transition-all duration-300 peer ${
                        isDark ? "border-stone-800 text-white focus:border-emerald-500" : "border-stone-200 text-stone-900 focus:border-stone-900"
                      }`}
                      placeholder=" "
                    />
                    <label className={`absolute left-0 top-3 text-sm font-medium tracking-wide transition-all duration-300 pointer-events-none peer-focus:-top-4 peer-focus:text-xs ${
                      formData.email ? "-top-4 text-xs" : ""
                    } ${isDark ? "text-stone-500 peer-focus:text-emerald-400" : "text-stone-400 peer-focus:text-stone-900"}`}>
                      Email *
                    </label>
                  </div>

                  {/* Phone Input */}
                  <div className="relative group">
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className={`w-full bg-transparent border-b py-3 text-base outline-none transition-all duration-300 peer ${
                        isDark ? "border-stone-800 text-white focus:border-emerald-500" : "border-stone-200 text-stone-900 focus:border-stone-900"
                      }`}
                      placeholder=" "
                    />
                    <label className={`absolute left-0 top-3 text-sm font-medium tracking-wide transition-all duration-300 pointer-events-none peer-focus:-top-4 peer-focus:text-xs ${
                      formData.phone ? "-top-4 text-xs" : ""
                    } ${isDark ? "text-stone-500 peer-focus:text-emerald-400" : "text-stone-400 peer-focus:text-stone-900"}`}>
                      Phone Number
                    </label>
                  </div>
                </div>

                {/* Message Field Block */}
                <div className="relative group pt-4">
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className={`w-full bg-transparent border-b py-3 text-base outline-none resize-none transition-all duration-300 peer ${
                      isDark ? "border-stone-800 text-white focus:border-emerald-500" : "border-stone-200 text-stone-900 focus:border-stone-900"
                    }`}
                    placeholder=" "
                  />
                  <label className={`absolute left-0 top-7 text-sm font-medium tracking-wide transition-all duration-300 pointer-events-none peer-focus:-top-3 peer-focus:text-xs ${
                    formData.message ? "-top-3 text-xs" : ""
                  } ${isDark ? "text-stone-500 peer-focus:text-emerald-400" : "text-stone-400 peer-focus:text-stone-900"}`}>
                    Message
                  </label>
                </div>
              </div>

              {/* Sophisticated Button Component */}
              <div className="pt-4 flex justify-start">
                <motion.button
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  type="submit"
                  className={`w-full sm:w-auto inline-flex items-center justify-center px-12 py-4 rounded-full text-xs font-mono uppercase tracking-widest font-bold transition-all duration-300 ${
                    isDark 
                      ? "bg-white text-stone-950 hover:bg-stone-100 shadow-[0_10px_35px_rgba(255,255,255,0.06)]" 
                      : "bg-stone-900 text-white hover:bg-stone-800 shadow-[0_10px_35px_rgba(0,0,0,0.1)]"
                  }`}
                >
                  <span>Transmit Query</span>
                  <svg className="w-3.5 h-3.5 ml-3 transition-transform duration-300 transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </motion.button>
              </div>

            </form>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
