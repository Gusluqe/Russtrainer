'use client';

import { motion } from 'framer-motion';

const photos = [
  { src: '/foto3.png', alt: 'Russ en entrenamiento' },
  { src: '/foto4.png', alt: 'Seguimiento personalizado' },
  { src: '/foto5.png', alt: 'Proceso de transformación' },
  { src: '/foto6.png', alt: 'Tu proceso' },
];

export default function PhotoGallery() {
  return (
    <section className="relative py-20 overflow-hidden bg-cream-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <span className="text-rose font-medium uppercase tracking-widest text-sm">
            Galería
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-charcoal mt-3">
            El proceso <span className="text-gradient">en imágenes</span>
          </h2>
        </motion.div>

        <div className="columns-2 md:columns-4 gap-4">
          {photos.map((photo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="break-inside-avoid mb-4 group relative rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_32px_rgba(232,164,164,0.20)] transition-all duration-300"
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-rose/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
