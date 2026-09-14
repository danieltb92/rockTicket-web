import { useState } from "react";
import { motion } from "motion/react";

interface SectionCarouselAnimatedProps {
  images: { src: string; alt: string }[];
}

export default function SectionCarouselAnimated({ images }: SectionCarouselAnimatedProps) {
  const [paused, setPaused] = useState(false);
  const track = [...images, ...images, ...images];

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
          className="font-squada text-4xl font-bold md:text-5xl lg:text-6xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Momentos que Definen <br className="hidden sm:block" /> la Experiencia
        </motion.h2>
      </header>

      <div className="relative h-[400px] w-full overflow-hidden max-md:h-[300px]" role="region" aria-label="Galería de conciertos">
        <div
          className="flex h-full w-max"
          style={{ animation: paused ? "none" : "slide 30s linear infinite" }}
        >
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

        <button
          type="button"
          onClick={() => setPaused(!paused)}
          className="absolute bottom-4 right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/60 text-white/70 backdrop-blur-sm transition-colors hover:border-accent/40 hover:text-accent max-md:bottom-3 max-md:right-3 max-md:h-8 max-md:w-8"
          aria-label={paused ? "Reanudar galería" : "Pausar galería"}
        >
          {paused ? (
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M8 5v14l11-7z" />
            </svg>
          ) : (
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M6 4h4v16H6zm8 0h4v16h-4z" />
            </svg>
          )}
        </button>
      </div>
    </section>
  );
}
