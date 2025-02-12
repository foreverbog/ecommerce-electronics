import { getCategoryProducts } from "@/app/lib/products";
import { Product } from "@/app/types/products";
import SimilarProductCard from "./SimilarProductCard";

const SimilarProductsList = async ({ product }: { product: Product }) => {
  const products = await getCategoryProducts(product.category);

  const filterProducts = products.filter((p) => p.id !== product.id);

  const similarProducts: Product[] = Array.from(
    { length: 4 },
    () => filterProducts[Math.floor(Math.random() * filterProducts.length)]
  );

  return (
    <div className="flex flex-wrap gap-4 justify-center ">
      {similarProducts.map((product) => (
        <SimilarProductCard
          key={product.id + Math.random()}
          product={product}
        />
      ))}
    </div>
  );
};
export default SimilarProductsList;
