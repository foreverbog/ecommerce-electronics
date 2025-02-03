import { getAllProducts } from "@/app/lib/products";

import CarouselContainer from "@/components/commerce/Carousels/CarouselContainer";

import ProductsList from "@/components/commerce/product/ProductsList";

const Shop = async ({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string }>;
}) => {
  const products = await getAllProducts();

  const search = (await searchParams).search;

  const category = (await searchParams).category;

  console.log(category);

  if (search) {
    const searchResult = products.filter((product) =>
      product.title.toLowerCase().includes(search.toLowerCase())
    );
    if (searchResult.length === 0) {
      return (
        <div className="h-1/2 flex justify-center items-center font-title text-4xl">
          Sorry, we couldn&#39;t find any results for:
          <span className="italic"> &quot;{search}&quot;</span>
        </div>
      );
    }
    return <ProductsList products={searchResult} />;
  }

  if (category) {
    const categoryProducts = products.filter(
      (product) => product.category.toLowerCase() === category.toLowerCase()
    );

    return <ProductsList products={categoryProducts} />;
  }

  return (
    <div>
      <CarouselContainer products={products} />
      <ProductsList products={products} />
    </div>
  );
};
export default Shop;
