"use client";

import { categories } from "@/app/utils/categoriesIcons";
import CategoryLinkCard from "./CategoryLinkCard";

import { motion } from "framer-motion";

import Link from "next/link";
import { useParams } from "next/navigation";

const CategoriesLinks = () => {
  const MotionLink = motion.create(Link);

  const params = useParams();

  return (
    <div className="flex flex-wrap justify-center items-center gap-4 mt-12">
      {categories.map((category, i) => (
        <MotionLink href={`/shop/category/${category.name}`} key={i}>
          <CategoryLinkCard
            category={category}
            categoryName={params.category}
          />
        </MotionLink>
      ))}
    </div>
  );
};
export default CategoriesLinks;
