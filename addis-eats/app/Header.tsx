import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-gray-200 bg-white">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-xl font-bold">
          Addis Eats
        </Link>
        <div className="flex gap-6">
          <Link href="/" className="hover:text-orange-700">
            Home
          </Link>
          <Link href="/menu" className="hover:text-orange-700">
            Menu
          </Link>
          <Link href="/cart" className="hover:text-orange-700">
            Cart
          </Link>
        </div>
      </nav>
    </header>
  );
}