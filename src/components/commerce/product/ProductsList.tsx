import { Product } from "@/app/types/products";
import ProductCard from "./ProductCard";

const ProductsList = ({ products }: { products: Product[] }) => {
  return products.map((product) => <ProductCard key={product.id} />);
};
export default ProductsList;
