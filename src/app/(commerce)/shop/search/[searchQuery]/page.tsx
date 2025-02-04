import type { Metadata } from "next";

import { getAllProducts } from "@/app/lib/products";
import ProductsList from "@/components/commerce/product/ProductsList";

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ searchQuery: string }>;
}): Promise<Metadata> => {
  const search = (await params).searchQuery;

  return {
    title: search
      ? `${search.charAt(0).toUpperCase() + search.slice(1)}`
      : "Search",
    description: search
      ? `Search results for ${search}. Find the best deals at eCommerce.`
      : "Find the best deals at eCommerce.",
    keywords: [
      search && search,
      "ecommerce search",
      "online shopping",
      "product finder",
      "search results",
    ],
  };
};

export const SearchPage = async ({
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
      <div className="h-1/2 flex justify-center items-center ">
        <div className="font-title text-center text-2xl md:text-4xl">
          Sorry, we couldn&#39;t find any results for:
          <span className="italic"> &quot;{search}&quot;</span>
        </div>
      </div>
    );
  }
  return <ProductsList products={searchResult} />;
};

export default SearchPage;
