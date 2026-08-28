"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

export default function CelebrateBannerSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="py-16 px-6 bg-[#fdf8f0] overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="relative rounded-2xl overflow-hidden p-2 sm:p-4 border border-amber-300/40 bg-white/80 shadow-2xl backdrop-blur-md"
        >
          {/* Outer Gold Accent Frame */}
          <div className="relative rounded-xl overflow-hidden group">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/celebrate_banner.jpg"
              alt="We'd love for you to be there to celebrate with us!"
              className="w-full h-auto object-cover rounded-lg shadow-inner transition-transform duration-700 group-hover:scale-[1.02]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
