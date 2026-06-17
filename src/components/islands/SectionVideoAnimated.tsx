import { motion } from "motion/react";

interface SectionVideoAnimatedProps {
  videoSrc: string;
  poster?: string;
}

export default function SectionVideoAnimated({ videoSrc, poster }: SectionVideoAnimatedProps) {
  return (
    <section
      id="video"
      className="relative min-h-[480px] w-full overflow-hidden md:min-h-[600px]"
      aria-labelledby="video-heading"
    >
      <video
        className="h-full min-h-[480px] w-full object-cover md:min-h-[600px]"
        muted
        loop
        playsInline
        preload="none"
        data-lazy-video
        aria-hidden="true"
        poster={poster}
      >
        <source src={videoSrc} type="video/mp4" />
      </video>

      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black"
        aria-hidden="true"
      />

      <div className="absolute inset-0 z-10 flex flex-col items-center justify-end gap-6 px-4 pb-[12%] text-center max-sm:pb-20">
        <motion.h2
          id="video-heading"
          className="glow-accent font-squada text-4xl font-bold md:text-7xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          Siente la Energía <br className="hidden sm:block" />del Escenario.
        </motion.h2>
        <motion.p
          className="max-w-[680px] text-xl leading-relaxed text-white/70"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
        >
          Explora lo mejor del rock en vivo. Desde los festivales más icónicos hasta los conciertos
          underground, RockTicket te conecta con la música que amas.
        </motion.p>
        <motion.div
          className="section-divider mt-2"
          aria-hidden="true"
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        />
      </div>
    </section>
  );
}
