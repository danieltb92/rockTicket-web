import { motion } from "motion/react";

interface SectionCarouselAnimatedProps {
  images: { src: string; alt: string }[];
}

export default function SectionCarouselAnimated({ images }: SectionCarouselAnimatedProps) {
  const track = [...images, ...images];

  return (
    <section className="py-16 md:py-24" aria-label="Momentos en conciertos">
      <header className="section-container mb-10 text-center md:mb-14">
        <motion.span
          className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.25em] text-accent/70"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Galería
        </motion.span>
        <motion.h2
          className="text-3xl font-bold md:text-7xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Momentos que Definen <br className="hidden sm:block" /> la Experiencia
        </motion.h2>
      </header>

      <div className="relative h-[400px] w-full overflow-hidden max-md:h-[300px]" role="region" aria-label="Galería de conciertos">
        <div className="flex h-full w-max animate-slide">
          {track.map((image, index) => (
            <img
              key={index}
              src={image.src}
              alt={image.alt}
              loading="lazy"
              decoding="async"
              className="h-full w-auto shrink-0 object-cover"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
