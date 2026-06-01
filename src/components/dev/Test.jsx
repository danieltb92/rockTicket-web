import { motion } from "motion/react";

export default function App() {
  return (
    <>
      <motion.h1
        className="flex justify-center m-auto text-white h-screen"
        animate={{ y: 300 }}
        transition={{ duration: 1 }}
      >
        Hello, world!
      </motion.h1>
    </>
  );
}
