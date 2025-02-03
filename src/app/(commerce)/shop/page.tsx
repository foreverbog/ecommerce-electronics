import { getAllProducts } from "@/app/lib/products";
import { Product } from "@/app/types/products";
import CarouselContainer from "@/components/commerce/Carousels/CarouselContainer";
import HotSaleCarousel from "@/components/commerce/Carousels/HotSaleCarousel";
import PopularCarousel from "@/components/commerce/Carousels/PopularCarousel";
import ProductCard from "@/components/commerce/product/ProductCard";
import Link from "next/link";

const Shop = async ({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) => {
  // const response = await fetch(
  //   "https://fakestoreapi.in/api/products?limit=150"
  // );

  const products = await getAllProducts();

  // console.log(products);

  // console.log(await searchParams);
  // const responseProducts = await response.json();

  // const category = (await searchParams).category;

  // console.log(category);

  // if (category) {
  //   const response = await fetch(
  //     `https://fakestoreapi.in/api/products/category?type=${category.toLowerCase()}`
  //   );

  //   console.log(await response.json());

  //   return <div>{category}</div>;
  // }

  // const products = responseProducts.products;

  // // console.log(products);

  // const search = (await searchParams).search;
  // console.log(search);

  // if (search) {
  //   await new Promise((resolve) => setTimeout(resolve, 300));

  //   const filteredProducts = products.filter((product) =>
  //     product.title.toLowerCase().includes(search.toLowerCase())
  //   );

  //   console.log(filteredProducts);
  //   if (filteredProducts.length > 0) {
  //     return <div>Hey</div>;
  //   } else {
  //     return (
  //       <>
  //         <div>Not found</div>
  //         <Link href={"/shop"}>Shop</Link>
  //       </>
  //     );
  //   }
  // }

  return (
    <div>
      <CarouselContainer products={products} />
      <div className="flex flex-wrap justify-center gap-6">
        {products.map((product: Product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};
export default Shop;
