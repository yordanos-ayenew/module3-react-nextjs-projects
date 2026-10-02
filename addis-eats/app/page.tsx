import Link from "next/link";

export default function Home() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-12">
      <h1 className="text-4xl font-bold">Addis Eats</h1>
      <p className="mt-2 text-gray-600">
        Eat good. Support local.
      </p>
      <Link href="/menu"
        className="mt-6 inline-block rounded-md bg-black px-5 py-2 text-white hover:bg-gray-800"
      >
        View Menu
      </Link>
    </main>
  );
}