"use client";
import { motion } from "framer-motion";

export default function WeddingFooter() {
  return (
    <footer
      className="relative py-20 px-6 text-center overflow-hidden"
      style={{ background: "#0f0a04" }}
    >
      {/* Decorative background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center bottom, rgba(201,168,76,0.08) 0%, transparent 60%)",
        }}
      />

      {/* Floating rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <motion.div
          className="absolute w-80 h-80 rounded-full border border-amber-900/20"
          animate={{ rotate: 360 }}
          transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="relative z-10">
        {/* Names */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <p className="font-playfair italic text-white/40 text-sm mb-3">With all our love,</p>
          <h2
            className="font-playfair italic gold-shimmer"
            style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)" }}
          >
            Midhun & Anju
          </h2>
        </motion.div>

        {/* Date */}
        <motion.p
          className="font-montserrat text-xs tracking-widest uppercase text-white/30 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          April 11, 2026 · Saturday, Parumala
        </motion.p>

        {/* Divider */}
        <div className="flex items-center justify-center gap-4 mb-10">
          <div className="h-px w-20" style={{ background: "linear-gradient(to right, transparent, rgba(201,168,76,0.4))" }} />
          <span style={{ color: "rgba(201,168,76,0.6)" }}>♥</span>
          <div className="h-px w-20" style={{ background: "linear-gradient(to left, transparent, rgba(201,168,76,0.4))" }} />
        </div>

        {/* Nav links */}
        <div className="flex flex-wrap items-center justify-center gap-6 mb-10">
          {["Our Story", "Gallery", "Ceremony"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(" ", "-")}`}
              onClick={(e) => {
                e.preventDefault();
                const id = item === "Our Story" ? "#story" : `#${item.toLowerCase()}`;
                document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
              }}
              className="font-montserrat text-xs tracking-widest uppercase transition-colors"
              style={{ color: "rgba(255,255,255,0.3)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#c9a84c")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.3)")}
            >
              {item}
            </a>
          ))}
        </div>

        {/* Hashtag */}
        <motion.div
          className="inline-flex items-center gap-3 px-6 py-3 rounded-full mb-10"
          style={{ border: "1px solid rgba(201,168,76,0.2)", background: "rgba(201,168,76,0.05)" }}
          whileHover={{ scale: 1.05, borderColor: "rgba(201,168,76,0.4)" }}
        >
          <span style={{ color: "#c9a84c" }}>✦</span>
          <span className="font-montserrat text-xs tracking-widest text-white/50 uppercase">
            #MidhunAndAnju2026
          </span>
          <span style={{ color: "#c9a84c" }}>✦</span>
        </motion.div>

        <p className="font-cormorant text-white/20 text-sm">
          Made with ♥ for the most beautiful day of our lives
        </p>
      </div>
    </footer>
  );
}
