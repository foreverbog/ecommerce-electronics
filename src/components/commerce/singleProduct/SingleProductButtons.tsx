"use client";

import { useCart } from "@/app/context/CartContext";
import { useWishList } from "@/app/context/WishListContext";

import { Product } from "@/app/types/products";

import { FaHeart, FaRegHeart } from "react-icons/fa";

const SingleProductButtons = ({ product }: { product: Product }) => {
  const { removeFromCart, addToCart, products } = useCart();
  const { removeFromWishList, addToWishList, wishProducts } = useWishList();

  const handleAddToCart = () => {
    addToCart(product);
  };

  const handleRemovefromCart = () => {
    removeFromCart(product.id);
  };

  const isInCart = products?.find(
    (productToBeFound) => productToBeFound.id === product.id
  );

  const handleAddToWishList = () => {
    addToWishList(product);
  };

  const handleRemoveFromWishList = () => {
    removeFromWishList(product.id);
  };

  const isInWishList = wishProducts.find(
    (prodcutToBeFound) => prodcutToBeFound.id === product.id
  );

  //   console.log(products);
  return (
    <div className="card-actions justify-end items-center gap-4 md:mr-12">
      {isInWishList ? (
        <FaHeart
          onClick={handleRemoveFromWishList}
          className="size-6 md:size-8 text-primary cursor-pointer"
        />
      ) : (
        <FaRegHeart
          onClick={handleAddToWishList}
          className="size-6 md:size-8 text-primary cursor-pointer"
        />
      )}
      {!isInCart ? (
        <button
          onClick={handleAddToCart}
          className="btn md:btn-normal btn-primary "
        >
          Add to cart
        </button>
      ) : (
        <button
          onClick={handleRemovefromCart}
          className="btn md:btn-normal btn-primary bg-accent hover:bg-accent-lighter border-accent hover:border-accent-lighter text-accent-foreground"
        >
          Remove from cart
        </button>
      )}
    </div>
  );
};
export default SingleProductButtons;
