"use client";

import { Product } from "@/app/types/products";
import ProductCard from "./ProductCard";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

const ProductsList = ({ products }: { products: Product[] }) => {
  const [currentPage, setCurrentPage] = useState<number>(1);

  const searchQuery = useSearchParams();

  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery]);

  const itemPerPage: number = 20;
  const totalPages: number = Math.ceil(products.length / itemPerPage);

  const startIndex = (currentPage - 1) * itemPerPage;
  const endIndex = startIndex + itemPerPage;

  const paginatedProducts = products.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <div className="flex flex-wrap justify-center gap-6 items-center my-12">
        {paginatedProducts.map((product: Product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* PAGINATION */}
      <div className="join w-full justify-center my-8">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page, i) => (
          <button
            onClick={() => handlePageChange(page)}
            key={i}
            className={`join-item btn ${
              currentPage === page
                ? "bg-primary text-primary-foreground hover:bg-primary-lighter"
                : "bg-base-100"
            }`}
          >
            {page}
          </button>
        ))}
      </div>
    </>
  );
};
export default ProductsList;
