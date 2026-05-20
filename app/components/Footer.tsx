"use client";

import { motion } from "framer-motion";
import {
  Globe,
  Radio,
  Share2,
  Link,
  Rss,
  Heart,
} from "lucide-react";

const quickLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#journey", label: "Journey" },
  { href: "#ventures", label: "Ventures" },
  { href: "#achievements", label: "Achievements" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contact", label: "Contact" },
];

const socialLinks = [
  { icon: Globe, label: "Facebook", href: "https://facebook.com/arjunchaudhary" },
  { icon: Radio, label: "Twitter/X", href: "https://twitter.com/arjunchaudhary" },
  { icon: Share2, label: "Instagram", href: "https://instagram.com/arjunchaudhary" },
  { icon: Link, label: "LinkedIn", href: "https://linkedin.com/in/arjunchaudhary" },
  { icon: Rss, label: "YouTube", href: "https://youtube.com/@arjunchaudhary" },
];

export default function Footer() {
  const scrollTo = (href: string) => {
    const el = document.getElementById(href.replace("#", ""));
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer
      className="relative"
      style={{
        background: "linear-gradient(135deg, #060f22 0%, #0A1F44 100%)",
      }}
    >
      {/* Saffron top divider */}
      <div
        className="h-1 w-full"
        style={{ background: "linear-gradient(90deg, #FF8C00, #C9A961, #FF8C00)" }}
      />

      <div className="section-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* ── Column 1: Logo + Tagline ── */}
          <div className="flex flex-col gap-4">
            <div>
              <span className="font-heading text-2xl font-bold text-white">
                Arjun Chaudhary
              </span>
              <div
                className="h-0.5 w-12 mt-1 rounded-full"
                style={{ background: "linear-gradient(90deg, #FF8C00, #C9A961)" }}
              />
            </div>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              Building Bharat&apos;s Future through grassroots leadership,
              enterprise, and dedicated community service.
            </p>
            <p
              className="text-sm font-semibold italic"
              style={{ color: "#FF8C00" }}
            >
              &quot;Seva hi Dharm hai&quot;
            </p>
          </div>

          {/* ── Column 2: Quick Links ── */}
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-semibold text-sm uppercase tracking-widest">
              Quick Links
            </h4>
            <div className="grid grid-cols-2 gap-2">
              {quickLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className="text-left text-white/60 text-sm hover:text-[#FF8C00] transition-colors cursor-pointer"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* ── Column 3: Social + Info ── */}
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-semibold text-sm uppercase tracking-widest">
              Follow &amp; Connect
            </h4>
            <div className="flex gap-3 flex-wrap">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  title={label}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-10 h-10 rounded-xl flex items-center justify-center transition-colors"
                  style={{ background: "rgba(255,255,255,0.08)" }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "rgba(255,140,0,0.25)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.08)";
                  }}
                >
                  <Icon size={18} className="text-white" />
                </motion.a>
              ))}
            </div>

            <div className="text-white/50 text-xs leading-relaxed">
              <p>📍 Dehradun, Uttarakhand</p>
              <p className="mt-1">📍 Bijnor, Uttar Pradesh</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
        >
          <p className="text-white/40 text-xs">
            © 2026 Arjun Chaudhary. All Rights Reserved.
          </p>
          <p className="text-white/40 text-xs flex items-center gap-1.5">
            Built with <Heart size={12} style={{ color: "#FF8C00" }} /> for Bharat
          </p>
        </div>
      </div>
    </footer>
  );
}
