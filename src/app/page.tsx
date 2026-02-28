"use client";

import { motion, Variants } from "framer-motion";
import { Anchor, Compass, Navigation, Mail, Ship } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

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

  // Animation variants
  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80, damping: 15 } }
  };

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 selection:bg-blue-200 dark:selection:bg-blue-500/30 selection:text-blue-900 dark:selection:text-white font-sans relative overflow-hidden transition-colors duration-300">
      {/* Solid background completely devoid of gradients */}
      <div className="fixed inset-0 bg-neutral-50 dark:bg-neutral-950 pointer-events-none z-0 transition-colors duration-300" />

      {/* Sticky Top Navigation */}
      <nav className="sticky top-0 z-50 w-full bg-white/80 dark:bg-neutral-950/80 backdrop-blur-md dark:border-b dark:border-neutral-900/50 transition-all duration-300">
        <div className="flex items-center justify-between p-6 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-lg bg-neutral-100 dark:bg-neutral-900 dark:border dark:border-neutral-800 flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:bg-blue-600 dark:group-hover:bg-blue-500 group-hover:text-white transition-all duration-300 dark:group-hover:shadow-neutral-950/50 group-hover:scale-105">
              <Anchor className="w-5 h-5 transition-transform group-hover:-rotate-12" />
            </div>
            <span className="font-semibold tracking-wide text-lg text-neutral-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">Abdulateef.</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-4"
          >
            <a href="#contact" className="text-sm font-medium text-neutral-500 hover:text-blue-600 dark:text-neutral-400 dark:hover:text-blue-400 transition-colors hidden sm:block">
              Contact
            </a>
            <ThemeToggle />
          </motion.div>
        </div>
      </nav>

      <main className="relative z-10 max-w-4xl mx-auto px-6 pt-16 pb-32 flex flex-col gap-24">
        {/* Hero Section */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="flex flex-col gap-8 items-start"
        >
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-neutral-100 dark:bg-neutral-900 dark:border dark:border-neutral-800 mb-6 hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors group cursor-default dark:border-t-white dark:border-t-neutral-800">
            <Ship className="w-4 h-4 text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-white transition-colors" />
            <span className="text-xs font-medium text-neutral-600 dark:text-neutral-300 uppercase tracking-widest group-hover:text-neutral-900 dark:group-hover:text-white transition-colors pt-0.5">Marine Engineer</span>
          </motion.div>

          <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50 mb-6 leading-[1.1] hover:-translate-y-1 transition-transform duration-500">
            Engr. Abdulateef <br />
            <span className="text-blue-600 dark:text-blue-400 inline-block mt-2">
              Aderinto
            </span>
          </motion.h1>

          <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-3xl font-light">
            On a mission to transform ideas into impact within the world of marine engineering. Born into the maritime business, he developed an early passion for ships and the sea, a passion that has since evolved into a career dedicated to advancing maritime innovation.
          </motion.p>
        </motion.section>

        {/* About Details Section */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-10">
          {/* Main content - spans 2 columns */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="md:col-span-2 flex flex-col gap-6 text-neutral-700 dark:text-neutral-300 leading-relaxed"
          >
            <motion.p variants={fadeInUp} className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors duration-300">
              With expertise in <span className="text-blue-600 dark:text-blue-400 font-medium bg-blue-100 dark:bg-blue-400/10 px-1 rounded hover:bg-blue-600 hover:text-white dark:hover:bg-blue-500 dark:hover:text-white transition-colors cursor-default">ship design</span> and <span className="text-blue-600 dark:text-blue-400 font-medium bg-blue-100 dark:bg-blue-400/10 px-1 rounded hover:bg-blue-600 hover:text-white dark:hover:bg-blue-500 dark:hover:text-white transition-colors cursor-default">ship quality control (UTM)</span>, Abdulateef brings energy, vision, and authenticity to every project. Known for his ability to solve complex engineering challenges and inspire collaboration, he thrives in environments where technology meets sustainability and challenges become opportunities.
            </motion.p>
            <motion.p variants={fadeInUp} className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors duration-300">
              Beyond technical expertise, he believes in the power of connection—building networks that inspire, empower, and open doors to new possibilities. Whether leading initiatives, mentoring peers, or sharing insights, Abdulateef consistently demonstrates that success is not just about reaching goals, but about uplifting others along the way.
            </motion.p>
            <motion.p variants={fadeInUp} className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors duration-300">
              Driven by curiosity and resilience, he continues to expand horizons in marine engineering, embracing each new chapter as a chance to create meaningful change and leave a lasting mark on the global maritime industry.
            </motion.p>
          </motion.div>

          {/* Sidebar / Stats / Highlights */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col gap-6"
          >
            <motion.div variants={fadeInUp} className="p-6 rounded-2xl bg-white dark:bg-neutral-900 dark:border dark:border-neutral-800 dark:hover:border-neutral-700 transition-colors dark:shadow-neutral-950/50 group">
              <Compass className="w-6 h-6 text-emerald-500 dark:text-emerald-400 mb-4 group-hover:rotate-45 transition-transform duration-500" />
              <h3 className="text-lg font-medium text-neutral-900 dark:text-white mb-4">Guiding Principles</h3>
              <ul className="flex flex-col gap-3 text-sm text-neutral-600 dark:text-neutral-400">
                <li className="flex items-center gap-3 group/item hover:text-neutral-900 dark:hover:text-white hover:translate-x-1 transition-all cursor-default">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-500 group-hover/item:scale-150 group-hover/item:bg-emerald-500 dark:group-hover/item:bg-emerald-400 transition-all" />
                  <span>Sustainability First</span>
                </li>
                <li className="flex items-center gap-3 group/item hover:text-neutral-900 dark:hover:text-white hover:translate-x-1 transition-all cursor-default">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-500 group-hover/item:scale-150 group-hover/item:bg-blue-600 dark:group-hover/item:bg-blue-400 transition-all" />
                  <span>Collaborative Impact</span>
                </li>
                <li className="flex items-center gap-3 group/item hover:text-neutral-900 dark:hover:text-white hover:translate-x-1 transition-all cursor-default">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-500 group-hover/item:scale-150 group-hover/item:bg-blue-600 dark:group-hover/item:bg-blue-400 transition-all" />
                  <span>Continuous Innovation</span>
                </li>
              </ul>
            </motion.div>

            <motion.div variants={fadeInUp} className="p-6 rounded-2xl bg-white dark:bg-neutral-900 dark:border dark:border-neutral-800 dark:hover:border-neutral-700 transition-colors dark:shadow-neutral-950/50 group">
              <Navigation className="w-6 h-6 text-blue-600 dark:text-blue-400 mb-4 group-hover:-translate-y-1 transition-transform duration-500" />
              <h3 className="text-lg font-medium text-neutral-900 dark:text-white mb-4">Core Expertise</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1.5 text-xs font-medium rounded-md bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-blue-600 dark:hover:bg-blue-500 hover:text-white transition-colors cursor-default dark:border dark:border-transparent">Ship Design</span>
                <span className="px-3 py-1.5 text-xs font-medium rounded-md bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-blue-600 dark:hover:bg-blue-500 hover:text-white transition-colors cursor-default dark:border dark:border-transparent">UTM Quality Control</span>
                <span className="px-3 py-1.5 text-xs font-medium rounded-md bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-blue-600 dark:hover:bg-blue-500 hover:text-white transition-colors cursor-default dark:border dark:border-transparent">Maritime Tech</span>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* Gallery Carousel Section */}
        <section className="w-screen relative left-1/2 -translate-x-1/2 py-12 overflow-hidden group/carousel">
          <div className="flex flex-col gap-6 w-full relative" style={{ maskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)", WebkitMaskImage: "-webkit-linear-gradient(left, transparent, black 15%, black 85%, transparent)" }}>
            <motion.div
              className="flex gap-4 md:gap-6 w-max px-4 hover:[animation-play-state:paused]"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ ease: "linear", duration: 35, repeat: Infinity }}
            >
              {carouselImages.map((src, idx) => (
                <div key={idx} className="w-[260px] h-[340px] md:w-[320px] md:h-[420px] flex-shrink-0 rounded-2xl overflow-hidden bg-neutral-200 dark:bg-neutral-900 dark:border dark:border-neutral-800 relative z-10 dark:shadow-neutral-950/80 group">
                  <img
                    src={src}
                    alt={`Gallery perspective ${idx}`}
                    className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 cursor-grab active:cursor-grabbing object-center"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <motion.section
          id="contact"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="relative overflow-hidden rounded-[2.5rem] bg-blue-50/50 dark:bg-neutral-900 dark:border dark:border-neutral-800 dark:hover:border-blue-900/50 p-10 md:p-16 text-center flex flex-col items-center transition-colors duration-500 dark:shadow-2xl"
        >
          <div className="absolute inset-0 bg-white dark:bg-neutral-900 pointer-events-none -z-10" />

          <motion.h2 variants={fadeInUp} className="relative z-10 text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white mb-6">
            Let's Navigate the <span className="text-blue-600 dark:text-blue-400 inline-block hover:scale-105 transition-transform cursor-default">Future Together</span>
          </motion.h2>

          <motion.p variants={fadeInUp} className="relative z-10 text-neutral-600 dark:text-neutral-400 max-w-2xl text-lg mb-10 leading-relaxed">
            Are you looking to collaborate on innovative ship design, optimize quality control standards, or discuss the future of maritime technology? Let's connect and turn industry challenges into world-class solutions.
          </motion.p>

          <div className="relative z-10 flex flex-col w-full max-w-lg gap-4 mb-2">
            <motion.a
              variants={fadeInUp}
              href="tel:+2348106770972"
              className="flex items-center justify-between p-4 rounded-2xl bg-white dark:bg-neutral-950 dark:border dark:border-neutral-800 text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white dark:hover:border-blue-500/50 hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-all group"
            >
              <div className="flex items-center gap-4">
                <span className="w-12 h-12 rounded-xl bg-neutral-100 dark:bg-neutral-900 dark:border dark:border-neutral-800 flex items-center justify-center group-hover:bg-blue-50 dark:group-hover:bg-blue-500/10 dark:group-hover:border-blue-500/20 group-hover:scale-110 flex-shrink-0 transition-all text-neutral-600 dark:text-neutral-400 group-hover:text-blue-600 dark:group-hover:text-blue-400">📞</span>
                <div className="flex flex-col items-start gap-1">
                  <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-500 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">Primary Phone</span>
                  <span className="font-medium tracking-wide text-lg">+234 810 677 0972</span>
                </div>
              </div>
            </motion.a>

            <motion.a
              variants={fadeInUp}
              href="tel:+2349072517542"
              className="flex items-center justify-between p-4 rounded-2xl bg-white dark:bg-neutral-950 dark:border dark:border-neutral-800 text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white dark:hover:border-blue-500/50 hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-all group"
            >
              <div className="flex items-center gap-4">
                <span className="w-12 h-12 rounded-xl bg-neutral-100 dark:bg-neutral-900 dark:border dark:border-neutral-800 flex items-center justify-center group-hover:bg-blue-50 dark:group-hover:bg-blue-500/10 dark:group-hover:border-blue-500/20 group-hover:scale-110 flex-shrink-0 transition-all text-neutral-600 dark:text-neutral-400 group-hover:text-blue-600 dark:group-hover:text-blue-400">📞</span>
                <div className="flex flex-col items-start gap-1">
                  <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-500 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">Secondary Phone</span>
                  <span className="font-medium tracking-wide text-lg">+234 907 251 7542</span>
                </div>
              </div>
            </motion.a>

            <motion.a
              variants={fadeInUp}
              href="mailto:Agaqualitycontrol@gmail.com"
              className="flex items-center justify-between p-4 rounded-2xl bg-white dark:bg-neutral-950 dark:border dark:border-neutral-800 text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white dark:hover:border-blue-500/50 hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-all group"
            >
              <div className="flex items-center gap-4">
                <span className="w-12 h-12 rounded-xl bg-neutral-100 dark:bg-neutral-900 dark:border dark:border-neutral-800 flex items-center justify-center group-hover:bg-blue-50 dark:group-hover:bg-blue-500/10 dark:group-hover:border-blue-500/20 group-hover:scale-110 flex-shrink-0 transition-all">
                  <Mail className="w-5 h-5 text-neutral-600 dark:text-neutral-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
                </span>
                <div className="flex flex-col items-start gap-1">
                  <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-500 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">Email Address</span>
                  <span className="font-medium tracking-wide text-lg">Agaqualitycontrol@gmail.com</span>
                </div>
              </div>
            </motion.a>
          </div>
        </motion.section>
      </main>

      <footer className="dark:border-t dark:border-neutral-900 text-center py-10 text-neutral-500 text-sm bg-neutral-100 dark:bg-neutral-950 transition-colors duration-300">
        <p className="hover:text-neutral-800 dark:hover:text-neutral-300 transition-colors cursor-default">© {new Date().getFullYear()} Engr. Abdulateef Aderinto. All rights reserved.</p>
      </footer>
    </div>
  );
}
