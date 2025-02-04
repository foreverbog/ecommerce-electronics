import "../../globals.css";
import SearchInput from "@/components/commerce/navigation/SearchInput";
import CategoriesLinks from "@/components/commerce/navigation/CategoriesLinks";

export default function ShopLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-dvh">
      <SearchInput />
      <CategoriesLinks />
      {children}
    </div>
  );
}
