"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { MapPin, GraduationCap, Calendar, Landmark, Users2 } from "lucide-react";
import { useInView } from "framer-motion";
import { useRef } from "react";

// Quick facts displayed in the card
const quickFacts = [
  { icon: Calendar, label: "Date of Birth", value: "July 7, 1990" },
  { icon: Users2, label: "Gotra", value: "Machran" },
  { icon: MapPin, label: "Hometown", value: "Bijnor, Uttar Pradesh" },
  { icon: GraduationCap, label: "Education", value: "M.Com, CCS University, Meerut" },
  { icon: Landmark, label: "Current Base", value: "Dehradun, Uttarakhand" },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 bg-white" ref={ref}>
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-[#FF8C00] font-semibold text-sm tracking-widest uppercase mb-3">
            About
          </p>
          <h2 className="section-heading saffron-underline saffron-underline-center">
            The Man Behind the Mission
          </h2>
          <p className="section-subheading mt-6 max-w-2xl mx-auto">
            A bridge between grassroots community service and modern enterprise
          </p>
        </motion.div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* ── Left: Photo + Family Background ── */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-col gap-6"
          >
            {/* Photo */}
            <div className="relative w-full h-[400px] rounded-2xl overflow-hidden shadow-[0_12px_40px_rgba(10,31,68,0.15)]">
              <Image
                src="/images/arjun-about.jpg"
                alt="Arjun Chaudhary — About"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Bottom gradient */}
              <div
                className="absolute bottom-0 inset-x-0 h-24"
                style={{
                  background:
                    "linear-gradient(to top, rgba(10,31,68,0.8) 0%, transparent 100%)",
                }}
              />
              <div className="absolute bottom-4 left-4 text-white">
                <div className="font-heading text-lg font-bold">
                  Arjun Chaudhary
                </div>
                <div className="text-sm opacity-80">Yuva Neta · Entrepreneur</div>
              </div>
            </div>

            {/* Father's Legacy Card */}
            <div
              className="rounded-2xl p-6"
              style={{
                background: "linear-gradient(135deg, #FAF7F2, #f0ebe2)",
                borderLeft: "4px solid #FF8C00",
              }}
            >
              <div className="flex items-start gap-3">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 mt-1"
                  style={{ background: "rgba(255,140,0,0.15)" }}
                >
                  <Users2 size={18} style={{ color: "#FF8C00" }} />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-[#0A1F44] text-base">
                    Shri Mangheram Singh — Father
                  </h3>
                  <p className="text-[#6B7280] text-sm mt-1 leading-relaxed">
                    Agriculturist & Community Servant. Served as Director of the
                    Ganna Society for{" "}
                    <strong className="text-[#0A1F44]">26 years (1998–2024)</strong>
                    — a testament to a life dedicated to the farming community.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ── Right: Bio + Quick Facts ── */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col gap-8"
          >
            {/* Bio */}
            <div className="prose max-w-none">
              <p className="text-[#1A1A1A] text-base md:text-lg leading-relaxed mb-4">
                Born on{" "}
                <span className="font-semibold text-[#0A1F44]">
                  July 7, 1990
                </span>
                , in the heart of Bijnor, Arjun Chaudhary represents a new
                generation of leadership — one that bridges{" "}
                <span className="font-semibold text-[#FF8C00]">
                  grassroots community service
                </span>{" "}
                with modern enterprise.
              </p>
              <p className="text-[#1A1A1A] text-base md:text-lg leading-relaxed mb-4">
                From his early days as an NSUI student worker in 2007 to holding
                national positions in the{" "}
                <span className="font-semibold text-[#0A1F44]">
                  Maharaja Suraj Mal Parivar
                </span>{" "}
                and leading multiple companies across IT, security, and trade
                sectors, Arjun&apos;s journey embodies the spirit of the modern
                Bhartiya yuva neta.
              </p>
              <p className="text-[#1A1A1A] text-base md:text-lg leading-relaxed">
                A proud son of Shri Mangheram Singh — a respected agriculturist
                who served the Ganna Society as Director for 26 years
                (1998–2024) — Arjun carries forward a legacy of{" "}
                <span className="font-semibold text-[#FF8C00]">
                  service, integrity, and dedication
                </span>{" "}
                to the farming community.
              </p>
            </div>

            {/* Quick Facts Card */}
            <div className="card p-6">
              <h3
                className="font-heading font-bold text-[#0A1F44] text-lg mb-4 pb-3"
                style={{ borderBottom: "2px solid #FAF7F2" }}
              >
                Quick Facts
              </h3>
              <div className="flex flex-col gap-4">
                {quickFacts.map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex items-center gap-3">
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                      style={{ background: "rgba(10,31,68,0.06)" }}
                    >
                      <Icon size={16} style={{ color: "#0A1F44" }} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className="text-[#6B7280] text-xs block">
                        {label}
                      </span>
                      <span className="text-[#1A1A1A] font-semibold text-sm">
                        {value}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
