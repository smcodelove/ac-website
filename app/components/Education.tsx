"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { GraduationCap, BookOpen, School } from "lucide-react";

const educationItems = [
  {
    icon: GraduationCap,
    degree: "M.Com",
    period: "2011–2013",
    institution: "CCS University, Meerut",
    level: "Post Graduation",
  },
  {
    icon: BookOpen,
    degree: "B.Com",
    period: "2007–2011",
    institution: "Vardhaman College, Bijnor",
    level: "Graduation · MJPR University",
  },
  {
    icon: School,
    degree: "Intermediate",
    period: "2007",
    institution: "Raja Jawala Prashad Inter College, Bijnor",
    level: "Higher Secondary",
  },
];

export default function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="education" className="py-24 bg-[#FAF7F2]" ref={ref}>
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-[#FF8C00] font-semibold text-sm tracking-widest uppercase mb-3">
            Education
          </p>
          <h2 className="section-heading saffron-underline saffron-underline-center">
            Academic Foundation
          </h2>
          <p className="section-subheading mt-6 max-w-2xl mx-auto">
            Knowledge as the bedrock of leadership
          </p>
        </motion.div>

        {/* Education Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {educationItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.degree}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: index * 0.12,
                  ease: "easeOut",
                }}
                className="group bg-white rounded-2xl p-8 shadow-[0_4px_20px_rgba(10,31,68,0.07)] hover:shadow-[0_8px_40px_rgba(10,31,68,0.14)] transition-all duration-300 flex flex-col items-center text-center gap-5 relative overflow-hidden"
              >
                {/* Top accent bar */}
                <div
                  className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl"
                  style={{
                    background: "linear-gradient(90deg, #FF8C00, #C9A961)",
                    transform: "scaleX(0)",
                    transformOrigin: "left",
                    transition: "transform 0.4s ease",
                  }}
                />
                <style>{`
                  .edu-card:hover .edu-bar {
                    transform: scaleX(1) !important;
                  }
                `}</style>

                {/* Icon */}
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                  style={{
                    background: "linear-gradient(135deg, #0A1F44, #132d61)",
                  }}
                >
                  <Icon size={28} className="text-[#FF8C00]" />
                </div>

                {/* Degree */}
                <div>
                  <span
                    className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase mb-3"
                    style={{ background: "rgba(255,140,0,0.12)", color: "#FF8C00" }}
                  >
                    {item.level}
                  </span>
                  <h3 className="font-heading font-bold text-[#0A1F44] text-2xl mb-1">
                    {item.degree}
                  </h3>
                  <p className="text-[#FF8C00] font-semibold text-sm">
                    {item.period}
                  </p>
                </div>

                {/* Institution */}
                <p className="text-[#6B7280] text-sm leading-relaxed">
                  {item.institution}
                </p>

                {/* Bottom border accent */}
                <div
                  className="w-12 h-0.5 rounded-full group-hover:w-full transition-all duration-500"
                  style={{
                    background: "linear-gradient(90deg, #FF8C00, #C9A961)",
                  }}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
