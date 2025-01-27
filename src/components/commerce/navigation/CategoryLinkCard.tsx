import { Category } from "@/app/utils/categoriesIcons";

const CategoryLinkCard = ({
  category,
  path,
}: {
  category: Category;
  path: string;
}) => {
  const CategoryIcon = category.icon;
  return (
    <div
      className={`card w-24 lg:w-40 bg-transparent justify-between rounded-md shadow-lg hover:scale-105 active:scale-95 transition-transform duration-300 ease-in-out ${
        path.includes(category.name)
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
