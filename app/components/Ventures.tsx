"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Cpu,
  Globe,
  Shield,
  MessageSquare,
  Lock,
  Palette,
  Code2,
} from "lucide-react";

// Venture/company data
const ventures = [
  {
    icon: Globe,
    name: "B.Techmec Management and Multiservices Pvt Ltd",
    role: "Director",
    sector: "Management & Multi-Services",
    description:
      "Comprehensive management and multiservices solutions across industries.",
  },
  {
    icon: Cpu,
    name: "Volisphera Pvt Ltd",
    role: "Director",
    sector: "Technology",
    description:
      "Cutting-edge technology solutions driving digital transformation.",
  },
  {
    icon: Shield,
    name: "Whitelion Exim Security Private Limited",
    role: "Director",
    sector: "Export-Import & Security",
    description:
      "Bridging international trade with robust security frameworks.",
  },
  {
    icon: MessageSquare,
    name: "SP SMS Global Private Limited",
    role: "Director",
    sector: "Communications",
    description:
      "Global communications infrastructure for seamless connectivity.",
  },
  {
    icon: Lock,
    name: "Agentics Solution and Security Private Limited",
    role: "Additional Director",
    sector: "Security Solutions",
    description:
      "Intelligent security systems and agentic solution architectures.",
  },
  {
    icon: Palette,
    name: "Rudaransh Creations",
    role: "Proprietor",
    sector: "Creative Enterprise",
    description:
      "Where artistry meets enterprise — creative solutions with cultural depth.",
  },
  {
    icon: Code2,
    name: "B. IT Solution",
    role: "Founder",
    sector: "IT & Software Solutions",
    description:
      "Founded in 2013, delivering reliable IT and software solutions to businesses.",
    tag: "Est. 2013",
  },
];

export default function Ventures() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="ventures" className="py-24 bg-white" ref={ref}>
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-[#FF8C00] font-semibold text-sm tracking-widest uppercase mb-3">
            Business
          </p>
          <h2 className="section-heading saffron-underline saffron-underline-center">
            Enterprise &amp; Leadership
          </h2>
          <p className="section-subheading mt-6 max-w-2xl mx-auto">
            Building businesses that build the nation
          </p>
        </motion.div>

        {/* Ventures Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ventures.map((venture, index) => {
            const Icon = venture.icon;
            return (
              <motion.div
                key={venture.name}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
                className="group card p-6 flex flex-col gap-4 relative overflow-hidden"
              >
                {/* Tag (Est. year) */}
                {venture.tag && (
                  <span
                    className="absolute top-4 right-4 text-xs font-bold px-2.5 py-1 rounded-full"
                    style={{
                      background: "rgba(201,169,97,0.15)",
                      color: "#C9A961",
                    }}
                  >
                    {venture.tag}
                  </span>
                )}

                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                  style={{
                    background: "linear-gradient(135deg, #0A1F44, #132d61)",
                  }}
                >
                  <Icon size={22} className="text-[#FF8C00]" />
                </div>

                {/* Content */}
                <div className="flex flex-col gap-1.5">
                  <h3 className="font-heading font-bold text-[#0A1F44] text-base leading-snug group-hover:text-[#FF8C00] transition-colors">
                    {venture.name}
                  </h3>
                  <p
                    className="text-sm font-semibold"
                    style={{ color: "#FF8C00" }}
                  >
                    {venture.role}
                  </p>
                  <p className="text-[#6B7280] text-xs font-medium uppercase tracking-wider">
                    {venture.sector}
                  </p>
                </div>

                <p className="text-[#6B7280] text-sm leading-relaxed flex-1">
                  {venture.description}
                </p>

                {/* Bottom accent */}
                <div
                  className="h-0.5 w-0 group-hover:w-full rounded-full transition-all duration-500"
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
