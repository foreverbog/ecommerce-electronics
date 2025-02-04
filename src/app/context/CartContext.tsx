"use client";

import {
  createContext,
  ReactNode,
  useState,
  useContext,
  useEffect,
} from "react";
import { Product } from "../types/products";

interface CartContext {
  products: Product[] | undefined;
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
}

export const CartContext = createContext<CartContext | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [products, setProducts] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    const newProducts = [...products, product];
    localStorage.setItem("cart", JSON.stringify(newProducts));
    setProducts(newProducts);
  };
  const removeFromCart = (productId: number) => {
    const updatedProducts = products.filter(
      (product) => product.id !== productId
    );
    localStorage.setItem("cart", JSON.stringify(updatedProducts));
    setProducts(updatedProducts);
  };

  useEffect(() => {
    const products = localStorage.getItem("cart");
    if (products) {
      setProducts(JSON.parse(products));
    }
  }, []);

  return (
    <CartContext.Provider value={{ products, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
