'use client';
import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import image1 from '../../../public/images/WhatsApp Image 2026-03-20 at 22.17.01.jpeg';
import image3 from '../../../public/images/WhatsApp Image 2026-03-20 at 22.26.57.jpeg';
import image4 from '../../../public/images/WhatsApp Image 2026-03-20 at 22.27.05.jpeg';
import image2 from '../../../public/images/WhatsApp Image 2026-03-20 at 22.29.04.jpeg';

const photos = [
  {
    id: 1,
    src: image1,
    thumb: image1,
    alt: 'Wedding ceremony',
    caption: 'Save the Date',
    span: 'row-span-2',
  },
  {
    id: 2,
    src: image2,
    thumb: image2,
    alt: 'Wedding rings',
    caption: 'Save the Date',
    span: '',
  },
  {
    id: 3,
    src: image3,
    thumb: image3,
    alt: 'Wedding bouquet',
    caption: 'Save the Date',
    span: '',
  },
  {
    id: 4,
    src: image4,
    thumb: image4,
    alt: 'Couple portrait',
    caption: 'Save the Date',
    span: 'col-span-2',
  },
];

function Photo3DCard({
  photo,
  index,
  onClick,
}: {
  photo: (typeof photos)[0];
  index: number;
  onClick: () => void;
}) {
  const [hovered, setHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);
  const inView = useInView(cardRef, { once: true, amount: 0.3 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  return (
    <motion.div
      ref={cardRef}
      className={`relative cursor-pointer overflow-hidden rounded-lg ${photo.span}`}
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      style={{
        transformStyle: 'preserve-3d',
        transform: hovered
          ? `perspective(1000px) rotateX(${-mousePos.y * 12}deg) rotateY(${mousePos.x * 12}deg) scale(1.05)`
          : 'perspective(1000px) rotateX(0) rotateY(0) scale(1)',
        transition: 'transform 0.15s ease',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => {
        setHovered(false);
        setMousePos({ x: 0, y: 0 });
      }}
      onMouseMove={handleMouseMove}
      onClick={onClick}
    >
      {/* Image */}
      <div className="w-full h-full min-h-[200px] overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={typeof photo.thumb === 'string' ? photo.thumb : photo.thumb.src}
          alt={photo.alt}
          className="w-full h-full object-cover transition-transform duration-700"
          style={{ transform: hovered ? 'scale(1.1)' : 'scale(1)' }}
        />
      </div>

      {/* Overlay */}
      <motion.div
        className="absolute inset-0 flex flex-col justify-end p-4"
        style={{
          background:
            'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 60%)',
          opacity: hovered ? 1 : 0,
          transition: 'opacity 0.3s ease',
        }}
      >
        <p className="font-cormorant text-white text-lg italic">
          {photo.caption}
        </p>
        <div className="w-8 h-px bg-amber-400 mt-2" />
      </motion.div>

      {/* Shine effect */}
      {hovered && (
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(circle at ${(mousePos.x + 0.5) * 100}% ${(mousePos.y + 0.5) * 100}%, rgba(255,255,255,0.15) 0%, transparent 60%)`,
          }}
        />
      )}

      {/* Gold corner accent */}
      <div className="absolute top-3 right-3 w-6 h-6 pointer-events-none opacity-70">
        <div className="absolute top-0 right-0 w-6 h-px bg-amber-400" />
        <div className="absolute top-0 right-0 w-px h-6 bg-amber-400" />
      </div>
    </motion.div>
  );
}

export default function PhotoGallery() {
  const [lightbox, setLightbox] = useState<(typeof photos)[0] | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.1 });

  return (
    <section
      id="gallery"
      ref={sectionRef}
      className="py-24 px-6"
      style={{ background: '#fdf8f0' }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="font-montserrat text-xs tracking-widest uppercase text-amber-600 mb-4">
            Captured Moments
          </p>
          <h2
            className="font-playfair italic mb-6"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', color: '#2c2c2c' }}
          >
            Our Gallery
          </h2>
          <div className="ornamental-divider max-w-xs mx-auto">
            <span className="font-cormorant text-amber-500 text-xl">✦</span>
          </div>
        </motion.div>

        {/* Masonry-style Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[200px]">
          {photos.map((photo, i) => (
            <Photo3DCard
              key={photo.id}
              photo={photo}
              index={i}
              onClick={() => setLightbox(photo)}
            />
          ))}
        </div>

        {/* Lightbox */}
        <AnimatePresence>
          {lightbox && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setLightbox(null)}
            >
              {/* Backdrop */}
              <div className="absolute inset-0 bg-black/92 backdrop-blur-md" />

              {/* Image */}
              <motion.div
                className="relative z-10 max-w-4xl w-full"
                initial={{ scale: 0.8, opacity: 0, y: 40 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.8, opacity: 0, y: 40 }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Gold frame */}
                <div
                  className="p-1 rounded-lg"
                  style={{
                    background:
                      'linear-gradient(135deg, #c9a84c, #e8c97a, #9a6f2d)',
                  }}
                >
                  <div className="rounded-lg overflow-hidden bg-black">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={typeof lightbox.src === 'string' ? lightbox.src : lightbox.src.src}
                      alt={lightbox.alt}
                      className="w-full object-contain max-h-[75vh]"
                    />
                  </div>
                </div>
                <p className="text-center font-cormorant text-white/80 text-xl italic mt-4">
                  {lightbox.caption}
                </p>
              </motion.div>

              {/* Close button */}
              <button
                className="absolute top-6 right-6 z-20 w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
                onClick={() => setLightbox(null)}
              >
                ✕
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
