"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/public/trams-2.svg";
import { Dispatch, SetStateAction } from "react";

interface NavbarProps {
  isDark: boolean;
  setIsDark: Dispatch<SetStateAction<boolean>>;
}
export default function Navbar({
  isDark,
  setIsDark,
}: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { label: "Home", href: "/", match: "/" },
    { label: "Who We Are", href: "/about", match: "/about" }
   
  ];

  const isActiveRoute = (match: string) => {
    if (match.includes("#")) {
      return pathname === "/" && match.startsWith("/#");
    }

    return match === "/" ? pathname === "/" : pathname.startsWith(match);
  };

  const desktopLinkClass = (active: boolean) =>
    `relative text-sm tracking-wide group py-2 transition-colors duration-150 ${
      active
        ? `font-semibold ${isDark ? "text-emerald-300" : "text-emerald-900"}`
        : `font-medium ${
            isDark
              ? "text-stone-300 hover:text-emerald-400"
              : "text-stone-600 hover:text-emerald-800"
          }`
    }`;

  const mobileLinkClass = (active: boolean) =>
    `block rounded-sm px-3 py-2 text-sm transition-colors ${
      active
        ? isDark
          ? "bg-emerald-500/10 text-emerald-300 font-semibold"
          : "bg-emerald-50 text-emerald-900 font-semibold"
        : isDark
          ? "text-stone-300 hover:text-emerald-300"
          : "text-stone-600 hover:text-emerald-900"
    }`;

  return (
    <nav
      className={`w-full sticky top-0 z-50 backdrop-blur-md bg-opacity-95 transition-colors duration-300 border-b ${
        isDark ? "bg-[#101010] border-stone-800" : "bg-white border-stone-200"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Brand Identity */}
          <div className="shrink-0 flex items-center">
            <Link href="/" className="flex items-center">
              <motion.div
                animate={{
                  // Combines a crisp 1px emerald text outline with the deep ambient glow
                  filter: isDark
                    ? "drop-shadow(1px 0px 0px rgba(16, 185, 129, 0.8)) drop-shadow(-1px 0px 0px rgba(16, 185, 129, 0.8)) drop-shadow(0px 1px 0px rgba(16, 185, 129, 0.8)) drop-shadow(0px -1px 0px rgba(16, 185, 129, 0.8)) drop-shadow(0 0 20px rgba(16, 185, 129, 0.4))"
                    : "drop-shadow(0 0 0px rgba(0,0,0,0))",
                }}
                transition={{ duration: 0.3 }}
                className="flex items-center"
              >
                <Image
                  src={logo}
                  alt="Trams Consulting Logo"
                  width={150}
                  height={45}
                  priority
                  className="object-contain"
                />
              </motion.div>
            </Link>
          </div>

          {/* Desktop Management Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            {navItems.map((item) => {
              const active = isActiveRoute(item.match);

              return (
                <Link
                  key={`${item.label}-${item.href}`}
                  href={item.href}
                  className={desktopLinkClass(active)}
                >
                  {item.label}
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 w-full origin-left transition-transform duration-200 ${
                      active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    } ${isDark ? "bg-emerald-400" : "bg-emerald-800"}`}
                  />
                </Link>
              );
            })}
          </div>

          {/* Action Center (Toggle + Executive Button) */}
          <div className="hidden md:flex items-center space-x-6">
            {/* Interactive Theme Switcher Switch */}
            <button
              onClick={() => setIsDark(!isDark)}
              suppressHydrationWarning
              className={`p-2.5 rounded-full border transition-colors duration-200 focus:outline-none ${
                isDark
                  ? "border-stone-800 bg-stone-900 text-amber-400 hover:bg-stone-800"
                  : "border-stone-200 bg-stone-50 text-stone-600 hover:bg-stone-100"
              }`}
              aria-label="Toggle Color Theme"
            >
              {isDark ? (
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.344l-.707-.707M12 7a5 5 0 100 10 5 5 0 000-10z"
                  />
                </svg>
              ) : (
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>
              )}
            </button>

            {/* Executive CTA Button */}
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="/contact"
                className={`relative inline-block border-2 font-semibold text-xs uppercase tracking-widest px-6 py-3 transition-colors duration-300 isolate before:absolute before:inset-0 before:scale-x-0 hover:before:scale-x-100 before:origin-left before:transition-transform before:duration-300 before:-z-10 ${
                  isDark
                    ? "border-white text-white before:bg-white hover:text-[#101010]"
                    : "border-stone-900 text-stone-900 before:bg-stone-900 hover:text-white"
                }`}
              >
                Request Consultation
              </Link>
            </motion.div>
          </div>

          {/* Mobile Access Strip */}
          <div className="flex md:hidden items-center space-x-3">
            {/* Mobile Switcher Switch */}
            <button
              onClick={() => setIsDark(!isDark)}
              suppressHydrationWarning
              className={`p-2 rounded-md ${isDark ? "text-amber-400" : "text-stone-600"}`}
              aria-label="Toggle structural theme layout alignment"
            >
              {isDark ? (
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.344l-.707-.707M12 7a5 5 0 100 10 5 5 0 000-10z"
                  />
                </svg>
              ) : (
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>
              )}
            </button>

            {/* Hamburger Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              suppressHydrationWarning
              className="p-2 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              <div className="w-6 h-5 flex flex-col justify-between relative">
                <motion.span
                  animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 9 : 0 }}
                  transition={{ duration: 0.2 }}
                  className={`w-full h-0.5 block absolute top-0 ${isDark ? "bg-white" : "bg-stone-900"}`}
                />
                <motion.span
                  animate={{ opacity: isOpen ? 0 : 1 }}
                  transition={{ duration: 0.15 }}
                  className={`w-full h-0.5 block absolute top-2 ${isDark ? "bg-white" : "bg-stone-900"}`}
                />
                <motion.span
                  animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -9 : 0 }}
                  transition={{ duration: 0.2 }}
                  className={`w-full h-0.5 block absolute bottom-0 ${isDark ? "bg-white" : "bg-stone-900"}`}
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className={`md:hidden border-b overflow-hidden ${
              isDark
                ? "bg-[#101010] border-stone-800"
                : "bg-white border-stone-200"
            }`}
          >
            <div className="px-6 pt-3 pb-6 space-y-3">
              {navItems.map((item) => (
                <Link
                  key={`${item.label}-${item.href}-mobile`}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={mobileLinkClass(isActiveRoute(item.match))}
                >
                  {item.label}
                </Link>
              ))}

              <div
                className={`pt-4 border-t ${isDark ? "border-stone-800" : "border-stone-200"}`}
              >
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className={`block w-full text-center border-2 font-semibold text-xs uppercase tracking-widest py-3 ${
                    isDark
                      ? "border-white text-white hover:bg-white hover:text-[#101010]"
                      : "border-stone-900 text-stone-900 hover:bg-stone-900 hover:text-white"
                  }`}
                >
                  Request Consultation
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
