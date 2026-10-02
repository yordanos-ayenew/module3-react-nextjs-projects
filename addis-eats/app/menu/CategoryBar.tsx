"use client";

type CategoryBarProps = {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
};
const categories = ["All", "Main", "Breakfast", "Dessert"];

export default function CategoryBar({
  selectedCategory,
  onCategoryChange,
}: CategoryBarProps) {
  return (
    <div className="mt-6 flex flex-wrap gap-2">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={
            selectedCategory === category
              ? "rounded-md bg-black px-4 py-2 text-white"
              : "rounded-md border border-gray-300 bg-white px-4 py-2"
          }
        >
          {category}
        </button>
      ))}
    </div>
  );
}