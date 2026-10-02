import Link from "next/link";

const dishes = [
  {
    id: 2,
    name: "Shiro",
    price: 250,
    description: "Traditional Ethiopian chickpea stew",
    category: "Main",
    spicy: true,
  },
  {
    id: 3,
    name: "Doro",
    price: 400,
    description:
      "Traditional Ethiopian chicken stew with peppers and spices",
    category: "Main",
    spicy: true,
  },
  {
    id: 4,
    name: "Firfir",
    price: 200,
    description: "Injera pieces mixed with pepper sauce and spices",
    category: "Breakfast",
    spicy: true,
  },
  {
    id: 5,
    name: "Chechebsa",
    price: 150,
    description: "Shredded flatbread with butter and honey",
    category: "Breakfast",
    spicy: false,
  },
  {
    id: 6,
    name: "Baklava",
    price: 70,
    description:
      "Traditional Ethiopian crispy layered pastry with nuts and honey syrup",
    category: "Dessert",
    spicy: false,
  },
  {
    id: 8,
    name: "Kitfo",
    price: 400,
    description: "Traditional Ethiopian minced beef with mitmita spice",
    category: "Main",
    spicy: true,
  },
];

type DishListProps = {
  selectedCategory: string;
};

export default function DishList({ selectedCategory }: DishListProps) {
  const filteredDishes = selectedCategory === "All"
      ? dishes : dishes.filter((dish) => dish.category === selectedCategory);

  return (
    <div className="mt-8 grid gap-5 sm:grid-cols-2 md:grid-cols-3">
      {filteredDishes.map((dish) => (
        <div
          key={dish.id}
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