"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const venues = [
  {
    type: "Ceremony",
    time: "4:00 PM",
    place: "St. Peter and St. Pauls Church",
    address: "St. Peter and St. Pauls Church, Parumala",
    description:
      "A beautiful church known for its stunning architecture and serene atmosphere.",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=700&q=80&auto=format",
    icon: "⛪",
    link:"https://maps.app.goo.gl/pGkN5EFQ94Rcy7JJ8"
  },
  {
    type: "Reception",
    time: "7:00 PM",
    place: "St.Gregorios Auditorium",
    address: "St.Gregorios Auditorium, Parumala",
    description:
      "Dine beneath a canopy of stars in the auditorium's elegant setting. Enjoy a delightful dinner, fine wines, dancing, and the magic of the night.",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=700&q=80&auto=format",
    icon: "🌿",
    link:"https://maps.app.goo.gl/pGkN5EFQ94Rcy7JJ8"
  },
];

function VenueCard({ venue, index, inView }: { venue: typeof venues[0]; index: number; inView: boolean }) {
  return (
    <motion.div
      className="group relative overflow-hidden rounded-2xl shadow-xl"
      initial={{ opacity: 0, x: index === 0 ? -40 : 40 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      whileHover={{ y: -8, boxShadow: "0 30px 60px rgba(0,0,0,0.15)" }}
    >
      {/* Gold top accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 z-10" style={{ background: "linear-gradient(to right, #c9a84c, #e8c97a, #c9a84c)" }} />

      {/* Image */}
      <div className="h-64 overflow-hidden relative">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={venue.image}
          alt={venue.place}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
        <div className="absolute bottom-4 left-4">
          <span className="font-montserrat text-xs text-amber-300 tracking-widest uppercase">{venue.type}</span>
        </div>
      </div>

      {/* Content */}
      <div className="bg-white p-6">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-2xl">{venue.icon}</span>
          <p className="font-playfair italic text-xl text-gray-800">{venue.place}</p>
        </div>
        <div className="flex items-center gap-2 mb-3">
          <span className="font-montserrat text-sm font-medium text-amber-700">{venue.time}</span>
          <span className="text-gray-300">·</span>
          <span className="font-montserrat text-xs text-gray-500">{venue.address}</span>
        </div>
        <p className="font-cormorant text-gray-600 text-lg leading-relaxed">{venue.description}</p>
      </div>
    </motion.div>
  );
}

export default function CeremonySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.1 });

  return (
    <section id="ceremony" ref={sectionRef} className="py-24 px-6" style={{ background: "#fdf8f0" }}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="font-montserrat text-xs tracking-widest uppercase text-amber-600 mb-4">
            Venue Details
          </p>
          <h2
            className="font-playfair italic mb-6"
            style={{ fontSize: "clamp(2.5rem, 5vw, 3.5rem)", color: "#2c2c2c" }}
          >
            The Celebration
          </h2>
          <div className="ornamental-divider max-w-xs mx-auto">
            <span className="font-cormorant text-amber-500 text-xl">✦</span>
          </div>
        </motion.div>

        {/* Venue cards */}
        <div className="grid md:grid-cols-2 gap-10 mb-20">
          {venues.map((venue, i) => (
            <VenueCard key={i} venue={venue} index={i} inView={inView} />
          ))}
        </div>

        {/* Decorative map banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative overflow-hidden rounded-2xl"
          style={{ height: "300px" }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1467664631004-58beab1ece0d?w=1200&q=70&auto=format"
            alt="Tuscany landscape"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(253,248,240,0.95) 0%, rgba(253,248,240,0.7) 40%, rgba(253,248,240,0.3) 100%)" }} />
          <div className="absolute inset-0 flex items-center px-10 md:px-16">
            <div>
              <p className="font-montserrat text-xs tracking-widest uppercase text-amber-600 mb-2">Location</p>
              <h3 className="font-playfair italic text-3xl text-gray-800 mb-2">St. Peter and St. Pauls Church</h3>
              <p className="font-cormorant text-gray-600 text-lg mb-4 max-w-sm">
                Located in the heart of Parumala, this historic church is known for its stunning architecture and serene atmosphere.
              </p>
              <a
                href="https://maps.app.goo.gl/pGkN5EFQ94Rcy7JJ8"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold inline-block"
              >
                Get Directions
              </a>
            </div>
          </div>
        </motion.div>

        {/* Schedule */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="font-playfair italic text-2xl text-gray-800 mb-10">Day Schedule</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { time: "3:30 PM", event: "Guest Arrival" },
              { time: "4:00 PM", event: "Ceremony Begins" },
              { time: "5:00 PM", event: "Cocktail Hour" },
              { time: "7:00 PM", event: "Dinner Reception" },
              { time: "9:00 PM", event: "Dancing & Music" },
              { time: "12:00 AM", event: "Farewell" },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="glass-card px-5 py-3 rounded-full"
                whileHover={{ scale: 1.05, y: -2 }}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.7 + i * 0.1 }}
              >
                <span className="font-montserrat text-xs text-amber-600">{item.time}</span>
                <span className="mx-2 text-gray-300">·</span>
                <span className="font-cormorant text-gray-700">{item.event}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
