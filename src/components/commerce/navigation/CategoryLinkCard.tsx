import { Category } from "@/app/types/category";
import { ReadonlyURLSearchParams } from "next/navigation";

const CategoryLinkCard = ({
  category,
  searchQuery,
}: {
  category: Category;
  searchQuery: ReadonlyURLSearchParams;
}) => {
  const CategoryIcon = category.icon;

  const selectedCategory = searchQuery.get("category");

  return (
    <div
      className={`card w-24 lg:w-40 bg-base-100 justify-between rounded-md shadow-lg hover:scale-105 active:scale-95 transition-transform duration-300 ease-in-out ${
        selectedCategory === category.name
          ? "text-secondary border-secondary border-2"
          : "border text-primary "
      }`}
    >
      <figure className="p-4">
        <CategoryIcon className="size-10" />
      </figure>

      <h1 className="text-center w-full font-content">{category.name}</h1>
    </div>
  );
};
export default CategoryLinkCard;
