import { Product } from "../types/products";

export const getAllProducts = async (): Promise<Product[]> => {
  try {
    const response = await fetch(
      "https://fakestoreapi.in/api/products?limit=150"
    );

    const products = await response.json();

    return products.products as Product[];
  } catch (error) {
    console.log(error);
    throw new Error("Unknown error happened!");
  }
};
