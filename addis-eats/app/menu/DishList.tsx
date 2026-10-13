import Link from "next/link";
import { dishes } from "@/lib/dishes";

export default function DishList() {
  return (
    <div className="mt-8 grid gap-5 sm:grid-cols-2 md:grid-cols-3">
      {dishes.map((dish) => (
        <div
          key={dish.id}
          data-category={dish.category}
          className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm"
        >
          <h2 className="text-xl font-semibold">{dish.name}</h2>
          <p className="mt-2 text-gray-600">{dish.description}</p>
          <p className="mt-2 font-semibold">{dish.price} ETB</p>
          <p className="mt-1 text-sm text-gray-500">{dish.category}</p>
          <Link
            href={`/menu/${dish.id}`}
            className="mt-4 inline-block text-sm font-medium text-orange-700 hover:underline"
          >
            View Dish
          </Link>
        </div>
      ))}
    </div>
  );
}