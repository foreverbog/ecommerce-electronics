import { getCategoryProducts } from "@/app/lib/products";
import ProductsList from "@/components/commerce/product/ProductsList";

const CategoryPage = async ({
  params,
}: {
  params: Promise<{ category: string }>;
}) => {
  //   await new Promise((resolve) => setTimeout(resolve, 3000));

  const category = (await params).category;

  const products = await getCategoryProducts(category);

  //   console.log(products);

  return <ProductsList products={products} />;
};
export default CategoryPage;
