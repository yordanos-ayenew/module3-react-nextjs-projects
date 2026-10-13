import Link from "next/link";
import { notFound } from "next/navigation";
import { dishes } from "@/lib/dishes";

export function generateStaticParams(){
  return dishes.map((dish)=>({
    id: String(dish.id)
  }));
}

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