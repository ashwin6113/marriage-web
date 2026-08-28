"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const venueDetails = {
  name: "Yahir Auditorium",
  address: "TK Rd, Vallamkulam East, Thiruvalla, Eraviperoor, Kerala",
  date: "September 28, 2026",
  description:
    "We cordially invite you to celebrate our holy matrimony at Yahir Auditorium. Join us as we exchange our vows and begin our new journey together.",
  image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&q=80&auto=format",
  googleMapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Yahir+Auditorium+Vallamkulam+East+Thiruvalla+Kerala",
};

export default function CeremonySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section id="ceremony" ref={sectionRef} className="py-24 px-6" style={{ background: "#fdf8f0" }}>
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        {/* <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="font-montserrat text-xs tracking-widest uppercase text-amber-600 mb-3">
            Wedding Celebration &amp; Venue
          </p>
          <h2
            className="font-playfair italic mb-4"
            style={{ fontSize: "clamp(2.5rem, 5vw, 3.5rem)", color: "#2c2c2c" }}
          >
            The Ceremony &amp; Reception
          </h2>
          <div className="ornamental-divider max-w-xs mx-auto">
            <span className="font-cormorant text-amber-500 text-xl">✦</span>
          </div>
        </motion.div> */}

        {/* Main Venue Feature Card */}
        <motion.div
          className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-amber-200/60 grid md:grid-cols-12"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9 }}
        >
          {/* Image Column */}
          <div className="md:col-span-6 relative min-h-80 md:min-h-full overflow-hidden group">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={venueDetails.image}
              alt={venueDetails.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent md:bg-linear-to-r md:from-transparent md:to-black/30" />
            <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full border border-amber-300/40">
              <span className="font-montserrat text-xs font-semibold text-amber-800 tracking-wider uppercase">
                {venueDetails.date}
              </span>
            </div>
          </div>

          {/* Details Column */}
          <div className="md:col-span-6 p-8 md:p-12 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-amber-600 text-xl">⛪</span>
                <span className="font-montserrat text-xs tracking-widest text-amber-600 uppercase font-semibold">
                  Auditorium &amp; Hall
                </span>
              </div>

              <h3 className="font-playfair italic text-3xl md:text-4xl text-gray-900 mb-4">
                {venueDetails.name}
              </h3>

              <div className="flex items-start gap-3 mb-6 p-4 rounded-xl bg-amber-50/60 border border-amber-200/50">
                <span className="text-amber-700 text-lg mt-0.5">📍</span>
                <div>
                  <p className="font-montserrat text-xs font-semibold text-amber-900 uppercase tracking-wider mb-1">
                    Address
                  </p>
                  <p className="font-cormorant text-gray-700 text-lg leading-snug">
                    {venueDetails.address}
                  </p>
                </div>
              </div>

              <p className="font-cormorant text-gray-600 text-xl leading-relaxed mb-8">
                {venueDetails.description}
              </p>
            </div>

            <div>
              <a
                href={venueDetails.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold w-full text-center inline-block shadow-lg hover:shadow-amber-500/25"
              >
                Open Google Maps Directions
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
