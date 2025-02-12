"use client";

import { Product } from "@/app/types/products";

import Image from "next/image";
import Link from "next/link";

import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const HotSaleCarousel = ({ products }: { products: Product[] }) => {
  const onSaleProducts = products.filter(
    (product: Product) =>
      product.onSale === true &&
      typeof product.discount === "number" &&
      product.discount > 10
  );

  // console.log(onSaleProducts);

  const calculateInitialPrice = (
    reducedPrice: number,
    discount: number
  ): number => {
    return Math.round(reducedPrice / (1 - discount / 100));
  };

  return (
    <div className="w-full md:w-1/4">
      <h1 className="text-2xl md:text-4xl font-title text-primary font-bold mb-2">
        Hot Sales:
      </h1>
      <Swiper
        className="mySwiper w-full  border border-primary rounded-md customSwiper bg-base-100 shadow-lg"
        centeredSlides={true}
        autoplay={{ delay: 2500, pauseOnMouseEnter: true }}
        modules={[Autoplay, Navigation]}
        navigation={true}
        spaceBetween={30}
      >
        {onSaleProducts.map((product) => (
          <SwiperSlide
            key={product.id}
            className="relative p-4 rounded-md  h-full hover:cursor-pointer"
          >
            <Link href={`/shop/${product.id}`}>
              <h2 className="truncate font-title text-xl md:text-2xl">
                {product.title}
              </h2>
              <div className="relative w-full md:w-40 justify-self-center flex justify-center items-center">
                <div className="absolute left-[70%] md:-right-8 top-1/4 font-content font-bold text-2xl bg-delete p-1 md:p-3 rounded-full rotate-45">
                  {product.discount}%
                </div>
                <Image
                  className="h-32 w-32 md:h-40 md:w-40"
                  src={product.image}
                  alt={product.title}
                  width={250}
                  height={250}
                />
              </div>
              <p className="truncate font-content">{product.description}</p>
              <div className="flex justify-end gap-2">
                <p className="font-title  text-xl md:text-2xl text-right opacity-50 line-through">
                  {product.discount &&
                    calculateInitialPrice(product.price, product.discount)}
                  €
                </p>
                <p className="font-title text-xl md:text-2xl text-right">
                  {product.price}€
                </p>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
export default HotSaleCarousel;
