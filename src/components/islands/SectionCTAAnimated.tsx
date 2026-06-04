import { motion } from "motion/react";
import ButtonMotion from "./ButtonMotion";

interface SectionCTAAnimatedProps {
  imgSrc: string;
  imgWidth: number;
  imgHeight: number;
}

export default function SectionCTAAnimated({
  imgSrc,
  imgWidth,
  imgHeight,
}: SectionCTAAnimatedProps) {
  return (
    <section
      id="cta"
      className="relative flex min-h-[680px] w-full flex-col items-center justify-end overflow-hidden px-6 py-16 md:min-h-[820px] md:px-20 md:py-24"
      style={{ background: "linear-gradient(180deg, #000 0%, #001D1D 40%, #013333 60%, #000 100%)" }}
      aria-labelledby="cta-heading"
    >
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-15"
        style={{ background: "radial-gradient(circle, rgba(0,205,200,0.3) 0%, transparent 70%)" }}
        aria-hidden="true"
      />

      <motion.img
        className="pointer-events-none absolute left-1/2 top-48 w-[min(90%,720px)] max-w-none -translate-x-1/2 object-contain md:top-32 drop-shadow-[0_0_60px_rgba(0,205,200,0.15)]"
        src={imgSrc}
        alt=""
        width={imgWidth}
        height={imgHeight}
        loading="lazy"
        decoding="async"
        aria-hidden="true"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />

      <div className="relative z-10 flex max-w-3xl flex-col items-center text-center">
        <motion.h2
          id="cta-heading"
          className="mb-4 text-4xl font-bold md:text-7xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Empieza a Vivir <br /> el Rock Hoy
        </motion.h2>
        <motion.p
          className="mb-10 max-w-lg text-lg leading-relaxed text-white/60"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.35 }}
        >
          Descubre los mejores conciertos, compra tus entradas en segundos y lleva
          la experiencia del rock en vivo a otro nivel.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <ButtonMotion title="Empieza ahora" href="#funciones" />
        </motion.div>
      </div>
    </section>
  );
}
