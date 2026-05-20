"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Clock, Building2, Star, Calendar } from "lucide-react";

// Animated counter hook
function useCounter(target: number, isInView: boolean, duration = 1800) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, target, duration]);

  return count;
}

// Stats data
const stats = [
  { icon: Clock, value: 15, suffix: "+", label: "Years of Public Service" },
  { icon: Building2, value: 7, suffix: "+", label: "Companies Led" },
  { icon: Star, value: 5, suffix: "+", label: "National & State Positions" },
  { icon: Calendar, value: 1, suffix: "", label: "Major Govt. Event Organized" },
];

// Animated stat card component
function StatCard({
  icon: Icon,
  value,
  suffix,
  label,
  isInView,
  delay,
}: {
  icon: typeof Clock;
  value: number;
  suffix: string;
  label: string;
  isInView: boolean;
  delay: number;
}) {
  const count = useCounter(value, isInView);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="flex flex-col items-center text-center p-6 rounded-2xl"
      style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)" }}
    >
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
        style={{ background: "rgba(255,140,0,0.2)" }}
      >
        <Icon size={22} style={{ color: "#FF8C00" }} />
      </div>
      <div className="font-heading font-bold text-4xl text-white">
        {count}
        <span style={{ color: "#FF8C00" }}>{suffix}</span>
      </div>
      <div className="text-white/70 text-sm mt-2 leading-snug">{label}</div>
    </motion.div>
  );
}

export default function Achievements() {
  const statsRef = useRef(null);
  const isStatsInView = useInView(statsRef, { once: true, margin: "-80px" });

  const cardRef = useRef(null);
  const isCardInView = useInView(cardRef, { once: true, margin: "-60px" });

  return (
    <section id="achievements" className="py-24 bg-navy-gradient">
      {/* ── Stats Counter Row ── */}
      <div className="section-container" ref={statsRef}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isStatsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-[#FF8C00] font-semibold text-sm tracking-widest uppercase mb-3">
            Impact
          </p>
          <h2
            className="section-heading text-white saffron-underline saffron-underline-center"
          >
            Achievements &amp; Highlights
          </h2>
          <p className="text-white/60 text-base mt-6 max-w-2xl mx-auto">
            A lifetime of commitment measured in milestones
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {stats.map((stat, i) => (
            <StatCard
              key={stat.label}
              {...stat}
              isInView={isStatsInView}
              delay={i * 0.1}
            />
          ))}
        </div>
      </div>

      {/* ── Featured Achievement Card: Lake Festival ── */}
      <div className="section-container" ref={cardRef}>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isCardInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative rounded-3xl overflow-hidden"
          style={{ minHeight: 280 }}
        >
          {/* Background image with overlay */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, rgba(10,31,68,0.92) 0%, rgba(10,31,68,0.75) 50%, rgba(201,169,97,0.3) 100%)",
            }}
          />
          {/* Decorative pattern */}
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage:
                "radial-gradient(circle, white 1px, transparent 1px)",
              backgroundSize: "20px 20px",
            }}
          />

          <div className="relative p-8 md:p-12 flex flex-col md:flex-row gap-8 items-start md:items-center">
            {/* Icon */}
            <div
              className="w-20 h-20 rounded-2xl flex items-center justify-center shrink-0"
              style={{ background: "linear-gradient(135deg, #FF8C00, #C9A961)" }}
            >
              <Calendar size={36} className="text-white" />
            </div>

            {/* Content */}
            <div className="flex-1">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase mb-3"
                style={{ background: "rgba(255,140,0,0.2)", color: "#FF8C00" }}>
                Featured Achievement
              </span>
              <h3 className="font-heading text-white font-bold text-2xl md:text-3xl mb-3">
                Lake Festival, Tehri 2018
              </h3>
              <p className="text-white/75 text-base leading-relaxed max-w-2xl">
                Lead Organizer for the Government of Uttarakhand — successfully
                delivered a flagship cultural and tourism event that strengthened
                Tehri&apos;s identity as a premier lake destination and showcased
                large-scale governmental event management at its finest.
              </p>
            </div>

            {/* Badge */}
            <div className="shrink-0 text-center">
              <div className="font-heading text-5xl font-bold text-[#C9A961]">
                2018
              </div>
              <div className="text-white/60 text-sm mt-1">Govt. of Uttarakhand</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
