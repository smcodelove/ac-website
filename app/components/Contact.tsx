"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  MapPin,
  Mail,
  MessageCircle,
  Globe,
  Radio,
  Share2,
  Link,
  Rss,
  Send,
  User,
  AtSign,
  MessageSquare,
} from "lucide-react";

// ─────────────────────────────────────────────────────────────────────────────
// CONTACT CONFIGURATION — Update these values before deployment
// ─────────────────────────────────────────────────────────────────────────────
const WHATSAPP_NUMBER = "919999999999"; // Replace with real number (country code + number)
const EMAIL_ADDRESS = "contact@arjunchaudhary.in"; // Replace with real email
const LOCATION_1 = "Dehradun, Uttarakhand";
const LOCATION_2 = "Bijnor, Uttar Pradesh";

// Social media links — replace with real profile URLs
const socialLinks = [
  { icon: Globe, label: "Facebook", href: "https://facebook.com/arjunchaudhary" },
  { icon: Radio, label: "Twitter/X", href: "https://twitter.com/arjunchaudhary" },
  { icon: Share2, label: "Instagram", href: "https://instagram.com/arjunchaudhary" },
  { icon: Link, label: "LinkedIn", href: "https://linkedin.com/in/arjunchaudhary" },
  { icon: Rss, label: "YouTube", href: "https://youtube.com/@arjunchaudhary" },
];
// ─────────────────────────────────────────────────────────────────────────────

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  // Form state
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  /**
   * OPTION A (DEFAULT — Zero cost, no signup needed):
   * On submit, opens WhatsApp with a pre-filled message.
   *
   * OPTION B (Formspree — free tier, requires signup at formspree.io):
   * Replace the handleSubmit function with:
   *   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   * and replace YOUR_FORM_ID with the ID from your free Formspree account.
   */
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = encodeURIComponent(
      `Hi Arjun ji!\n\nName: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="py-24 bg-[#FAF7F2]" ref={ref}>
      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-[#FF8C00] font-semibold text-sm tracking-widest uppercase mb-3">
            Contact
          </p>
          <h2 className="section-heading saffron-underline saffron-underline-center">
            Let&apos;s Connect
          </h2>
          <p className="section-subheading mt-6 max-w-2xl mx-auto">
            For meetings, collaborations, media queries, or community concerns
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* ── Left: Contact Info ── */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-col gap-8"
          >
            {/* Contact Details */}
            <div
              className="bg-[#0A1F44] rounded-2xl p-8"
              style={{ borderTop: "4px solid #FF8C00" }}
            >
              <h3 className="font-heading font-bold text-white text-xl mb-6">
                Reach Out Directly
              </h3>

              <div className="flex flex-col gap-5">
                {/* Locations */}
                <div className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: "rgba(255,140,0,0.2)" }}
                  >
                    <MapPin size={18} style={{ color: "#FF8C00" }} />
                  </div>
                  <div>
                    <p className="text-white/60 text-xs mb-1 uppercase tracking-wider">
                      Location
                    </p>
                    <p className="text-white font-medium">{LOCATION_1}</p>
                    <p className="text-white/70 text-sm">{LOCATION_2}</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: "rgba(255,140,0,0.2)" }}
                  >
                    <Mail size={18} style={{ color: "#FF8C00" }} />
                  </div>
                  <div>
                    <p className="text-white/60 text-xs mb-1 uppercase tracking-wider">
                      Email
                    </p>
                    <a
                      href={`mailto:${EMAIL_ADDRESS}`}
                      className="text-white font-medium hover:text-[#FF8C00] transition-colors"
                    >
                      {EMAIL_ADDRESS}
                    </a>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: "rgba(255,140,0,0.2)" }}
                  >
                    <MessageCircle size={18} style={{ color: "#FF8C00" }} />
                  </div>
                  <div>
                    <p className="text-white/60 text-xs mb-1 uppercase tracking-wider">
                      WhatsApp
                    </p>
                    <a
                      href={`https://wa.me/${WHATSAPP_NUMBER}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white font-medium hover:text-[#FF8C00] transition-colors"
                    >
                      Message on WhatsApp
                    </a>
                  </div>
                </div>
              </div>

              {/* Social icons */}
              <div className="mt-8 pt-6 border-t border-white/10">
                <p className="text-white/60 text-xs uppercase tracking-wider mb-4">
                  Follow on Social Media
                </p>
                <div className="flex gap-3 flex-wrap">
                  {socialLinks.map(({ icon: Icon, label, href }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      title={label}
                      className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-250 hover:scale-110"
                      style={{ background: "rgba(255,255,255,0.08)" }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.background = "rgba(255,140,0,0.25)";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.08)";
                      }}
                    >
                      <Icon size={18} className="text-white" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Response time note */}
            <div
              className="rounded-xl p-4 flex items-center gap-3"
              style={{
                background: "rgba(255,140,0,0.08)",
                border: "1px solid rgba(255,140,0,0.2)",
              }}
            >
              <MessageCircle size={20} style={{ color: "#FF8C00" }} />
              <p className="text-[#0A1F44] text-sm">
                <span className="font-semibold">Quick Response:</span> Messages
                on WhatsApp typically receive a response within a few hours.
              </p>
            </div>
          </motion.div>

          {/* ── Right: Contact Form ── */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className="bg-white rounded-2xl p-8 shadow-[0_4px_24px_rgba(10,31,68,0.08)]">
              <h3 className="font-heading font-bold text-[#0A1F44] text-xl mb-6">
                Send a Message
              </h3>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                    style={{
                      background: "rgba(255,140,0,0.12)",
                    }}
                  >
                    <Send size={28} style={{ color: "#FF8C00" }} />
                  </div>
                  <h4 className="font-heading font-bold text-[#0A1F44] text-lg mb-2">
                    Message Sent!
                  </h4>
                  <p className="text-[#6B7280] text-sm">
                    WhatsApp opened with your message. Thank you for reaching out!
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-[#1A1A1A] text-sm font-medium mb-2"
                    >
                      Your Name
                    </label>
                    <div className="relative">
                      <User
                        size={16}
                        className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#6B7280]"
                      />
                      <input
                        id="contact-name"
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="Ramesh Kumar"
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#FF8C00] focus:ring-2 focus:ring-[#FF8C00]/20 transition-all bg-[#FAF7F2]"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-[#1A1A1A] text-sm font-medium mb-2"
                    >
                      Email Address
                    </label>
                    <div className="relative">
                      <AtSign
                        size={16}
                        className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#6B7280]"
                      />
                      <input
                        id="contact-email"
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        placeholder="ramesh@example.com"
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#FF8C00] focus:ring-2 focus:ring-[#FF8C00]/20 transition-all bg-[#FAF7F2]"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-[#1A1A1A] text-sm font-medium mb-2"
                    >
                      Your Message
                    </label>
                    <div className="relative">
                      <MessageSquare
                        size={16}
                        className="absolute left-3.5 top-3.5 text-[#6B7280]"
                      />
                      <textarea
                        id="contact-message"
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        placeholder="Write your message here..."
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#FF8C00] focus:ring-2 focus:ring-[#FF8C00]/20 transition-all bg-[#FAF7F2] resize-none"
                      />
                    </div>
                  </div>

                  {/* Submit */}
                  <button
                    id="contact-submit"
                    type="submit"
                    className="btn-primary w-full justify-center"
                  >
                    Send via WhatsApp
                    <MessageCircle size={16} />
                  </button>

                  {/* Formspree note */}
                  <p className="text-[#6B7280] text-xs text-center">
                    {/* To switch to email form: sign up free at formspree.io and replace action in the form */}
                    Clicking &quot;Send&quot; will open WhatsApp with your message pre-filled.
                    Alternatively, email directly at{" "}
                    <a
                      href={`mailto:${EMAIL_ADDRESS}`}
                      className="text-[#FF8C00] hover:underline"
                    >
                      {EMAIL_ADDRESS}
                    </a>
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
