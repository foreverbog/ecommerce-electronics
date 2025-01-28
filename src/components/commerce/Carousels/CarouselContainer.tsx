import { Product } from "@/app/types/products";

import HotSaleCarousel from "./HotSaleCarousel";
import PopularCarousel from "./PopularCarousel";

const CarouselContainer = ({ products }: { products: Product[] }) => {
  return (
    <div className="gap-4 flex flex-wrap my-6 mx-12 justify-evenly">
      <HotSaleCarousel products={products} />
      <PopularCarousel products={products} />
    </div>
  );
};
export default CarouselContainer;
