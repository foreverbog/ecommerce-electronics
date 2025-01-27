"use client";

import { categories } from "@/app/utils/categoriesIcons";
import CategoryLinkCard from "./CategoryLinkCard";

import { motion } from "framer-motion";

import Link from "next/link";
import { usePathname } from "next/navigation";

const CategoriesLinks = () => {
  const MotionLink = motion.create(Link);

  const path = usePathname();

  return (
    <div className="flex flex-wrap justify-center items-center gap-4 mt-12">
      {categories.map((category, i) => (
        <MotionLink href={`/shop?category=${category.name}`} key={i}>
          <CategoryLinkCard category={category} path={path} />
        </MotionLink>
      ))}
    </div>
  );
};
export default CategoriesLinks;
