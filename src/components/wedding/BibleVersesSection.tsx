"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const verses = [
  {
    quote: "He has made everything beautiful in its time",
    reference: "Ecclesiastes 3:11",
    subtitle: "A Sacred Blessing",
  },
  {
    quote: "Therefore what God has joined together, let no one separate",
    reference: "Mark 10:9",
    subtitle: "United in Faith & Love",
  },
];

export default function BibleVersesSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section
      id="verses"
      ref={ref}
      className="relative py-24 px-6 overflow-hidden"
      style={{ background: "#faf5ee" }}
    >
      {/* Delicate background ambient highlights */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-96 opacity-30"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(201,168,76,0.25) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="font-montserrat text-xs tracking-widest uppercase text-amber-600 mb-3">
            Holy Scripture &amp; Blessings
          </p>
          <h2
            className="font-playfair italic mb-4"
            style={{ fontSize: "clamp(2.2rem, 4vw, 3.2rem)", color: "#2c2c2c" }}
          >
            Words of Grace
          </h2>
          <div className="ornamental-divider max-w-xs mx-auto">
            <span className="font-cormorant text-amber-500 text-xl">✦</span>
          </div>
        </motion.div>

        {/* Verses Cards */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {verses.map((v, index) => (
            <motion.div
              key={index}
              className="glass-card p-8 md:p-10 rounded-2xl relative flex flex-col justify-between"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.25 }}
              whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(201,168,76,0.15)" }}
            >
              {/* Top corner accents */}
              <div className="absolute top-4 left-4 w-4 h-4 border-t border-l border-amber-400/50" />
              <div className="absolute top-4 right-4 w-4 h-4 border-t border-r border-amber-400/50" />
              <div className="absolute bottom-4 left-4 w-4 h-4 border-b border-l border-amber-400/50" />
              <div className="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-amber-400/50" />

              <div>
                <p className="font-montserrat text-[10px] tracking-widest uppercase text-amber-700/70 mb-4 font-semibold">
                  {v.subtitle}
                </p>
                <span className="font-playfair text-5xl text-amber-400/40 block -mb-4">“</span>
                <p className="font-cormorant italic text-2xl md:text-3xl text-gray-800 leading-relaxed mb-6">
                  {v.quote}
                </p>
              </div>

              <div className="pt-4 border-t border-amber-200/50 flex items-center justify-between">
                <span className="font-montserrat text-xs tracking-wider uppercase font-medium text-amber-800">
                  {v.reference}
                </span>
                <span className="text-amber-500 text-sm">✦</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
