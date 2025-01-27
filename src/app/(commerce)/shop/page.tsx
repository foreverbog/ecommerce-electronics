import ProductCard from "@/components/commerce/product/ProductCard";
import Link from "next/link";

const Shop = async ({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) => {
  const response = await fetch(
    "https://fakestoreapi.in/api/products?limit=150"
  );

  console.log(await searchParams);
  const responseProducts = await response.json();

  const category = (await searchParams).category;

  console.log(category);

  if (category) {
    const response = await fetch(
      `https://fakestoreapi.in/api/products/category?type=${category.toLowerCase()}`
    );

    console.log(await response.json());

    return <div>{category}</div>;
  }

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
      return <div>Hey</div>;
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
    <div>
      hey
      <ProductCard />
      {/* {products.map((product: any) => (
        <p key={product.id}>{product.title}</p>
      ))} */}
    </div>
  );
};
export default Shop;
