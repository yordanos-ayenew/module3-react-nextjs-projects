import Link from "next/link";
import { notFound } from "next/navigation";

const dishes = [
  {
    id: 2,
    name: "Shiro",
    price: 250,
    description: "Traditional Ethiopian chickpea stew",
    category: "Main",
  },
  {
    id: 3,
    name: "Doro",
    price: 400,
    description:
      "Traditional Ethiopian chicken stew with peppers and spices",
    category: "Main",
  },
  {
    id: 4,
    name: "Firfir",
    price: 200,
    description: "Injera pieces mixed with pepper sauce and spices",
    category: "Breakfast",
  },
  {
    id: 5,
    name: "Chechebsa",
    price: 150,
    description: "Shredded flatbread with butter and honey",
    category: "Breakfast",
  },
  {
    id: 6,
    name: "Baklava",
    price: 70,
    description:
      "Traditional Ethiopian crispy layered pastry with nuts and honey syrup",
    category: "Dessert",
  },
  {
    id: 8,
    name: "Kitfo",
    price: 400,
    description: "Traditional Ethiopian minced beef with mitmita spice",
    category: "Main",
  },
];

export default async function DishPage({params,}: {params: Promise<{ id: string }>;}) {
  const { id } = await params;
  const dish = dishes.find((dish) => dish.id === Number(id));
  if (!dish) {
    notFound();
  }
  return (
    <main className="mx-auto max-w-4xl px-6 py-12">
      <h1 className="text-4xl font-bold">{dish.name}</h1>
      <p className="mt-4 text-gray-600">{dish.description}</p>
      <p className="mt-4 text-xl font-semibold">{dish.price} ETB</p>
      <p className="mt-2 text-gray-500">
        Category: {dish.category}
      </p>
      <Link
        href="/menu"
        className="mt-6 inline-block text-orange-700 hover:underline"
      >
        Back to Menu
      </Link>
    </main>
  );
}