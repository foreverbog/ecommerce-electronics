"use client";

import { Product } from "@/app/types/products";

import { motion } from "framer-motion";

import Link from "next/link";
import ProductImage from "../products/ProductImage";

const SimilarProductCard = ({ product }: { product: Product }) => {
  const calculateInitialPrice = (
    reducedPrice: number,
    discount: number
  ): number => {
    return Math.round(reducedPrice / (1 - discount / 100));
  };

  return (
    <motion.div
      initial={{ scale: 0.7 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.2 }}
      whileHover={{ scale: 1.05 }}
      className="card card-compact bg-base-100 w-72 md:w-80 shadow-xl font-content border border-primary hover:cursor-pointer"
      onClick={() => console.log(product)}
    >
      <Link href={`/shop/${product.id}`}>
        <figure>
          <ProductImage product={product} />
        </figure>
      </Link>
      <div className="card-body">
        <h2 className="card-title truncate font-title">{product.title}!</h2>
        <div className="flex gap-1">
          <div className="badge badge-outline">{product.category}</div>
          {product.popular && (
            <div className="badge badge-primary text-primary-foreground">
              popular
            </div>
          )}
          {product.onSale && (
            <div className="badge badge-primary border-secondary bg-secondary text-secondary-foreground">
              on sale
            </div>
          )}
        </div>
        <div className="flex gap-2 self-end text-2xl font-content">
          {product.discount && (
            <div className="line-through opacity-50">
              {calculateInitialPrice(product.price, product.discount)}€
            </div>
          )}
          <div className="self-end">{product.price}€</div>
        </div>
      </div>
    </motion.div>
  );
};
export default SimilarProductCard;
