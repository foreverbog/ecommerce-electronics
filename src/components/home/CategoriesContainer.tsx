"use client";

import { categories } from "@/app/utils/categoriesIcons";
import CategoryCard from "./CategoryCard";

import { motion } from "framer-motion";

const CategoriesContainer = () => {
  return (
    <div className="flex flex-wrap justify-center items-center gap-4 mb-24">
      {categories.map((category, i) => (
        <motion.div
          initial={{ y: i % 2 === 0 ? "-2rem" : "2rem", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 * (i * 0.3) }}
          key={i}
        >
          <CategoryCard category={category} />
        </motion.div>
      ))}
    </div>
  );
};
export default CategoriesContainer;
