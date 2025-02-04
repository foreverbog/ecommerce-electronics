import { Category } from "@/app/types/category";

const CategoryLinkCard = ({
  category,
  categoryName,
}: {
  category: Category;
  categoryName: string | string[] | undefined;
}) => {
  const CategoryIcon = category.icon;

  return (
    <div
      className={`card w-24 lg:w-40 bg-base-100 justify-between rounded-md shadow-lg hover:scale-105 active:scale-95 transition-transform duration-300 ease-in-out ${
        categoryName === category.name
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
