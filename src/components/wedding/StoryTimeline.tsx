"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const events = [
  {
    year: "2019",
    month: "March",
    title: "The First Meeting",
    description:
      "It was a rainy Tuesday afternoon when fate placed us both at the same coffee shop. A spilled latte, a shared umbrella, and suddenly the world felt a little smaller.",
    image: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=600&q=80&auto=format",
    align: "right",
  },
  {
    year: "2020",
    month: "June",
    title: "Our First Date",
    description:
      "A candlelit dinner that turned into a midnight walk along the harbor. We talked for hours and realized we'd found something rare — someone who makes the world make sense.",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=500&q=80&auto=format",
    align: "left",
  },
  {
    year: "2021",
    month: "December",
    title: "Meeting the Families",
    description:
      "Christmas in the mountains with both our families together for the first time. Laughter, snow, and the warmth of knowing this was the beginning of something beautiful.",
    image: "https://images.unsplash.com/photo-1499678329028-101435549a4e?w=500&q=80&auto=format",
    align: "right",
  },
  {
    year: "2023",
    month: "August",
    title: "The Proposal",
    description:
      "Beneath the Tuscan sunset, with golden light pouring over the vineyards, he got down on one knee. The answer was yes before the words were finished.",
    image: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=500&q=80&auto=format",
    align: "left",
  },
  {
    year: "2026",
    month: "September",
    title: "The Wedding Day",
    description:
      "Now we invite you to share in the next chapter of our story. Join us as two lives, two families, and two futures become one.",
    image: "https://images.unsplash.com/photo-1478146059778-26028b07395a?w=500&q=80&auto=format",
    align: "right",
    isLast: true,
  },
];

function TimelineEvent({ event, index }: { event: typeof events[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  const isRight = event.align === "right";

  return (
    <div ref={ref} className="relative flex items-center gap-0 md:gap-8 mb-20 last:mb-0">
      {/* Left column */}
      <motion.div
        className={`hidden md:flex flex-col ${isRight ? "items-end text-right" : "items-start text-left"} flex-1`}
        initial={{ opacity: 0, x: isRight ? 40 : -40 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.1 }}
      >
        {isRight && (
          <TimelineContent event={event} />
        )}
        {!isRight && (
          <TimelineImage event={event} />
        )}
      </motion.div>

      {/* Center dot */}
      <div className="relative flex-shrink-0 z-10">
        <motion.div
          className="w-14 h-14 rounded-full flex items-center justify-center"
          style={{
            background: event.isLast
              ? "linear-gradient(135deg, #c9a84c, #e8c97a)"
              : "white",
            border: "2px solid #c9a84c",
            boxShadow: event.isLast ? "0 0 30px rgba(201,168,76,0.5)" : "none",
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={inView ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.3, type: "spring" }}
        >
          {event.isLast ? (
            <span className="text-white text-xl">♥</span>
          ) : (
            <span style={{ color: "#c9a84c", fontSize: "1.1rem" }}>✦</span>
          )}
        </motion.div>
        <div className="absolute -top-1 -left-1 w-16 h-16 rounded-full border border-amber-300/30 animate-pulse" />
      </div>

      {/* Right column */}
      <motion.div
        className={`hidden md:flex flex-col ${!isRight ? "items-end text-right" : "items-start text-left"} flex-1`}
        initial={{ opacity: 0, x: isRight ? -40 : 40 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.1 }}
      >
        {isRight && (
          <TimelineImage event={event} />
        )}
        {!isRight && (
          <TimelineContent event={event} />
        )}
      </motion.div>

      {/* Mobile layout */}
      <motion.div
        className="md:hidden flex-1 pl-4"
        initial={{ opacity: 0, x: 20 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <TimelineImage event={event} small />
        <TimelineContent event={event} />
      </motion.div>
    </div>
  );
}

function TimelineImage({ event, small }: { event: typeof events[0]; small?: boolean }) {
  return (
    <div className={`relative overflow-hidden rounded-lg shadow-lg group ${small ? "h-40 mb-4" : "h-56"} w-full`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={event.image}
        alt={event.title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
      <div className="absolute top-3 left-3">
        <span className="font-montserrat text-xs text-amber-300 tracking-widest uppercase">
          {event.month} {event.year}
        </span>
      </div>
      {/* Gold corners */}
      <div className="absolute top-2 right-2 w-6 h-6 opacity-60">
        <div className="absolute top-0 right-0 w-6 h-px bg-amber-400" />
        <div className="absolute top-0 right-0 w-px h-6 bg-amber-400" />
      </div>
    </div>
  );
}

function TimelineContent({ event }: { event: typeof events[0] }) {
  return (
    <div className="py-2">
      <p className="font-montserrat text-xs text-amber-600 tracking-widest uppercase mb-1">
        {event.month} · {event.year}
      </p>
      <h3 className="font-playfair italic text-2xl text-gray-800 mb-3">{event.title}</h3>
      <p className="font-cormorant text-gray-600 text-lg leading-relaxed max-w-xs">{event.description}</p>
    </div>
  );
}

export default function StoryTimeline() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.05 });

  return (
    <section id="story" ref={sectionRef} className="py-24 px-6 relative overflow-hidden" style={{ background: "white" }}>
      {/* Background decoration */}
      <div
        className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-5"
        style={{
          backgroundImage: "radial-gradient(circle at 20% 50%, #c9a84c 0%, transparent 50%), radial-gradient(circle at 80% 50%, #c9a84c 0%, transparent 50%)",
        }}
      />

      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="font-montserrat text-xs tracking-widest uppercase text-amber-600 mb-4">
            How It All Began
          </p>
          <h2
            className="font-playfair italic mb-6"
            style={{ fontSize: "clamp(2.5rem, 5vw, 3.5rem)", color: "#2c2c2c" }}
          >
            Our Story
          </h2>
          <div className="ornamental-divider max-w-xs mx-auto">
            <span className="font-cormorant text-amber-500 text-xl">♥</span>
          </div>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line (desktop only) */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px hidden md:block" style={{ background: "linear-gradient(to bottom, transparent, #c9a84c 10%, #c9a84c 90%, transparent)" }} />
          {/* Mobile line */}
          <div className="absolute left-5 top-0 bottom-0 w-px md:hidden" style={{ background: "linear-gradient(to bottom, transparent, #c9a84c 10%, #c9a84c 90%, transparent)" }} />

          {events.map((event, i) => (
            <TimelineEvent key={i} event={event} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
