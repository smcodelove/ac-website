"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowDown, Users, Building2, Award } from "lucide-react";

// Animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut", delay },
  }),
};

const slideRight = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut", delay: 0.3 },
  },
};

// Quick stats displayed below the CTAs
const stats = [
  { icon: Users, label: "Years in Public Life", value: "15+" },
  { icon: Building2, label: "Companies Led", value: "7+" },
  { icon: Award, label: "Leadership Roles", value: "5+" },
];

export default function Hero() {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen bg-hero flex items-center overflow-hidden pt-20"
    >
      {/* Subtle background pattern dots */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #0A1F44 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Saffron decorative blob — top-right corner */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-5 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at center, #FF8C00 0%, transparent 70%)",
          transform: "translate(30%, -30%)",
        }}
      />

      <div className="section-container w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center min-h-[85vh] py-12">
          {/* ── Left Side: Text Content ── */}
          <div className="flex flex-col gap-6 order-2 lg:order-1">
            {/* Tag */}
            <motion.div
              custom={0}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
            >
              <span
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-widest uppercase"
                style={{
                  background: "rgba(255,140,0,0.12)",
                  color: "#FF8C00",
                  border: "1px solid rgba(255,140,0,0.25)",
                }}
              >
                <span className="w-1.5 h-1.5 bg-[#FF8C00] rounded-full animate-pulse" />
                Young Leader · Entrepreneur · Community Voice
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              custom={0.15}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] text-[#0A1F44]"
            >
              Arjun
              <br />
              <span
                style={{
                  background: "linear-gradient(135deg, #FF8C00, #C9A961)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Chaudhary
              </span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              custom={0.3}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="text-lg md:text-xl text-[#6B7280] max-w-xl leading-relaxed"
            >
              Building Bharat&apos;s Future Through{" "}
              <span className="text-[#0A1F44] font-semibold">Leadership</span>,{" "}
              <span className="text-[#0A1F44] font-semibold">Enterprise</span> &amp;{" "}
              <span className="text-[#0A1F44] font-semibold">Service</span>
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              custom={0.45}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="flex flex-wrap gap-4"
            >
              <button
                id="hero-cta-journey"
                onClick={scrollToAbout}
                className="btn-primary"
              >
                Know My Journey
                <ArrowDown size={16} />
              </button>
              <button
                id="hero-cta-connect"
                onClick={scrollToContact}
                className="btn-outline"
              >
                Connect with Me
              </button>
            </motion.div>

            {/* Stats Row */}
            <motion.div
              custom={0.6}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="flex flex-wrap gap-6 pt-4 border-t border-[#0A1F44]/10"
            >
              {stats.map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-center gap-2">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center"
                    style={{ background: "rgba(255,140,0,0.12)" }}
                  >
                    <Icon size={16} style={{ color: "#FF8C00" }} />
                  </div>
                  <div>
                    <div className="text-[#0A1F44] font-bold text-lg leading-none">
                      {value}
                    </div>
                    <div className="text-[#6B7280] text-xs">{label}</div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── Right Side: Portrait ── */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={slideRight}
            className="relative flex justify-center lg:justify-end order-1 lg:order-2"
          >
            {/* Saffron geometric shape behind photo */}
            <div
              className="absolute inset-0 rounded-3xl opacity-20 -rotate-6 scale-95 pointer-events-none"
              style={{
                background: "linear-gradient(135deg, #FF8C00, #C9A961)",
              }}
            />

            {/* Portrait container */}
            <div className="relative w-72 h-[420px] sm:w-80 sm:h-[480px] lg:w-[420px] lg:h-[560px] rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(10,31,68,0.2)]">
              <Image
                src="/images/arjun-hero.jpg"
                alt="Arjun Chaudhary — Young Leader"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 320px, (max-width: 1024px) 350px, 420px"
              />
              {/* Gradient overlay at bottom */}
              <div
                className="absolute bottom-0 left-0 right-0 h-32"
                style={{
                  background:
                    "linear-gradient(to top, rgba(10,31,68,0.7) 0%, transparent 100%)",
                }}
              />
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.9, duration: 0.5 }}
              className="absolute -bottom-4 -left-4 lg:bottom-6 lg:left-0 bg-white rounded-2xl shadow-[0_8px_32px_rgba(10,31,68,0.15)] px-4 py-3 flex items-center gap-3"
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, #FF8C00, #C9A961)" }}
              >
                <Award size={18} className="text-white" />
              </div>
              <div>
                <div className="text-[#0A1F44] font-bold text-sm leading-none">
                  Est. 2007
                </div>
                <div className="text-[#6B7280] text-xs mt-0.5">
                  Public Service
                </div>
              </div>
            </motion.div>

            {/* Second floating badge — top right */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.1, duration: 0.5 }}
              className="absolute -top-3 right-4 lg:top-6 lg:right-0 bg-[#0A1F44] text-white rounded-2xl shadow-lg px-4 py-2.5"
            >
              <div className="text-xs font-medium opacity-70">Based in</div>
              <div className="text-sm font-semibold">Dehradun, UK</div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollToAbout}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#6B7280] text-xs cursor-pointer hover:text-[#FF8C00] transition-colors"
      >
        <span className="tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ArrowDown size={18} />
        </motion.div>
      </motion.button>
    </section>
  );
}
