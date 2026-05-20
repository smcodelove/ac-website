"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, ZoomIn, ChevronLeft, ChevronRight } from "lucide-react";

// Gallery categories and images
const categories = ["All", "Political Events", "Community Service", "Business"];

const galleryImages = [
  {
    src: "/images/arjun-hero.jpg",
    alt: "Arjun Chaudhary felicitating Shri Ompal Singh ji at Jat Mahasabha",
    category: "Political Events",
    caption: "Felicitating Shri Ompal Singh ji — Uttarakhand Jat Mahasabha Pradesh Adhyaksh",
  },
  {
    src: "/images/arjun-jat-mahasabha-group.jpg",
    alt: "Uttarakhand Jat Mahasabha event — Group Photo",
    category: "Political Events",
    caption: "Uttarakhand Jat Mahasabha (Regd.) — Dehradun, 2025",
  },
  {
    src: "/images/arjun-father-birthday.jpg",
    alt: "Birthday celebration at Jat Mahasabha — Shri Ompal Singh ji",
    category: "Community Service",
    caption: "Birthday celebration of Shri Ompal Singh ji — Jat Mahasabha, Dehradun",
  },
  {
    src: "/images/arjun-handshake.jpg",
    alt: "Arjun Chaudhary greeting leaders at Jat Mahasabha",
    category: "Political Events",
    caption: "Jat Mahasabha Leadership Meet — Dehradun, Feb 2026",
  },
  {
    src: "/images/arjun-father-flowers.jpg",
    alt: "Arjun Chaudhary presenting bouquet to Shri Ompal Singh ji at Jat Mahasabha",
    category: "Community Service",
    caption: "Presenting bouquet to Shri Ompal Singh ji — Jat Mahasabha, Feb 2026",
  },
  {
    src: "/images/arjun-office.jpg",
    alt: "Arjun Chaudhary at his business office in Dehradun",
    category: "Business",
    caption: "At the helm — Business Office, Dehradun",
  },
  {
    src: "/images/arjun-about.jpg",
    alt: "Arjun Chaudhary with Shri Ompal Singh ji — Jat Mahasabha Dehradun",
    category: "Political Events",
    caption: "With Shri Ompal Singh ji — Jat Mahasabha, Dehradun",
  },
  {
    src: "/images/arjun-family.jpg",
    alt: "Arjun Chaudhary with family — personal moment",
    category: "Community Service",
    caption: "A personal moment — family first",
  },
];

export default function Gallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered =
    activeCategory === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const prevImage = () =>
    setLightboxIndex((prev) =>
      prev === null ? null : (prev - 1 + filtered.length) % filtered.length
    );
  const nextImage = () =>
    setLightboxIndex((prev) =>
      prev === null ? null : (prev + 1) % filtered.length
    );

  return (
    <section id="gallery" className="py-24 bg-[#FAF7F2]" ref={ref}>
      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-[#FF8C00] font-semibold text-sm tracking-widest uppercase mb-3">
            Gallery
          </p>
          <h2 className="section-heading saffron-underline saffron-underline-center">
            Moments in Public Life
          </h2>
          <p className="section-subheading mt-6 max-w-2xl mx-auto">
            A visual chronicle of service, leadership, and community
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-10"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              id={`gallery-filter-${cat.toLowerCase().replace(/\s+/g, "-")}`}
              onClick={() => setActiveCategory(cat)}
              className="px-5 py-2 rounded-full text-sm font-semibold transition-all duration-250 cursor-pointer"
              style={
                activeCategory === cat
                  ? {
                      background: "linear-gradient(135deg, #FF8C00, #C9A961)",
                      color: "white",
                      boxShadow: "0 4px 16px rgba(255,140,0,0.3)",
                    }
                  : {
                      background: "white",
                      color: "#6B7280",
                      border: "1px solid #e5e7eb",
                    }
              }
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Masonry-style Grid */}
        <motion.div
          layout
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          <AnimatePresence>
            {filtered.map((img, index) => (
              <motion.div
                key={img.src}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className={`relative overflow-hidden rounded-2xl cursor-pointer group ${
                  index === 1 || index === 5 ? "row-span-2" : ""
                }`}
                style={{ minHeight: index === 1 || index === 5 ? 360 : 200 }}
                onClick={() => openLightbox(index)}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
                {/* Hover overlay */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(10,31,68,0.85) 0%, transparent 60%)",
                  }}
                >
                  <div className="flex items-center justify-between">
                    <p className="text-white text-xs font-medium leading-snug">
                      {img.caption}
                    </p>
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center"
                      style={{ background: "rgba(255,140,0,0.2)" }}
                    >
                      <ZoomIn size={14} className="text-white" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Add more photos anytime to /public/images/ and update galleryImages array */}
      </div>

      {/* ── Lightbox ── */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-4xl w-full mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close */}
              <button
                id="lightbox-close"
                onClick={closeLightbox}
                className="absolute -top-12 right-0 text-white/70 hover:text-white transition-colors z-10"
              >
                <X size={28} />
              </button>

              {/* Image */}
              <div className="relative w-full rounded-2xl overflow-hidden"
                style={{ aspectRatio: "16/10" }}>
                <Image
                  src={filtered[lightboxIndex].src}
                  alt={filtered[lightboxIndex].alt}
                  fill
                  className="object-cover"
                  sizes="90vw"
                />
              </div>

              {/* Caption */}
              <p className="text-white/80 text-center mt-4 text-sm">
                {filtered[lightboxIndex].caption}
              </p>

              {/* Prev / Next */}
              <button
                id="lightbox-prev"
                onClick={prevImage}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-14 text-white/70 hover:text-white transition-colors"
              >
                <ChevronLeft size={36} />
              </button>
              <button
                id="lightbox-next"
                onClick={nextImage}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-14 text-white/70 hover:text-white transition-colors"
              >
                <ChevronRight size={36} />
              </button>

              {/* Index indicator */}
              <p className="text-white/50 text-center text-xs mt-2">
                {lightboxIndex + 1} / {filtered.length}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
