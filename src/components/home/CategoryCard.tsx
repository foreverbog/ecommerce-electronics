import { Category } from "@/app/types/category";

const CategoryCard = ({ category }: { category: Category }) => {
  const CategoryIcon = category.icon;
  return (
    <div className="card w-24  justify-between bg-transparent border rounded-md border-primary text-primary shadow-lg">
      <figure className="p-4">
        <CategoryIcon className="size-10" />
      </figure>

      <h1 className="text-center w-full font-content">{category.name}</h1>
    </div>
  );
};
export default CategoryCard;
