"use client";

import { motion } from "framer-motion";

interface FooterProps {
  isDark: boolean;
}

export default function Footer({ isDark }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const navigationClusters = [
    {
      title: "Navigation",
      links: [
        { label: "Overview", href: "#" },
        { label: "Values", href: "#values" },
        { label: "Process", href: "#" },
        { label: "Contact", href: "#contact-portal" },
      ],
    },
    {
      title: "Solutions",
      links: [
        { label: "Partnerships", href: "#" },
        { label: "Product Engineering", href: "#" },
        { label: "Research Strings", href: "#" },
        { label: "Data Architecture", href: "#" },
      ],
    },
    {
      title: "Compliance",
      links: [
        { label: "Privacy Notice", href: "#" },
        { label: "Terms of Service", href: "#" },
        { label: "Data Security", href: "#" },
      ],
    },
  ];

  const socialLinks = [
    { label: "LN", href: "#", description: "LinkedIn" },
    { label: "GH", href: "#", description: "GitHub" },
    { label: "TW", href: "#", description: "Twitter / X" },
  ];

  return (
    <footer 
      className={`relative overflow-hidden transition-colors duration-700 border-t ${
        isDark ? "bg-[#030712] border-stone-900" : "bg-white border-stone-100"
      }`}
    >
      {/* Subtle Ambient Bleed Tail */}
      {isDark && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <div className="absolute -bottom-48 right-1/3 w-[45rem] h-[45rem] rounded-full bg-emerald-500/5 blur-[140px] transform translate-z-0" />
          <div className="absolute -bottom-48 left-1/4 w-[40rem] h-[40rem] rounded-full bg-blue-600/5 blur-[130px] transform translate-z-0" />
        </div>
      )}

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 pt-20 pb-12">
        
        {/* UPPER MATRIX: Brand + Dynamic Column Cluster */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16 pb-16">
          
          {/* Brand Positioning Block */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center space-x-2">
              {/* Minimalist Logo Mark for TRAMS */}
              <div className={`w-6 h-6 rounded flex items-center justify-center font-black text-xs tracking-tighter ${
                isDark ? "bg-white text-stone-950" : "bg-stone-900 text-white"
              }`}>
                T
              </div>
              <span className={`text-base font-black tracking-widest ${isDark ? "text-white" : "text-stone-900"}`}>
                trams
              </span>
            </div>
            <p className={`text-sm leading-relaxed max-w-sm font-normal ${
              isDark ? "text-stone-400" : "text-stone-500"
            }`}>
              An integrated framework connecting distributed tech clusters with real-time maintenance and custom execution nodes.
            </p>
          </div>

          {/* Nav Links Assembly */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {navigationClusters.map((cluster) => (
              <div key={cluster.title} className="space-y-4">
                <span className={`text-xs font-mono uppercase tracking-[0.2em] block ${
                  isDark ? "text-stone-500" : "text-stone-400"
                }`}>
                  {cluster.title}
                </span>
                <ul className="space-y-2.5">
                  {cluster.links.map((link) => (
                    <li key={link.label}>
                      <a 
                        href={link.href}
                        className={`text-sm font-normal transition-colors duration-200 group inline-flex flex-col ${
                          isDark ? "text-stone-400 hover:text-white" : "text-stone-600 hover:text-stone-900"
                        }`}
                      >
                        <span>{link.label}</span>
                        <span className={`h-[1px] w-full transform scale-x-0 origin-left transition-transform duration-300 ${
                          isDark ? "bg-blue-400" : "bg-stone-900"
                        } group-hover:scale-x-100`} />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>

        {/* LOWER COMPLIANCE & LEGAL FRAMEWORK */}
        <div className="pt-8 flex flex-col-reverse sm:flex-row sm:items-center sm:justify-between gap-6 border-t border-stone-900/10 dark:border-stone-900">
          
          {/* Metadata String */}
          <div className="space-y-1">
            <p className={`text-xs font-mono tracking-wide ${isDark ? "text-stone-500" : "text-stone-400"}`}>
              &copy; {currentYear} TRAMS System Inc. All variables compiled.
            </p>
          </div>

          {/* Social Matrix */}
          <div className="flex items-center space-x-6">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.description}
                className={`text-xs font-mono tracking-widest transition-colors duration-200 uppercase ${
                  isDark ? "text-stone-500 hover:text-blue-400" : "text-stone-400 hover:text-stone-900"
                }`}
              >
                [{social.label}]
              </a>
            ))}
          </div>

        </div>

      </div>
    </footer>
  );
}