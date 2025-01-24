import Link from "next/link";
import { Suspense } from "react";

const Shop = async ({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) => {
  await new Promise((resolve) => setTimeout(resolve, 300));

  const response = await fetch("https://fakestoreapi.in/api/products");

  const responseProducts = await response.json();

  const products = responseProducts.products;

  // console.log(products);

  const search = (await searchParams).search;
  console.log(search);

  if (search) {
    await new Promise((resolve) => setTimeout(resolve, 300));

    const filteredProducts = products.filter((product) =>
      product.title.toLowerCase().includes(search.toLowerCase())
    );

    console.log(filteredProducts);
    if (filteredProducts.length > 0) {
      return (
        <Suspense fallback={<div>Loading..</div>}>
          <div>Hey</div>
        </Suspense>
      );
    } else {
      return (
        <>
          <div>Not found</div>
          <Link href={"/shop"}>Shop</Link>
        </>
      );
    }
  }

  return (
    <Suspense fallback={<div>Loading</div>}>
      <div>
        {products.map((product: any) => (
          <p key={product.id}>{product.title}</p>
        ))}
      </div>
    </Suspense>
  );
};
export default Shop;
