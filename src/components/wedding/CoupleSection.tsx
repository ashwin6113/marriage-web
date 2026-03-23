'use client';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import image6 from '../../../public/images/WhatsApp Image 2026-03-23 at 22.57.26.jpeg';
import image7 from '../../../public/images/WhatsApp Image 2026-03-23 at 23.00.21.jpeg';

const couple = [
  {
    name: 'Midhun Jacob Alex',
    role: 'The Groom',
    image: image6,
    quote: 'She is the adventure I never knew I needed.',
    detail:
      'S/o. Mrs. Leena Alex & Mr. Chacko Alex Karuvelil House, Nedumpuram P.O, Thiruvalla.',
  },
  {
    name: 'Anju Mariam Sunny',
    role: 'The Bride',
    image: image7,
    quote: 'He makes every ordinary moment extraordinary.',
    detail:
      'D/o. Mrs. Bindu Sunny & Late Mr. Sunny Varghese Malethu Sunny Villa, Thumpamon P.O, Pathanamthitta',
  },
];

export default function CoupleSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section
      ref={sectionRef}
      className="py-24 px-6"
      style={{ background: 'white' }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="font-montserrat text-xs tracking-widest uppercase text-amber-600 mb-4">
            The Happy Couple
          </p>
          <h2
            className="font-playfair italic mb-6"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', color: '#2c2c2c' }}
          >
            Meet the Pair
          </h2>
          <div className="ornamental-divider max-w-xs mx-auto">
            <span className="font-cormorant text-amber-500 text-2xl">♥</span>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {couple.map((person, i) => (
            <PersonCard key={i} person={person} index={i} inView={inView} />
          ))}
        </div>

        {/* Combined quote */}
        <motion.div
          className="mt-16 text-center px-6 py-10 rounded-2xl"
          style={{
            background:
              'linear-gradient(135deg, rgba(201,168,76,0.05) 0%, rgba(201,168,76,0.1) 100%)',
            border: '1px solid rgba(201,168,76,0.15)',
          }}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <span className="text-5xl text-amber-200">&ldquo;</span>
          <p className="font-cormorant italic text-2xl md:text-3xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
            Two souls, one story. A love that grows stronger with every passing
            day.
          </p>
          <span className="text-5xl text-amber-200">&rdquo;</span>
          <p className="font-montserrat text-xs tracking-widest uppercase text-amber-500 mt-3">
            — Midhun & Anju
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function PersonCard({
  person,
  index,
  inView,
}: {
  person: (typeof couple)[0];
  index: number;
  inView: boolean;
}) {
  return (
    <motion.div
      className="text-center group"
      initial={{ opacity: 0, x: index === 0 ? -40 : 40 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, delay: 0.2 + index * 0.15 }}
    >
      {/* Photo with 3D hover */}
      <div className="relative inline-block mb-6">
        <motion.div
          className="relative w-64 h-64 md:w-72 md:h-72 mx-auto overflow-hidden rounded-full"
          whileHover={{
            scale: 1.05,
            boxShadow:
              '0 25px 60px rgba(201,168,76,0.25), 0 0 0 4px rgba(201,168,76,0.3)',
          }}
          transition={{ duration: 0.4 }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={person.image.src}
            alt={person.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20" />
        </motion.div>

        {/* Gold ring */}
        <div
          className="absolute -inset-3 rounded-full pointer-events-none"
          style={{ border: '1px solid rgba(201,168,76,0.3)' }}
        />
        <motion.div
          className="absolute -inset-6 rounded-full pointer-events-none"
          style={{ border: '1px solid rgba(201,168,76,0.15)' }}
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        />

        {/* Role badge */}
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-4 px-5 py-2 rounded-full text-white text-xs font-montserrat tracking-widest uppercase"
          style={{
            background: 'linear-gradient(135deg, #c9a84c, #9a6f2d)',
            whiteSpace: 'nowrap',
          }}
        >
          {person.role}
        </div>
      </div>

      {/* Name */}
      <h3 className="font-playfair italic text-2xl text-gray-800 mt-8 mb-3">
        {person.name}
      </h3>

      {/* Quote */}
      <p className="font-cormorant italic text-amber-600 text-lg mb-3">
        &ldquo;{person.quote}&rdquo;
      </p>

      {/* Detail */}
      <p className="font-cormorant text-gray-500 text-base max-w-xs mx-auto">
        {person.detail}
      </p>
    </motion.div>
  );
}
