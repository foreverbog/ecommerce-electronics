import { Metadata } from "next";

import { getCategoryProducts } from "@/app/lib/products";
import ProductsList from "@/components/commerce/products/ProductsList";
import { notFound } from "next/navigation";

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> => {
  const category = (await params).category;

  return {
    title: category ? `${category}` : "Shop by category",
    description: category
      ? `Explore our ${category} collection. Find the best products in this category with great deals and fast shipping.`
      : "Find the best products in this category with great deals and fast shipping.",
    keywords: [
      category && category,
      `${category} products`,
      `buy ${category}`,
      "online shopping",
      "ecommerce",
    ],
  };
};

const CategoryPage = async ({
  params,
}: {
  params: Promise<{ category: string }>;
}) => {
  // await new Promise((resolve) => setTimeout(resolve, 3000));

  const category = (await params).category;

  const products = await getCategoryProducts(category);

  if (!products) {
    notFound();
  }

  //   console.log(products);

  return <ProductsList products={products} />;
};
export default CategoryPage;
