import Link from "next/link";

const categories = [
{ name: "All Dishes", href: "/menu" },
{ name: "Main", href: "/menu?category=Main" },
{ name: "Breakfast", href: "/menu?category=Breakfast" },
{ name: "Dessert", href: "/menu?category=Dessert" },
];

export default function MenuLayout({
children,
}: {
children: React.ReactNode;
}) {
    return ( 
        <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-8 px-6 py-8 md:flex-row"> 
        <aside className="w-full shrink-0 md:w-48"> 
        <h2 className="mb-4 text-lg font-bold">Categories</h2>
            <nav className="flex flex-wrap gap-2 md:flex-col">
            {categories.map((category) => (
                <Link
                key={category.name}
                href={category.href}
                className="rounded-md border border-gray-200 px-4 py-2 hover:bg-gray-100"
                >
                {category.name}
                </Link>
            ))}
            </nav>
    </aside>
    <section className="min-w-0 flex-1">{children}</section>
    </div>
    );
}
