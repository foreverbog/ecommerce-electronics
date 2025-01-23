"use client";

import { motion } from "framer-motion";

const HomeTitle = () => {
  return (
    <>
      <motion.h1
        initial={{ x: "-4rem", opacity: 0 }}
        animate={{ x: "0", opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="font-title text-6xl md:text-8xl text-transparent bg-clip-text bg-primary bg-gradient-to-r from-primary from-30% via-secondary via-90% to-accent to-90% font-extrabold mb-6"
      >
        eCommerce
      </motion.h1>
    </>
  );
};
export default HomeTitle;
