"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

// Timeline milestone data (chronological order)
const timelineItems = [
  {
    year: "2007–2008",
    title: "NSUI Worker",
    description:
      "Beginning of public life — early student wing politics with the Indian National Congress. The first spark that ignited a lifelong commitment to public service.",
  },
  {
    year: "2011–2017",
    title: "Secretary, Jat Sabha Bijnor",
    description:
      "Six years of dedicated service to the Jat community in Bijnor district — building trust, resolve, and strong community bonds.",
  },
  {
    year: "2015–2016",
    title: "Zila Adhyaksh (Youth), Jat Arakshan Samiti, Bijnor",
    description:
      "Led the youth wing fighting for community reservation rights, amplifying the voice of an entire generation.",
  },
  {
    year: "2017",
    title: "Media Prabhari, Uttarakhand Jat Mahasabha, Dehradun",
    description:
      "Expanded political footprint into Uttarakhand — managing communications and media outreach at the state level.",
  },
  {
    year: "2018",
    title: "Lead Organizer, Lake Festival Tehri (Govt. of Uttarakhand)",
    description:
      "Successfully executed a major government cultural event, showcasing large-scale event management expertise for the state tourism agenda.",
  },
  {
    year: "2019–Present",
    title: "Pradesh Media Prabhari, Jat Mahasabha",
    description:
      "Ongoing state-level media leadership for the community — shaping narratives and amplifying issues that matter.",
  },
  {
    year: "2021–Present",
    title: "Sachiv, Jat Bhavan Nirman Samiti",
    description:
      "Driving community infrastructure development — turning visions into permanent institutional assets.",
  },
  {
    year: "2021–2024",
    title: "Pradesh Sachiv, Kisan Congress Committee",
    description:
      "Three years of dedicated service to the farming community at the state level — championing rural livelihoods.",
  },
  {
    year: "2022",
    title: "Election Working Committee Member",
    description:
      "Worked closely with Shri Harish Rawat ji (Ex-CM Uttarakhand & Ex-Union Cabinet Minister) during his role as Punjab Prabhari.",
  },
  {
    year: "2024–Present",
    title: "Dehradun Prabhari, Kisan Congress Committee",
    description:
      "Current leadership role driving farmer welfare initiatives and rural empowerment in Uttarakhand.",
  },
  {
    year: "Ongoing",
    title: "National Secretary, Maharaja Suraj Mal Parivar, Rajasthan",
    description:
      "National-level community leadership — representing and serving the Jat community across state boundaries.",
  },
  {
    year: "Ongoing",
    title: "Founder, Maidani Mool",
    description:
      "Grassroots social initiative bridging the gap between urban enterprise and rural communities.",
  },
];

export default function Timeline() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="journey" className="py-24 bg-[#FAF7F2]" ref={ref}>
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-[#FF8C00] font-semibold text-sm tracking-widest uppercase mb-3">
            Political Journey
          </p>
          <h2 className="section-heading saffron-underline saffron-underline-center">
            A Journey of Service
          </h2>
          <p className="section-subheading mt-6 max-w-2xl mx-auto">
            From Student Activist to National Leader — a chronicle of dedication
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Centre line (desktop) */}
          <div
            className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2"
            style={{
              background: "linear-gradient(to bottom, #FF8C00, #C9A961, #FF8C00)",
              opacity: 0.3,
            }}
          />

          <div className="flex flex-col gap-10 md:gap-0">
            {timelineItems.map((item, index) => {
              const isLeft = index % 2 === 0;
              return (
                <TimelineCard
                  key={item.year + item.title}
                  item={item}
                  index={index}
                  isLeft={isLeft}
                  isInView={isInView}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

// Individual Timeline Card
function TimelineCard({
  item,
  index,
  isLeft,
  isInView,
}: {
  item: (typeof timelineItems)[0];
  index: number;
  isLeft: boolean;
  isInView: boolean;
}) {
  return (
    <div
      className={`relative flex flex-col md:flex-row ${
        isLeft ? "md:flex-row" : "md:flex-row-reverse"
      } md:items-center gap-4 md:gap-0`}
    >
      {/* Card */}
      <motion.div
        initial={{ opacity: 0, x: isLeft ? -60 : 60 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, delay: index * 0.08, ease: "easeOut" }}
        className={`md:w-[calc(50%-2.5rem)] ${
          isLeft ? "md:mr-auto" : "md:ml-auto"
        }`}
      >
        <div
          className="bg-white rounded-2xl p-6 shadow-[0_4px_20px_rgba(10,31,68,0.08)] hover:shadow-[0_8px_40px_rgba(10,31,68,0.14)] transition-all duration-300 group"
          style={{
            borderLeft: isLeft ? "none" : "4px solid #FF8C00",
            borderRight: isLeft ? "4px solid #FF8C00" : "none",
          }}
        >
          {/* Year Badge */}
          <span
            className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold tracking-wide mb-3"
            style={{ background: "rgba(255,140,0,0.12)", color: "#FF8C00" }}
          >
            {item.year}
          </span>

          <h3 className="font-heading font-bold text-[#0A1F44] text-lg leading-snug mb-2 group-hover:text-[#FF8C00] transition-colors">
            {item.title}
          </h3>
          <p className="text-[#6B7280] text-sm leading-relaxed">
            {item.description}
          </p>
        </div>
      </motion.div>

      {/* Centre Dot (desktop only) */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.4, delay: index * 0.08 + 0.2 }}
        className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-5 h-5 rounded-full border-4 border-[#FF8C00] bg-white z-10 items-center justify-center"
      >
        <div className="w-2 h-2 rounded-full bg-[#FF8C00]" />
      </motion.div>

      {/* Mobile left accent line */}
      <div
        className="md:hidden absolute left-0 top-0 bottom-0 w-1 rounded-full"
        style={{ background: "linear-gradient(to bottom, #FF8C00, #C9A961)" }}
      />
    </div>
  );
}
