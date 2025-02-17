import { getSingleProduct } from "@/app/lib/products";

import SingleProductDescription from "@/components/commerce/singleProduct/SingleProductDescription";
import SingleProductHeading from "@/components/commerce/singleProduct/SingleProductHeading";
import SingleProductImage from "@/components/commerce/singleProduct/SingleProductImage";
import { Modal } from "../../../../../../components/commerce/singleProduct/Modal";

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
    <Modal>
      <div className="p-4 font-content ">
        {/* TITLE */}
        <SingleProductHeading product={product} />

        {/* GRID */}
        <div className="md:grid md:grid-cols-2 justify-items-center  mt-4">
          <SingleProductImage product={product} />

          <SingleProductDescription product={product} />
        </div>
      </div>
    </Modal>
  );
};
export default ProductPage;
