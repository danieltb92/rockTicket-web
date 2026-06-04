import { motion } from "motion/react";

interface HeroAnimatedProps {
  titleLine1: string;
  titleLine2: string;
  accentWord: string;
  subtitle: string;
  children: React.ReactNode;
}

export default function HeroAnimated({
  titleLine1,
  titleLine2,
  accentWord,
  subtitle,
  children,
}: HeroAnimatedProps) {
  return (
    <section className="hero relative overflow-hidden" aria-labelledby="hero-heading">
      <div
        className="pointer-events-none absolute left-1/2 top-1/3 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-20"
        style={{ background: "radial-gradient(circle, rgba(0,205,200,0.25) 0%, transparent 70%)" }}
        aria-hidden="true"
      />

      <div className="relative z-10 flex h-[350px] flex-col items-center justify-center gap-6 px-5 text-center max-md:h-[400px] max-md:pb-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1
            id="hero-heading"
            className="uppercase z-10 font-squada text-6xl font-bold sm:text-6xl md:text-7xl lg:text-8xl"
          >
            {titleLine1} <br />
            {titleLine2}{" "}
            <span className="glow-accent text-accent">{accentWord}.</span>
          </h1>
        </motion.div>

        <motion.p
          className="z-10 mx-auto w-full sm:w-full text-xl font-normal max-sm:text-base sm:px-5"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          {subtitle}
        </motion.p>
      </div>

      <div id="Image-Bg" className="relative z-0 w-full">
        {children}
      </div>
    </section>
  );
}
