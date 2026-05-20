// ─────────────────────────────────────────────────────────────────────────────
// Arjun Chaudhary — Personal Political Website
// Homepage: assembles all section components
// ─────────────────────────────────────────────────────────────────────────────

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Timeline from "./components/Timeline";
import Ventures from "./components/Ventures";
import Achievements from "./components/Achievements";
import Education from "./components/Education";
import Family from "./components/Family";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      {/* Sticky Navigation */}
      <Navbar />

      {/* Main page sections */}
      <main>
        {/* 1. Hero */}
        <Hero />

        {/* 2. About */}
        <About />

        {/* 3. Political Journey — Timeline */}
        <Timeline />

        {/* 4. Business Ventures */}
        <Ventures />

        {/* 5. Achievements */}
        <Achievements />

        {/* 6. Education */}
        <Education />

        {/* 7. Family & Legacy */}
        <Family />

        {/* 8. Photo Gallery */}
        <Gallery />

        {/* 9. Contact */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
