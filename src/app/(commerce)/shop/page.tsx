import { getAllProducts } from "@/app/lib/products";

import CarouselContainer from "@/components/commerce/Carousels/CarouselContainer";
import ProductsList from "@/components/commerce/product/ProductsList";

const Shop = async () => {
  const products = await getAllProducts();

  return (
    <div>
      <CarouselContainer products={products} />
      <ProductsList products={products} />
    </div>
  );
};
export default Shop;
