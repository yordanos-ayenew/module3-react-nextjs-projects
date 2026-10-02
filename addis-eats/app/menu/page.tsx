import MenuContent from "./MenuContent";

export default async function MenuPage() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return (
    <main className="mx-auto max-w-4xl px-6 py-12">
      <h1 className="text-4xl font-bold">Our Menu</h1>
      <p className="mt-2 text-gray-600">
        Explore our Ethiopian dishes.
      </p>
      <MenuContent />
    </main>
  );
}