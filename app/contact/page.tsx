"use client";

import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { useTheme } from "@/component/layout/ThemeProvider";
import Navbar from "@/component/layout/Navbar";
import Footer from "@/component/layout/Footer";

export default function RequestConsultancyPage() {
  const { isDark, setIsDark } = useTheme();
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [formData, setFormData] = useState({
    objective: "",
    timeline: "Q3 2026",
    scale: "Institutional",
    contactName: "",
    contactEmail: "",
    additionalIntel: ""
  });
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const handleSelectObjective = (value: string) => {
    setFormData(prev => ({ ...prev, objective: value }));
    setTimeout(() => setCurrentStep(2), 400); // Fluid automatic progression
  };

  const handleSubmission = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  // High-precision transition configurations
  const slideFadeVariants: Variants = {
    initial: { opacity: 0, x: 20, filter: "blur(4px)" },
    animate: { opacity: 1, x: 0, filter: "blur(0px)", transition: { duration: 0.6, ease: [0.25, 1, 0.5, 1] } },
    exit: { opacity: 0, x: -20, filter: "blur(4px)", transition: { duration: 0.4, ease: [0.25, 1, 0.5, 1] } }
  };

  const strategicObjectives = [
    { id: "unite", label: "Global Alignment & Unity", desc: "Bringing multi-lateral stakeholders together for local operational impact." },
    { id: "support", label: "Structural Infrastructure & Frameworks", desc: "Equipping structural organizations with scalable execution assets." },
    { id: "connect", label: "Cross-Sector Partnership Engineering", desc: "Building premium institutional pipelines and asset resources." },
    { id: "accelerate", label: "SDG Velocity Optimization", desc: "Accelerating internal workflows toward global sustainability benchmarks." }
  ];
  return (
   <div
    className={`min-h-screen transition-colors duration-500 ${
      isDark ? "bg-[#101010]" : "bg-stone-50"
    }`}
   >
   <Navbar isDark={isDark} setIsDark={setIsDark}/>
     <section 
      className={`relative min-h-[90vh] py-24 md:py-36 flex items-center overflow-hidden transition-colors duration-700 ${
        isDark ? "bg-[#101010] text-stone-200" : "bg-stone-50 text-stone-900"
      }`}
    >
      {/* Background Micro-Grid Graphic Accent */}
      <div className={`absolute inset-0 opacity-[0.02] pointer-events-none ${isDark ? "invert" : ""}`} 
        style={{ backgroundImage: "radial-gradient(#000 1px, transparent 1px)", backgroundSize: "24px 24px" }} 
      />

      <div className="max-w-4xl mx-auto px-6 w-full relative z-10">
        
        {/* Upper Header Meta Frame */}
        <div className="mb-16 text-center md:text-left flex flex-col md:flex-row md:items-end justify-between border-b pb-6 gap-4 border-stone-800/10 dark:border-emerald-950/30">
          <div className="space-y-2">
            <span className={`text-[10px] font-mono uppercase tracking-[0.4em] font-semibold block ${
              isDark ? "text-emerald-400" : "text-emerald-800"
            }`}>
              Request Advisory Matrix // System Terminal
            </span>
            <h1 className={`text-3xl font-black tracking-tight ${isDark ? "text-stone-100" : "text-stone-950"}`}>
              Scope Your Engagement
            </h1>
          </div>
          
          {/* Progress Tracker Pill */}
          {!isSubmitted && (
            <div className="text-[11px] font-mono tracking-widest text-stone-500">
              PHASE <span className={isDark ? "text-emerald-400" : "text-emerald-800"}>{currentStep}</span> OF 3
            </div>
          )}
        </div>

        {/* Dynamic Multi-Step Form Core */}
        <div className="relative min-h-100">
          <AnimatePresence mode="wait">
            
            {isSubmitted ? (
              <motion.div 
                key="success" 
                variants={slideFadeVariants} 
                initial="initial" 
                animate="animate" 
                exit="exit"
                className="text-center py-12 space-y-6"
              >
                <div className={`mx-auto w-12 h-12 rounded-full border flex items-center justify-center text-lg ${
                  isDark ? "border-emerald-500 text-emerald-400 bg-emerald-950/20" : "border-emerald-800 text-emerald-800 bg-emerald-50"
                }`}>
                  ✓
                </div>
                <div className="space-y-2">
                  <h2 className={`text-xl font-bold tracking-tight ${isDark ? "text-stone-100" : "text-stone-950"}`}>
                    Engagement Scoped Successfully
                  </h2>
                  <p className={`text-sm max-w-md mx-auto leading-relaxed ${isDark ? "text-stone-400" : "text-stone-600"}`}>
                    Our senior advisory cell is reviewing your structural parameters. We will establish direct alignment via <span className="font-mono text-xs">{formData.contactEmail}</span> within 24 operational hours.
                  </p>
                </div>
              </motion.div>
            ) : currentStep === 1 ? (
              /* PHASE 1: Primary Objective Matrix */
              <motion.div key="step1" variants={slideFadeVariants} initial="initial" animate="animate" exit="exit" className="space-y-6">
                <div className="space-y-1">
                  <h2 className={`text-base font-bold uppercase tracking-wider ${isDark ? "text-stone-200" : "text-stone-900"}`}>
                    1. Select Core Operational Vector
                  </h2>
                  <p className="text-xs text-stone-500">What is the central priority of this advisory request?</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                  {strategicObjectives.map((obj) => (
                    <button
                      key={obj.id}
                      type="button"
                      onClick={() => handleSelectObjective(obj.label)}
                      className={`p-5 text-left border rounded-sm transition-all duration-300 group relative overflow-hidden ${
                        formData.objective === obj.label
                          ? isDark ? "bg-[#0b1210] border-emerald-500" : "bg-stone-100 border-emerald-800"
                          : isDark ? "bg-[#0b1210]/20 border-emerald-950/20 hover:border-stone-700" : "bg-stone-50/40 border-stone-200 hover:border-stone-400"
                      }`}
                    >
                      <h3 className={`text-sm font-bold tracking-tight transition-colors duration-300 ${
                        formData.objective === obj.label
                          ? isDark ? "text-emerald-400" : "text-emerald-800"
                          : isDark ? "text-stone-200 group-hover:text-stone-100" : "text-stone-900 group-hover:text-stone-950"
                      }`}>
                        {obj.label}
                      </h3>
                      <p className={`text-xs mt-1 leading-relaxed ${isDark ? "text-stone-400" : "text-stone-600"}`}>
                        {obj.desc}
                      </p>
                    </button>
                  ))}
                </div>
              </motion.div>
            ) : currentStep === 2 ? (
              /* PHASE 2: Structural Scale & Timelines */
              <motion.div key="step2" variants={slideFadeVariants} initial="initial" animate="animate" exit="exit" className="space-y-8">
                <div className="space-y-1">
                  <h2 className={`text-base font-bold uppercase tracking-wider ${isDark ? "text-stone-200" : "text-stone-900"}`}>
                    2. Contextualize Scale & Urgency
                  </h2>
                  <p className="text-xs text-stone-500">Configure parameters to lock down required advisory bandwidth.</p>
                </div>

                <div className="space-y-6">
                  {/* Scope Scale Selector Toggle */}
                  <div className="space-y-3">
                    <label className="text-xs font-mono uppercase tracking-widest text-stone-500 block">Organizational Footprint</label>
                    <div className="flex flex-wrap gap-3">
                      {["Boutique/Local", "Structural Entity", "Institutional Framework", "Global Multi-Lateral"].map((scaleOption) => (
                        <button
                          key={scaleOption}
                          type="button"
                          onClick={() => setFormData(prev => ({ ...prev, scale: scaleOption }))}
                          className={`px-4 py-2 text-xs font-medium border rounded-sm transition-all duration-200 ${
                            formData.scale === scaleOption
                              ? isDark ? "bg-emerald-950/40 border-emerald-500 text-emerald-400" : "bg-stone-950 border-stone-950 text-stone-100"
                              : isDark ? "bg-transparent border-emerald-950/20 text-stone-400 hover:border-stone-700" : "bg-transparent border-stone-200 text-stone-600 hover:border-stone-400"
                          }`}
                        >
                          {scaleOption}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Target Delivery Timeline Row */}
                  <div className="space-y-3">
                    <label className="text-xs font-mono uppercase tracking-widest text-stone-500 block">Target Execution Envelope</label>
                    <div className="flex flex-wrap gap-3">
                      {["Immediate Deployment", "Q3 2026", "Q4 2026", "Strategic Roadmap 2027"].map((timeOption) => (
                        <button
                          key={timeOption}
                          type="button"
                          onClick={() => setFormData(prev => ({ ...prev, timeline: timeOption }))}
                          className={`px-4 py-2 text-xs font-medium border rounded-sm transition-all duration-200 ${
                            formData.timeline === timeOption
                              ? isDark ? "bg-emerald-950/40 border-emerald-500 text-emerald-400" : "bg-stone-950 border-stone-950 text-stone-100"
                              : isDark ? "bg-transparent border-emerald-950/20 text-stone-400 hover:border-stone-700" : "bg-transparent border-stone-200 text-stone-600 hover:border-stone-400"
                          }`}
                        >
                          {timeOption}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Flow Nav Controls */}
                <div className="flex items-center justify-between pt-4 border-t border-stone-800/10 dark:border-emerald-950/20">
                  <button 
                    type="button" 
                    onClick={() => setCurrentStep(1)} 
                    className="text-xs font-mono tracking-widest text-stone-500 hover:text-stone-300 transition-colors"
                  >
                    ← BACK
                  </button>
                  <button 
                    type="button" 
                    onClick={() => setCurrentStep(3)}
                    className={`px-6 py-2.5 text-xs font-mono tracking-widest uppercase rounded-sm transition-colors font-bold ${
                      isDark ? "bg-stone-100 text-stone-950 hover:bg-emerald-400" : "bg-stone-950 text-stone-100 hover:bg-emerald-900"
                    }`}
                  >
                    CONTINUE →
                  </button>
                </div>
              </motion.div>
            ) : (
              /* PHASE 3: Communications Protocol Credentials */
              <motion.div key="step3" variants={slideFadeVariants} initial="initial" animate="animate" exit="exit" className="space-y-6">
                <div className="space-y-1">
                  <h2 className={`text-base font-bold uppercase tracking-wider ${isDark ? "text-stone-200" : "text-stone-900"}`}>
                    3. Strategic Identity & Intel
                  </h2>
                  <p className="text-xs text-stone-500">Provide direct communications credentials for the senior advisory cell.</p>
                </div>

                <form onSubmit={handleSubmission} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-mono uppercase tracking-wider text-stone-500">Principal Agent Name</label>
                      <input 
                        type="text" 
                        required
                        placeholder="e.g., Alexander Vance"
                        value={formData.contactName}
                        onChange={(e) => setFormData(prev => ({ ...prev, contactName: e.target.value }))}
                        className={`w-full px-4 py-3 text-sm rounded-sm border focus:outline-none focus:ring-1 transition-all ${
                          isDark 
                            ? "bg-[#0b1210]/40 border-emerald-950/40 text-stone-100 focus:border-emerald-500 focus:ring-emerald-500" 
                            : "bg-stone-50 border-stone-200 text-stone-950 focus:border-stone-950 focus:ring-stone-950"
                        }`}
                      />
                    </div>
                    
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-mono uppercase tracking-wider text-stone-500">Secure Contact Email</label>
                      <input 
                        type="email" 
                        required
                        placeholder="vance@institution.org"
                        value={formData.contactEmail}
                        onChange={(e) => setFormData(prev => ({ ...prev, contactEmail: e.target.value }))}
                        className={`w-full px-4 py-3 text-sm rounded-sm border focus:outline-none focus:ring-1 transition-all ${
                          isDark 
                            ? "bg-[#0b1210]/40 border-emerald-950/40 text-stone-100 focus:border-emerald-500 focus:ring-emerald-500" 
                            : "bg-stone-50 border-stone-200 text-stone-950 focus:border-stone-950 focus:ring-stone-950"
                        }`}
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] font-mono uppercase tracking-wider text-stone-500">Brief Contextual Overview (Optional)</label>
                    <textarea 
                      rows={3}
                      placeholder="Outline any key operational metrics or structural blockages..."
                      value={formData.additionalIntel}
                      onChange={(e) => setFormData(prev => ({ ...prev, additionalIntel: e.target.value }))}
                      className={`w-full px-4 py-3 text-sm rounded-sm border focus:outline-none focus:ring-1 transition-all resize-none ${
                        isDark 
                          ? "bg-[#0b1210]/40 border-emerald-950/40 text-stone-100 focus:border-emerald-500 focus:ring-emerald-500" 
                          : "bg-stone-50 border-stone-200 text-stone-950 focus:border-stone-950 focus:ring-stone-950"
                      }`}
                    />
                  </div>

                  {/* Submit Action Interface Track */}
                  <div className="flex items-center justify-between pt-4 border-t border-stone-800/10 dark:border-emerald-950/20">
                    <button 
                      type="button" 
                      onClick={() => setCurrentStep(2)} 
                      className="text-xs font-mono tracking-widest text-stone-500 hover:text-stone-300 transition-colors"
                    >
                      ← BACK
                    </button>
                    <button 
                      type="submit"
                      className={`px-8 py-3 text-xs font-mono tracking-widest uppercase rounded-sm transition-all font-bold ${
                        isDark 
                          ? "bg-emerald-500 text-stone-950 hover:bg-emerald-400 shadow-md shadow-emerald-950/20" 
                          : "bg-stone-950 text-stone-100 hover:bg-emerald-900"
                      }`}
                    >
                      INITIALIZE ENGAGEMENT ↗
                    </button>
                  </div>
                </form>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
    <Footer isDark={isDark}/>
   </div>
  );
}
