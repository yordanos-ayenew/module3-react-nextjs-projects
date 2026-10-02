"use client";
import { useState } from "react";
import CategoryBar from "./CategoryBar";
import DishList from "./DishList";

export default function MenuContent() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  return (
    <>
      <CategoryBar
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />
      <DishList selectedCategory={selectedCategory}/>
    </>
  );
}