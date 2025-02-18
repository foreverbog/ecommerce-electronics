"use client";

import Link from "next/link";

import { FaShoppingCart, FaHeart } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";

import CartBadge from "../cart/CartBadge";
import WishBadge from "../wishList/WishBadge";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(window.scrollY > 0);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        className={`${
          isScrolling
            ? "bg-primary opacity-50  fixed top-0 right-0 left-0 z-50 hover:opacity-100 "
            : "bg-primary"
        }  text-primary-foreground flex justify-between items-center p-4 transition-all duration-300 ease-in-out`}
      >
        <Link href="/shop">
          <TbBrandNextjs className="size-6" />
        </Link>

        <div className="flex gap-12 mr-8">
          <Link href="/cart" className="relative p-1.5">
            <FaHeart className="size-7" />
            <WishBadge />
          </Link>

          <Link href="/cart" className="relative p-1.5">
            <FaShoppingCart className="size-7" />
            <CartBadge />
          </Link>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
