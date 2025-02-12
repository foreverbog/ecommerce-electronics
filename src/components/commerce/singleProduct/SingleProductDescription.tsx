import { Product } from "@/app/types/products";
import SingleProductButtons from "./SingleProductButtons";

const SingleProductDescription = ({ product }: { product: Product }) => {
  const calculateInitialPrice = (
    reducedPrice: number,
    discount: number
  ): number => {
    return Math.round(reducedPrice / (1 - discount / 100));
  };

  return (
    <div className="p-4 flex flex-col justify-evenly ">
      <div className="flex items-center gap-4 self-end text-3xl md:text-6xl font-content md:mr-12">
        {product.discount && (
          <div className="line-through opacity-50 text-xl md:text-3xl">
            {calculateInitialPrice(product.price, product.discount)}€
          </div>
        )}
        <div className="self-end text-primary font-bold">{product.price}€</div>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="font-bold text-xl md:text-2xl ">About:</h2>
        <p className="text-balance -mt-2 text-sm md:text-base mr-12">
          {product.description}
        </p>
        <p className="font-bold text-sm md:text-base">
          Brand:
          <span className="font-normal"> {product.brand}</span>
        </p>
        <p className="font-bold text-sm md:text-base">
          Model:
          <span className="font-normal"> {product.model}</span>
        </p>
        <p className="font-bold text-sm md:text-base mb-6 md:mb-auto">
          Color:
          <span className="font-normal"> {product.color}</span>
        </p>
      </div>

      <SingleProductButtons product={product} />
    </div>
  );
};
export default SingleProductDescription;
