import { motion } from "motion/react";

interface ButtonMotionProps {
  title: string;
  href?: string;
}

export default function ButtonMotion({ title, href = "#" }: ButtonMotionProps) {
  return (
    <motion.a
      className="btn-primary"
      href={href}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      {title}
    </motion.a>
  );
}
