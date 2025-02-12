"use client";

import { Product } from "@/app/types/products";
import Image from "next/image";

import { useState } from "react";

const SingleProductImage = ({ product }: { product: Product }) => {
  const [imageSrc, setImageSrc] = useState<string>(
    product.image
      ? product.image
      : "https://fakeimg.pl/700x700/f0f0f0/5241c3?text=No+Image&font=noto&font_size=50"
  );

  return (
    <Image
      className=""
      src={imageSrc}
      alt={product.title}
      onError={() =>
        setImageSrc(
          "https://fakeimg.pl/700x700/f0f0f0/5241c3?text=No+Image&font=noto&font_size=50"
        )
      }
      width={700}
      height={700}
    />
  );
};
export default SingleProductImage;
