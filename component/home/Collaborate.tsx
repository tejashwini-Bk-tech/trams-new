"use client";

import { useState } from "react";
import { motion } from "framer-motion";

interface ContactPageProps {
  isDark: boolean;
}

const FORMSUBMIT_ENDPOINT = "https://formsubmit.co/ajax";

export default function ContactUs({ isDark }: ContactPageProps) {
  const [selectedInquiry, setSelectedInquiry] = useState("Partnership");
  const [submitStatus, setSubmitStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    organization: "",
    email: "",
    phone: "",
    message: "",
  });

  const inquiryOptions = ["Partnership", "General Inquiry", "Media/Press", "Other"];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus("sending");
    setStatusMessage("");

    const formSubmitEmail = process.env.NEXT_PUBLIC_FORMSUBMIT_EMAIL;

    if (!formSubmitEmail) {
      setSubmitStatus("error");
      setStatusMessage("Contact form is not configured yet. Please add the FormSubmit email.");
      return;
    }

    try {
      const response = await fetch(`${FORMSUBMIT_ENDPOINT}/${encodeURIComponent(formSubmitEmail)}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          _subject: `Trams ${selectedInquiry} Inquiry`,
          _template: "table",
          _captcha: "false",
       
          
          name: formData.name,
          organization: formData.organization || "Not provided",
          email: formData.email,
          _replyto: formData.email,
          phone: formData.phone || "Not provided",
          inquiry_type: selectedInquiry,
          message: formData.message,
        }),
      });

      const result = (await response.json()) as { success?: boolean; message?: string };

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Unable to send your message right now.");
      }

      setSubmitStatus("sent");
      setStatusMessage("Message sent successfully. We will get back to you soon.");
      setFormData({
        name: "",
        organization: "",
        email: "",
        phone: "",
        message: "",
      });
      setSelectedInquiry("Partnership");
    } catch (error) {
      setSubmitStatus("error");
      setStatusMessage(
        error instanceof Error
          ? error.message
          : "Unable to send your message right now. Please try again.",
      );
    }
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
            {submitStatus === "sent" ? (
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className={`min-h-[28rem] flex flex-col items-start justify-center border-y py-14 ${
                  isDark ? "border-stone-800" : "border-stone-200"
                }`}
              >
                <span className={`text-xs font-mono uppercase tracking-[0.3em] ${
                  isDark ? "text-emerald-400" : "text-emerald-800"
                }`}>
                  Query Received
                </span>
                <h2 className={`mt-6 text-4xl sm:text-5xl font-black tracking-tight leading-tight ${
                  isDark ? "text-white" : "text-stone-900"
                }`}>
                  Thank you.
                </h2>
                <p className={`mt-5 max-w-lg text-base leading-relaxed ${
                  isDark ? "text-stone-400" : "text-stone-600"
                }`}>
                  Your message has been routed successfully. Our team will review the details and get back to you soon.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitStatus("idle");
                    setStatusMessage("");
                  }}
                  className={`mt-10 inline-flex items-center justify-center px-8 py-3 rounded-full text-xs font-mono uppercase tracking-widest font-bold transition-all duration-300 ${
                    isDark
                      ? "border border-stone-700 text-stone-200 hover:border-emerald-500 hover:text-emerald-300"
                      : "border border-stone-300 text-stone-700 hover:border-stone-900 hover:text-stone-950"
                  }`}
                >
                  Send Another
                </button>
              </motion.div>
            ) : (
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
                      required
                      autoComplete="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={`w-full bg-transparent border-b py-3 text-base outline-none transition-all duration-300 peer ${
                        isDark ? "border-stone-800 text-white focus:border-emerald-500" : "border-stone-200 text-stone-900 focus:border-stone-900"
                      }`}
                      placeholder=" "
                    />
                    <label className={`absolute left-0 font-medium tracking-wide transition-all duration-300 pointer-events-none peer-focus:-top-4 peer-focus:text-xs ${
                      formData.name ? "-top-4 text-xs" : "top-3 text-sm"
                    } ${isDark ? "text-stone-500 peer-focus:text-emerald-400" : "text-stone-400 peer-focus:text-stone-900"}`}>
                      Name
                    </label>
                  </div>

                  {/* Organization Input */}
                  <div className="relative group">
                    <input
                      type="text"
                      autoComplete="organization"
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      className={`w-full bg-transparent border-b py-3 text-base outline-none transition-all duration-300 peer ${
                        isDark ? "border-stone-800 text-white focus:border-emerald-500" : "border-stone-200 text-stone-900 focus:border-stone-900"
                      }`}
                      placeholder=" "
                    />
                    <label className={`absolute left-0 font-medium tracking-wide transition-all duration-300 pointer-events-none peer-focus:-top-4 peer-focus:text-xs ${
                      formData.organization ? "-top-4 text-xs" : "top-3 text-sm"
                    } ${isDark ? "text-stone-500 peer-focus:text-emerald-400" : "text-stone-400 peer-focus:text-stone-900"}`}>
                      Organization
                    </label>
                  </div>

                  {/* Email Input */}
                  <div className="relative group">
                    <input
                      type="email"
                      required
                      autoComplete="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full bg-transparent border-b py-3 text-base outline-none transition-all duration-300 peer ${
                        isDark ? "border-stone-800 text-white focus:border-emerald-500" : "border-stone-200 text-stone-900 focus:border-stone-900"
                      }`}
                      placeholder=" "
                    />
                    <label className={`absolute left-0 font-medium tracking-wide transition-all duration-300 pointer-events-none peer-focus:-top-4 peer-focus:text-xs ${
                      formData.email ? "-top-4 text-xs" : "top-3 text-sm"
                    } ${isDark ? "text-stone-500 peer-focus:text-emerald-400" : "text-stone-400 peer-focus:text-stone-900"}`}>
                      Email *
                    </label>
                  </div>

                  {/* Phone Input */}
                  <div className="relative group">
                    <input
                      type="tel"
                      autoComplete="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className={`w-full bg-transparent border-b py-3 text-base outline-none transition-all duration-300 peer ${
                        isDark ? "border-stone-800 text-white focus:border-emerald-500" : "border-stone-200 text-stone-900 focus:border-stone-900"
                      }`}
                      placeholder=" "
                    />
                    <label className={`absolute left-0 font-medium tracking-wide transition-all duration-300 pointer-events-none peer-focus:-top-4 peer-focus:text-xs ${
                      formData.phone ? "-top-4 text-xs" : "top-3 text-sm"
                    } ${isDark ? "text-stone-500 peer-focus:text-emerald-400" : "text-stone-400 peer-focus:text-stone-900"}`}>
                      Phone Number
                    </label>
                  </div>
                </div>

                {/* Message Field Block */}
                <div className="relative group pt-4">
                  <textarea
                    rows={3}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className={`w-full bg-transparent border-b py-3 text-base outline-none resize-none transition-all duration-300 peer ${
                      isDark ? "border-stone-800 text-white focus:border-emerald-500" : "border-stone-200 text-stone-900 focus:border-stone-900"
                    }`}
                    placeholder=" "
                  />
                  <label className={`absolute left-0 font-medium tracking-wide transition-all duration-300 pointer-events-none peer-focus:-top-3 peer-focus:text-xs ${
                    formData.message ? "-top-3 text-xs" : "top-7 text-sm"
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
                  disabled={submitStatus === "sending"}
                  className={`w-full sm:w-auto inline-flex items-center justify-center px-12 py-4 rounded-full text-xs font-mono uppercase tracking-widest font-bold transition-all duration-300 ${
                    isDark 
                      ? "bg-white text-stone-950 hover:bg-stone-100 shadow-[0_10px_35px_rgba(255,255,255,0.06)] disabled:bg-stone-500 disabled:text-stone-200" 
                      : "bg-stone-900 text-white hover:bg-stone-800 shadow-[0_10px_35px_rgba(0,0,0,0.1)] disabled:bg-stone-400"
                  }`}
                >
                  <span>{submitStatus === "sending" ? "Sending..." : "Transmit Query"}</span>
                  <svg className="w-3.5 h-3.5 ml-3 transition-transform duration-300 transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </motion.button>
              </div>

              {statusMessage && submitStatus === "error" && (
                <p
                  role="status"
                  className={`text-sm leading-relaxed ${
                    submitStatus === "error"
                      ? isDark ? "text-red-300" : "text-red-700"
                      : isDark ? "text-emerald-300" : "text-emerald-800"
                  }`}
                >
                  {statusMessage}
                </p>
              )}

            </form>
            )}
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
