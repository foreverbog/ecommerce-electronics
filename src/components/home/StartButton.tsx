"use client";

import Link from "next/link";

import { motion } from "framer-motion";

const StartButton = () => {
  const MotionLink = motion.create(Link);

  return (
    <MotionLink
      initial={{ opacity: 0, visibility: "hidden" }}
      animate={{ opacity: 1, visibility: "visible" }}
      transition={{ duration: 1, delay: 1 }}
      href="/shop"
      className="w-1/2 md:w-1/3 shadow-lg rounded-lg"
    >
      <motion.button
        initial={{ cursor: "default" }}
        animate={{ cursor: "pointer" }}
        transition={{ duration: 1, delay: 1 }}
        className="btn bg-primary text-primary-foreground hover:bg-primary-lighter hover:scale-105 w-full "
      >
        Start Shopping
      </motion.button>
    </MotionLink>
  );
};
export default StartButton;
