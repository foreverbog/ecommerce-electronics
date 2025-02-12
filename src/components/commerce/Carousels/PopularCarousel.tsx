"use client";

import { Product } from "@/app/types/products";

import Image from "next/image";
import Link from "next/link";

import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const PopularCarousel = ({ products }: { products: Product[] }) => {
  const popularProducts = products.filter(
    (product: Product) => product.popular === true
  );

  // console.log(popularProducts);

  return (
    <div className="w-full md:w-1/4">
      <h1 className="text-2xl md:text-4xl font-title text-primary font-bold mb-2">
        Popular:
      </h1>
      <Swiper
        className="mySwiper w-full border border-primary rounded-md customSwiper bg-base-100 shadow-lg"
        centeredSlides={true}
        autoplay={{ delay: 2500, pauseOnMouseEnter: true }}
        modules={[Autoplay, Navigation]}
        navigation={true}
        spaceBetween={30}
      >
        {popularProducts.map((product) => (
          <SwiperSlide
            key={product.id}
            className="relative  p-4 rounded-md  h-full hover:cursor-pointer"
          >
            <Link href={`/shop/${product.id}`}>
              <h2 className="truncate font-title text-xl md:text-2xl">
                {product.title}
              </h2>

              <div className="w-full flex justify-center items-center">
                <Image
                  className="h-32 w-32 md:h-40 md:w-40 justify-self-center"
                  src={product.image}
                  alt={product.title}
                  width={250}
                  height={250}
                />
              </div>

              <p className="truncate font-content">{product.description}</p>
              <div className="flex justify-end gap-2">
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
export default PopularCarousel;
