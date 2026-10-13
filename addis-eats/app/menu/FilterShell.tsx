"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import CategoryBar from "./CategoryBar";

type FilterShellProps = {
  children: React.ReactNode;
};
const validCategories = ["All", "Main", "Breakfast", "Dessert"];

export default function FilterShell({ children }: FilterShellProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const categoryFromUrl = searchParams.get("category");
  const initialCategory =
    categoryFromUrl && validCategories.includes(categoryFromUrl)
      ? categoryFromUrl : "All";
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  useEffect(() => {
    setSelectedCategory(initialCategory);
  }, [initialCategory]);
  function handleCategoryChange(category: string) {
    if (!validCategories.includes(category)) return;
    setSelectedCategory(category);
    const url = category === "All" ? "/menu" : `/menu?category=${category}`;
    router.replace(url, { scroll: false });
  }
  return (
    <div data-selected-category={selectedCategory}>
      <CategoryBar
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange}
      />
      {children}
    </div>
  );
}