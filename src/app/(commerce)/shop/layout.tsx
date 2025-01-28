import type { Metadata } from "next";

import "../../globals.css";
import SearchInput from "@/components/commerce/navigation/SearchInput";
import CategoriesLinks from "@/components/commerce/navigation/CategoriesLinks";

export const metadata: Metadata = {
  title: "eCommerce",
  description: "Generated by eCommerce",
};

export default function ShopLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <SearchInput />
      <CategoriesLinks />
      {children}
    </>
  );
}
