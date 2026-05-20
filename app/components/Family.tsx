"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Heart, Leaf, Users } from "lucide-react";

export default function Family() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="family" className="py-24 bg-white" ref={ref}>
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-[#FF8C00] font-semibold text-sm tracking-widest uppercase mb-3">
            Legacy
          </p>
          <h2 className="section-heading saffron-underline saffron-underline-center">
            Roots &amp; Legacy
          </h2>
          <p className="section-subheading mt-6 max-w-2xl mx-auto">
            A heritage of service flows through generations
          </p>
        </motion.div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left: Values */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-col gap-6"
          >
            {[
              {
                icon: Leaf,
                title: "Roots in Agriculture",
                desc: "Born into a family with deep ties to the land and the farming community, Arjun understands the pulse of rural Bharat.",
              },
              {
                icon: Heart,
                title: "Legacy of Service",
                desc: "26 years of his father's dedicated service to the Ganna Society instilled the values of integrity, patience, and commitment.",
              },
              {
                icon: Users,
                title: "Community First",
                desc: "Every decision Arjun makes is guided by the question: 'How does this serve the community?' A principle inherited from his father.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.15, duration: 0.5 }}
                className="flex gap-4"
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: "rgba(255,140,0,0.12)" }}
                >
                  <item.icon size={20} style={{ color: "#FF8C00" }} />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-[#0A1F44] text-base mb-1">
                    {item.title}
                  </h4>
                  <p className="text-[#6B7280] text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Right: Father's Tribute Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div
              className="relative rounded-3xl p-8 md:p-10 overflow-hidden"
              style={{
                background: "linear-gradient(135deg, #0A1F44 0%, #132d61 100%)",
                borderTop: "4px solid #FF8C00",
              }}
            >
              {/* Decorative pattern */}
              <div
                className="absolute inset-0 opacity-[0.04]"
                style={{
                  backgroundImage:
                    "radial-gradient(circle, white 1px, transparent 1px)",
                  backgroundSize: "20px 20px",
                }}
              />

              {/* Saffron quote mark */}
              <div
                className="font-heading text-8xl leading-none mb-4"
                style={{ color: "#FF8C00", opacity: 0.3 }}
              >
                &ldquo;
              </div>

              <div className="relative">
                <h3 className="font-heading font-bold text-white text-xl md:text-2xl mb-2 leading-snug">
                  Shri Mangheram Singh
                </h3>
                <p className="text-[#FF8C00] text-sm font-semibold mb-4">
                  Father · Agriculturist · Community Servant
                </p>

                <p className="text-white/80 text-base leading-relaxed mb-6">
                  A 26-year tenure (1998–2024) as Director of the Ganna Society
                  stands as testament to a life dedicated to the farming
                  community. This legacy of service flows in Arjun&apos;s veins
                  — shaping every decision, every initiative, every dream.
                </p>

                {/* Divider */}
                <div
                  className="h-px mb-6"
                  style={{
                    background:
                      "linear-gradient(90deg, #FF8C00, transparent)",
                  }}
                />

                {/* Stats */}
                <div className="flex gap-8">
                  <div>
                    <div className="font-heading font-bold text-3xl text-[#C9A961]">
                      26
                    </div>
                    <div className="text-white/60 text-xs mt-1">
                      Years of Service
                    </div>
                  </div>
                  <div>
                    <div className="font-heading font-bold text-3xl text-[#C9A961]">
                      1998
                    </div>
                    <div className="text-white/60 text-xs mt-1">
                      Began Serving
                    </div>
                  </div>
                  <div>
                    <div className="font-heading font-bold text-3xl text-[#C9A961]">
                      2024
                    </div>
                    <div className="text-white/60 text-xs mt-1">
                      Legacy Continues
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
