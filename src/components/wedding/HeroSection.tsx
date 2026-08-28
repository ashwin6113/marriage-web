"use client";
import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

// Unsplash free-to-use wedding photos
const HERO_BG =
  "https://images.unsplash.com/photo-1519741497674-611481863552?w=1920&q=80&auto=format";
const HERO_COUPLE =
  "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&q=80&auto=format";

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "60%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative h-screen overflow-hidden flex items-center justify-center"
    >
      {/* Parallax Background */}
      <motion.div className="absolute inset-0 scale-110" style={{ y: bgY }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={HERO_BG}
          alt="Wedding backdrop"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20" />
      </motion.div>

      {/* Decorative Rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div
          className="absolute w-175 h-175 rounded-full border border-white/10"
          style={{ opacity }}
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute w-125 h-125 rounded-full border border-white/8"
          style={{ opacity }}
          animate={{ rotate: -360 }}
          transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Particle Sparkles */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-amber-300/60"
          style={{
            left: `${15 + Math.random() * 70}%`,
            top: `${15 + Math.random() * 70}%`,
          }}
          animate={{
            scale: [0, 1, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 2 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 3,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Main Content */}
      <motion.div
        className="relative z-10 text-center px-6 max-w-4xl mx-auto"
        style={{ y: textY, opacity }}
      >
        {/* Pre-title */}
        <motion.p
          initial={{ opacity: 0, letterSpacing: "0.3em" }}
          animate={{ opacity: 1, letterSpacing: "0.5em" }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="font-montserrat text-[16px] text-amber-300/90 uppercase mb-6"
          style={{ letterSpacing: "0.5em" }}
        >
          "He has made everything beautiful in its time" Ecclesiastes 3:11
        </motion.p>
        <motion.p
          initial={{ opacity: 0, letterSpacing: "0.3em" }}
          animate={{ opacity: 1, letterSpacing: "0.5em" }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="font-montserrat text-2xl text-amber-300/90 uppercase mb-6 font-bold"
          style={{ letterSpacing: "0.5em" }}
        >
          You are Invited
        </motion.p>
        {/* Decorative line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex items-center justify-center gap-4 mb-8"
        >
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-amber-400/60" />
          <div className="w-2 h-2 rounded-full bg-amber-400/60 animate-pulse" />
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-amber-400/60" />
        </motion.div>

        {/* Names */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.2,
            delay: 0.8,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          className="font-playfair flex flex-col md:flex-row items-center justify-center text-white mb-4"
          style={{
            fontSize: "clamp(2.8rem, 8vw, 5.5rem)",
            lineHeight: 1.1,
            fontStyle: "italic",
          }}
        >
          <span className="gold-shimmer" style={{ fontStyle: "italic" }}>
            Apphia
          </span>
          <span
            className="text-white/60 mx-4 font-light text-3xl md:text-5xl"
            style={{ fontStyle: "normal" }}
          >
            &amp;
          </span>
          <span className="gold-shimmer" style={{ fontStyle: "italic" }}>
            Hemanth
          </span>
        </motion.h1>

        {/* Full Bride & Groom Names Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="font-cormorant text-amber-200/90 text-lg md:text-xl tracking-wider mb-6"
        >
          Apphia Mariam Mathew &amp; Hemanth R S
        </motion.p>

        {/* Date */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          className="font-cormorant text-white/80 text-xl md:text-2xl tracking-widest mb-10"
        >
          September 28, 2026 <br />
          <span className="text-amber-300/90 text-lg">
            Yahir Auditorium, Vallamkulam East, Thiruvalla
          </span>
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#ceremony"
            onClick={(e) => {
              e.preventDefault();
              document
                .querySelector("#ceremony")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="btn-gold"
          >
            Venue Details
          </a>
          {/* <a
            href="#verses"
            onClick={(e) => {
              e.preventDefault();
              document
                .querySelector("#verses")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="btn-outline-gold border-white text-white hover:bg-white hover:text-gray-800"
          >
            Scripture Verses
          </a> */}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        style={{ opacity }}
      >
        <p className="font-montserrat text-white/50 text-xs tracking-widest uppercase">
          Scroll
        </p>
        <motion.div
          className="w-px h-12 bg-gradient-to-b from-white/50 to-transparent"
          animate={{ scaleY: [0, 1, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          style={{ originY: 0 }}
        />
      </motion.div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#fdf8f0] to-transparent" />
    </section>
  );
}
