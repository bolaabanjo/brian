"use client";

import { motion } from "framer-motion";
import { Anchor, Compass, Navigation, Mail, Ship } from "lucide-react";

export default function Portfolio() {
  const galleryImages = [
    "PHOTO-2026-01-30-00-06-41.jpg",
    "PHOTO-2026-01-30-00-06-42 4.jpg",
    "PHOTO-2026-01-30-00-06-41 2.jpg",
    "PHOTO-2026-01-30-00-06-43.jpg",
    "PHOTO-2026-01-30-00-06-42.jpg",
    "PHOTO-2026-01-30-00-06-42 2.jpg",
    "PHOTO-2026-01-30-00-06-42 3.jpg",
  ].map(img => `/${img}`);

  const carouselImages = [...galleryImages, ...galleryImages];

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 selection:bg-blue-500/30 font-sans relative overflow-hidden">
      {/* Solid background */}
      <div className="fixed inset-0 bg-neutral-950 pointer-events-none z-0" />

      <nav className="relative z-10 flex items-center justify-between p-6 max-w-5xl mx-auto">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-blue-400">
            <Anchor className="w-5 h-5" />
          </div>
          <span className="font-semibold tracking-wide text-lg text-white">Abdulateef.</span>
        </div>

        <div className="flex items-center gap-4">
          <button className="text-sm font-medium text-neutral-400 hover:text-white transition-colors">
            Contact
          </button>
        </div>
      </nav>

      <main className="relative z-10 max-w-4xl mx-auto px-6 pt-20 pb-32 flex flex-col gap-24">
        {/* Hero Section */}
        <section className="flex flex-col gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 mb-6">
              <Ship className="w-4 h-4 text-blue-400" />
              <span className="text-xs font-medium text-neutral-300 uppercase tracking-widest">Marine Engineer</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-neutral-50 mb-6 leading-[1.1]">
              Engr. Abdulateef <br />
              <span className="text-blue-400">
                Aderinto
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-neutral-400 leading-relaxed max-w-3xl font-light">
              On a mission to transform ideas into impact within the world of marine engineering. Born into the maritime business, he developed an early passion for ships and the sea, a passion that has since evolved into a career dedicated to advancing maritime innovation.
            </p>
          </motion.div>
        </section>

        {/* About Details Section */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Main content - spans 2 columns */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="md:col-span-2 flex flex-col gap-6 text-neutral-300 leading-relaxed"
          >
            <p>
              With expertise in <span className="text-white font-medium">ship design</span> and <span className="text-white font-medium">ship quality control (UTM)</span>, Abdulateef brings energy, vision, and authenticity to every project. Known for his ability to solve complex engineering challenges and inspire collaboration, he thrives in environments where technology meets sustainability and challenges become opportunities.
            </p>
            <p>
              Beyond technical expertise, he believes in the power of connection—building networks that inspire, empower, and open doors to new possibilities. Whether leading initiatives, mentoring peers, or sharing insights, Abdulateef consistently demonstrates that success is not just about reaching goals, but about uplifting others along the way.
            </p>
            <p>
              Driven by curiosity and resilience, he continues to expand horizons in marine engineering, embracing each new chapter as a chance to create meaningful change and leave a lasting mark on the global maritime industry.
            </p>
          </motion.div>

          {/* Sidebar / Stats / Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-col gap-6"
          >
            <div className="p-6 rounded-2xl bg-neutral-900/50 border border-neutral-800/80 backdrop-blur-sm">
              <Compass className="w-6 h-6 text-emerald-400 mb-4" />
              <h3 className="text-lg font-medium text-white mb-2">Guiding Principles</h3>
              <ul className="flex flex-col gap-2 text-sm text-neutral-400">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500" /> Sustainability First
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500" /> Collaborative Impact
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500" /> Continuous Innovation
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-neutral-900/50 border border-neutral-800/80 backdrop-blur-sm">
              <Navigation className="w-6 h-6 text-blue-400 mb-4" />
              <h3 className="text-lg font-medium text-white mb-2">Core Expertise</h3>
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="px-3 py-1 text-xs rounded-full bg-white/5 border border-white/10 text-neutral-300">Ship Design</span>
                <span className="px-3 py-1 text-xs rounded-full bg-white/5 border border-white/10 text-neutral-300">UTM Quality Control</span>
                <span className="px-3 py-1 text-xs rounded-full bg-white/5 border border-white/10 text-neutral-300">Maritime Tech</span>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Gallery Carousel Section */}
        <section className="w-screen relative left-1/2 -translate-x-1/2 py-8 overflow-hidden">
          <div className="flex flex-col gap-6 w-full relative" style={{ maskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)", WebkitMaskImage: "-webkit-linear-gradient(left, transparent, black 15%, black 85%, transparent)" }}>
            <motion.div
              className="flex gap-4 md:gap-6 w-max px-4"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ ease: "linear", duration: 30, repeat: Infinity }}
            >
              {carouselImages.map((src, idx) => (
                <div key={idx} className="w-[260px] h-[340px] md:w-[320px] md:h-[420px] flex-shrink-0 rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-800 relative z-10">
                  <img src={src} alt="Gallery image" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500 cursor-pointer object-center" />
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden rounded-3xl bg-neutral-900 border border-neutral-800 p-8 md:p-12 text-center flex flex-col items-center"
        >
          <div className="absolute inset-0 bg-neutral-900 pointer-events-none" />
          <h2 className="relative z-10 text-3xl md:text-4xl font-bold text-white mb-6">
            Let's Navigate the <span className="text-blue-400">Future Together</span>
          </h2>
          <p className="relative z-10 text-neutral-400 max-w-2xl text-lg mb-8 leading-relaxed">
            Are you looking to collaborate on innovative ship design, optimize quality control standards, or discuss the future of maritime technology? Let's connect and turn industry challenges into world-class solutions.
          </p>
          <button className="relative z-10 px-8 py-4 rounded-full bg-white text-black font-semibold flex items-center gap-2 hover:bg-neutral-200 hover:scale-105 transition-all">
            <Mail className="w-5 h-5" />
            Get in Touch
          </button>
        </motion.section>
      </main>

      <footer className="border-t border-neutral-900 text-center py-8 text-neutral-500 text-sm">
        <p>© {new Date().getFullYear()} Engr. Abdulateef Aderinto. All rights reserved.</p>
      </footer>
    </div>
  );
}
