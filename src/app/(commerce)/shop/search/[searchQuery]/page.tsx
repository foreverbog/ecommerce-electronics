import { getAllProducts } from "@/app/lib/products";
import ProductsList from "@/components/commerce/product/ProductsList";

const SearchPage = async ({
  params,
}: {
  params: Promise<{ searchQuery: string }>;
}) => {
  const search = (await params).searchQuery;
  console.log(search);

  const products = await getAllProducts();
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
};

export default SearchPage;
