import { Product } from "@/app/types/products";

const SingleProductHeading = ({ product }: { product: Product }) => {
  return (
    <>
      <h1 className="font-title text-2xl md:text-4xl ">{product.title}</h1>
      <div className="flex gap-1 mt-2">
        <div className="badge badge-outline md:p-4">{product.category}</div>
        {product.popular && (
          <div className="badge badge-primary text-primary-foreground md:p-4">
            popular
          </div>
        )}
        {product.onSale && (
          <div className="badge badge-primary border-secondary bg-secondary text-secondary-foreground md:p-4">
            on sale
          </div>
        )}
      </div>
    </>
  );
};
export default SingleProductHeading;
