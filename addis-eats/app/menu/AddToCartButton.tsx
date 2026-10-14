"use client";

import { useState } from "react";
import { useCart } from "../cart/CartContext";

type AddToCartButtonProps = {
  dish: {
    id: number;
    name: string;
    price: number;
  };
};

export default function AddToCartButton({dish}: AddToCartButtonProps) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  function handleAddToCart() {
    addItem(dish);
    setAdded(true);

    setTimeout(() => {
      setAdded(false);
    }, 1500);
  }
  return (
    <button
      type="button"
      onClick={handleAddToCart}
      className="mt-4 w-full rounded-lg bg-orange-600 px-4 py-2 font-medium text-white transition hover:bg-orange-700"
    >
      {added ? "Added to Cart " : "Add to Cart"}
    </button>
  );
}