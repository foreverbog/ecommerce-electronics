"use client";

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { Product } from "../types/products";

interface WishListContext {
  wishProducts: Product[];
  addToWishList: (product: Product) => void;
  removeFromWishList: (productId: number) => void;
}

export const WishListContext = createContext<WishListContext | undefined>(
  undefined
);
export const WishListProvider = ({ children }: { children: ReactNode }) => {
  const [wishProducts, setWishProducts] = useState<Product[]>([]);

  const addToWishList = (product: Product) => {
    const newWishList = [...wishProducts, product];
    localStorage.setItem("wishList", JSON.stringify(newWishList));
    setWishProducts(newWishList);
  };

  const removeFromWishList = (productId: number) => {
    const updatedWishList = wishProducts.filter(
      (product) => product.id !== productId
    );
    localStorage.setItem("wishList", JSON.stringify(updatedWishList));
    setWishProducts(updatedWishList);
  };

  useEffect(() => {
    const wishList = localStorage.getItem("wishList");
    if (wishList) {
      setWishProducts(JSON.parse(wishList));
    }
  }, []);

  return (
    <WishListContext.Provider
      value={{ wishProducts, addToWishList, removeFromWishList }}
    >
      {children}
    </WishListContext.Provider>
  );
};

export const useWishList = () => {
  const context = useContext(WishListContext);

  if (!context) {
    throw new Error("useWishList must be used within WishListProvider");
  }

  return context;
};
