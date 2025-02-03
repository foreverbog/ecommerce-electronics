import { Product } from "@/app/types/products";

import { FaHeart, FaRegHeart } from "react-icons/fa";

import ProductImage from "./ProductImage";

const ProductCard = async ({ product }: { product: Product }) => {
  const calculateInitialPrice = (
    reducedPrice: number,
    discount: number
  ): number => {
    return Math.round(reducedPrice / (1 - discount / 100));
  };

  return (
    <div className="card card-compact bg-base-100 w-72 md:w-80 shadow-xl font-content">
      <figure>
        <ProductImage product={product} />
      </figure>
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
            <div className="badge badge-primary border-delete bg-delete text-delete-foreground">
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
        <div className="card-actions justify-end items-center gap-4">
          <FaRegHeart className="size-6 text-primary" />

          <button className="btn btn-primary">Add to cart</button>
        </div>
      </div>
    </div>
  );
};
export default ProductCard;
