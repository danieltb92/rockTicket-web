import { motion } from "motion/react";

interface FeatureCardAnimatedProps {
  title: string;
  paragraph: string;
  imageSrc: string;
  bgColor: string;
  direction: "left" | "right" | "top";
  index: number;
}

export default function FeatureCardAnimated({
  title,
  paragraph,
  imageSrc,
  bgColor,
  direction,
  index,
}: FeatureCardAnimatedProps) {
  const isRight = direction === "right";

  return (
    <motion.article
      className={`flex ${
        isRight ? "md:flex-row-reverse" : "md:flex-row"
      } flex-col w-full max-w-6xl mx-auto items-center justify-between py-12 md:py-16 px-4 sm:px-6 md:px-8 gap-10 md:gap-16 lg:gap-24 overflow-visible`}
      initial={{ opacity: 0, x: isRight ? 60 : -60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, delay: index * 0.15, ease: "easeOut" }}
    >
      <div className="flex flex-col justify-center items-center md:items-start text-center md:text-left w-full md:w-1/2 max-w-[480px] gap-4 md:gap-6">
        <motion.h3
          className="font-sourceSans font-bold text-4xl sm:text-5xl leading-tight text-white tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {title}
        </motion.h3>
        <motion.p
          className="font-normal text-base md:text-lg leading-relaxed text-neutral-300 max-w-[420px]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.35 }}
        >
          {paragraph}
        </motion.p>
      </div>

      <motion.div
        className="relative w-full md:w-1/2 max-w-[480px] md:max-w-[540px] aspect-[4/5] sm:aspect-[4/4.5] md:aspect-[4/5] flex items-end justify-center select-none group overflow-visible"
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <div
          className="absolute inset-x-4 top-[12%] bottom-4 rounded-[32px] md:rounded-[40px] shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]"
          style={{ background: bgColor }}
        />
        <motion.img
          src={imageSrc}
          alt={title}
          className="relative z-10 w-[70%] sm:w-[65%] max-h-[105%] object-contain"
          whileHover={{ y: -12 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        />
      </motion.div>
    </motion.article>
  );
}
