"use client";

import { Product } from "@/app/types/products";

import Image from "next/image";

import { useState } from "react";

const ProductImage = ({ product }: { product: Product }) => {
  const [imageSrc, setImageSrc] = useState<string>(
    product.image
      ? product.image
      : "https://fakeimg.pl/200x200/ffffff/5241c3?text=No+Image&font=noto-serif&font_size=24"
  );

  return (
    <Image
      className="w-52 h-52"
      src={imageSrc}
      alt={product.title}
      onError={() =>
        setImageSrc(
          "https://fakeimg.pl/200x200/ffffff/5241c3?text=No+Image&font=noto-serif&font_size=24"
        )
      }
      width={200}
      height={200}
    />
  );
};
export default ProductImage;
