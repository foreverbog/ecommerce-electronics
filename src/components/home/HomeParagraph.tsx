"use client";

import { motion } from "framer-motion";

const HomeParagraph = () => {
  return (
    <motion.section
      initial={{ x: "4rem", opacity: 0 }}
      animate={{ x: "0", opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="font-content text-balance text-center mx-2 md:w-4/6 italic mb-12"
    >
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor
      consectetur harum molestiae autem impedit tempore corrupti assumenda,
      delectus accusantium. Nihil possimus ut architecto illum vitae dignissimos
      maiores nulla, error ipsa?
    </motion.section>
  );
};
export default HomeParagraph;
