import Link from "next/link";
import { Suspense } from "react";
import FilterShell from "./FilterShell";
import DishList from "./DishList";

export const revalidate = 3600;

export default async function MenuPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-12">
      <h1 className="text-4xl font-bold">Our Menu</h1>
      <p className="mt-2 text-gray-600">
        Explore our Ethiopian dishes.
      </p>
      <Link href="/cart"
        className="mt-4 inline-block text-orange-700 hover:underline"
      >
        View Cart</Link>
      <Suspense fallback={<p className="mt-6">Loading menu...</p>}>
        <FilterShell>
          <Suspense fallback={<p className="mt-6">Loading dishes...</p>}>
            <DishList />
          </Suspense>
        </FilterShell>
      </Suspense>
    </main>
  );
}