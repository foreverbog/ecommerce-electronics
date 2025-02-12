import { getSingleProduct } from "@/app/lib/products";

import SimilarProductsList from "@/components/commerce/singleProduct/SimilarProductsList";
import SingleProductDescription from "@/components/commerce/singleProduct/SingleProductDescription";
import SingleProductHeading from "@/components/commerce/singleProduct/SingleProductHeading";
import SingleProductImage from "@/components/commerce/singleProduct/SingleProductImage";

const ProductPage = async ({
  params,
}: {
  params: Promise<{ productSlug: number | string }>;
}) => {
  const productId = (await params).productSlug;

  // console.log(productId);

  const product = await getSingleProduct(productId);

  // console.log(product);

  return (
    <div className="p-4 font-content">
      {/* TITLE */}
      <SingleProductHeading product={product} />

      {/* GRID */}
      <div className="md:grid md:grid-cols-2 justify-items-center  mt-4">
        <SingleProductImage product={product} />

        <SingleProductDescription product={product} />
      </div>

      <div className="mt-20">
        <h1 className="text-3xl text-primary font-bold">Similar Products:</h1>
        <SimilarProductsList product={product} />
      </div>
    </div>
  );
};
export default ProductPage;
