"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronRight } from "lucide-react";
import Link from "next/link";

// Navigation link definitions
const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#journey", label: "Journey" },
  { href: "#ventures", label: "Ventures" },
  { href: "#achievements", label: "Achievements" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Track scroll position to switch navbar style
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      // Determine active section
      const sections = navLinks.map((l) => l.href.replace("#", ""));
      for (const id of sections.reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 100) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    const el = document.getElementById(href.replace("#", ""));
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-[0_2px_20px_rgba(10,31,68,0.1)]"
            : "bg-transparent"
        }`}
      >
        <div className="section-container">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <button
              onClick={() => handleNavClick("#home")}
              className="flex flex-col items-start cursor-pointer"
            >
              <span
                className="font-heading text-xl md:text-2xl font-bold leading-tight"
                style={{ color: "#0A1F44" }}
              >
                Arjun Chaudhary
              </span>
              <span
                className="w-full h-[2px] rounded-full mt-1"
                style={{
                  background: "linear-gradient(90deg, #FF8C00, #C9A961)",
                }}
              />
            </button>

            {/* Desktop Nav Links */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.replace("#", "");
                return (
                  <button
                    key={link.href}
                    onClick={() => handleNavClick(link.href)}
                    className={`px-3 py-2 text-sm font-medium rounded-md transition-all duration-200 cursor-pointer ${
                      isActive
                        ? "text-[#FF8C00]"
                        : isScrolled
                        ? "text-[#1A1A1A] hover:text-[#FF8C00]"
                        : "text-[#0A1F44] hover:text-[#FF8C00]"
                    }`}
                  >
                    {link.label}
                  </button>
                );
              })}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center">
              <button
                onClick={() => handleNavClick("#contact")}
                className="btn-primary text-sm py-2.5 px-5"
              >
                Get in Touch
                <ChevronRight size={16} />
              </button>
            </div>

            {/* Mobile Hamburger */}
            <button
              id="mobile-menu-btn"
              className="lg:hidden p-2 rounded-md text-[#0A1F44]"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 z-40 bg-[#0A1F44] flex flex-col"
          >
            {/* Close Button Row */}
            <div className="flex items-center justify-between p-6">
              <span className="font-heading text-xl font-bold text-white">
                Arjun Chaudhary
              </span>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-2 text-white/80 hover:text-white"
              >
                <X size={24} />
              </button>
            </div>

            {/* Mobile Nav Links */}
            <div className="flex flex-col gap-2 px-6 mt-4">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07, duration: 0.3 }}
                  onClick={() => handleNavClick(link.href)}
                  className="text-left text-white text-xl font-medium py-3 border-b border-white/10 hover:text-[#FF8C00] transition-colors cursor-pointer"
                >
                  {link.label}
                </motion.button>
              ))}
            </div>

            {/* Mobile CTA */}
            <div className="px-6 mt-8">
              <button
                onClick={() => handleNavClick("#contact")}
                className="btn-primary w-full justify-center"
              >
                Get in Touch
              </button>
            </div>

            {/* Decorative saffron accent */}
            <div
              className="absolute bottom-0 left-0 w-full h-1"
              style={{
                background: "linear-gradient(90deg, #FF8C00, #C9A961)",
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
