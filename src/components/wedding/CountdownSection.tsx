"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const WEDDING_DATE = new Date("2026-04-11T11:30:00");

function getTimeLeft() {
  const now = new Date();
  const diff = WEDDING_DATE.getTime() - now.getTime();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

function CountdownUnit({ value, label }: { value: number; label: string }) {
  const [prev, setPrev] = useState(value);
  const [flip, setFlip] = useState(false);

  useEffect(() => {
    if (value !== prev) {
      setFlip(true);
      setTimeout(() => { setFlip(false); setPrev(value); }, 300);
    }
  }, [value, prev]);

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-20 md:w-28 h-20 md:h-28 flex items-center justify-center">
        {/* Background card */}
        <div
          className="absolute inset-0 rounded-lg"
          style={{
            background: "rgba(255,255,255,0.1)",
            border: "1px solid rgba(201,168,76,0.3)",
            backdropFilter: "blur(10px)",
          }}
        />
        {/* Number */}
        <motion.span
          key={value}
          className="countdown-number relative z-10"
          initial={flip ? { rotateX: -90, opacity: 0 } : {}}
          animate={{ rotateX: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {String(value).padStart(2, "0")}
        </motion.span>
      </div>
      <p className="font-montserrat text-xs tracking-widest uppercase mt-3" style={{ color: "rgba(255,255,255,0.6)" }}>
        {label}
      </p>
    </div>
  );
}

export default function CountdownSection() {
  const [time, setTime] = useState(getTimeLeft());
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.2 });

  useEffect(() => {
    const interval = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-32 px-6 overflow-hidden"
      style={{ background: "#1a1208" }}
    >
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1478146059778-26028b07395a?w=1920&q=60&auto=format"
          alt="Wedding venue"
          className="w-full h-full object-cover opacity-25"
        />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at center, rgba(201,168,76,0.1) 0%, rgba(10,6,2,0.9) 70%)" }} />
      </div>

      {/* Rotating decorative rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <motion.div
          className="absolute w-150 h-150 rounded-full border border-amber-900/30"
          animate={{ rotate: 360 }}
          transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute w-100 h-100 rounded-full border border-amber-700/20"
          animate={{ rotate: -360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="font-montserrat text-xs tracking-widest uppercase mb-4" style={{ color: "#c9a84c" }}>
            Save The Date
          </p>
          <h2
            className="font-playfair italic text-white mb-4"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
          >
            Counting Down to Forever
          </h2>
          <p className="font-cormorant text-white/60 text-lg mb-12">
            April 11, 2026 · 11:30 AM · Parumala Church, Thiruvalla
          </p>
        </motion.div>

        {/* Countdown */}
        <motion.div
          className="flex items-center justify-center gap-1 md:gap-8 mb-16"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <CountdownUnit value={time.days} label="Days" />
          <div className="countdown-number mb-6 opacity-50">:</div>
          <CountdownUnit value={time.hours} label="Hours" />
          <div className="countdown-number mb-6 opacity-50">:</div>
          <CountdownUnit value={time.minutes} label="Minutes" />
          <div className="countdown-number mb-6 opacity-50">:</div>
          <CountdownUnit value={time.seconds} label="Seconds" />
        </motion.div>

        {/* Date badge */}
        <motion.div
          className="inline-flex items-center gap-4 px-8 py-4 rounded-full"
          style={{ border: "1px solid rgba(201,168,76,0.4)", background: "rgba(201,168,76,0.08)" }}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <span style={{ color: "#c9a84c" }}>✦</span>
          <p className="font-montserrat text-sm text-white/80 tracking-widest uppercase">
            11 · 04 · 2026
          </p>
          <span style={{ color: "#c9a84c" }}>✦</span>
        </motion.div>
      </div>
    </section>
  );
}
