"use client";

import Link from "next/link";
import { useCart } from "./CartContext";

export default function CartPage(){
    const { items, removeItem, updateQuantity } = useCart();
    const total = items.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );
    if (items.length === 0) {
        return (
        <main className="mx-auto max-w-4xl px-6 py-12">
            <h1 className="text-3xl font-bold">Your Cart</h1>
            <p className="mt-6 text-gray-600">
            Your cart is empty. Add some delicious Ethiopian dishes!
            </p>
            <Link
            href="/menu"
            className="mt-6 inline-block rounded-lg bg-orange-600 px-5 py-3 font-medium text-white hover:bg-orange-700"
            >
            Browse Menu
            </Link>
        </main>
        );
    }
    return(
        <main className="mx-auto max-w-4xl px-6 py-12">
            <h1 className="text-3xl font-bold">Your Cart</h1>
            <div className="mt-8 space-y-4">
              {items.map((item) => (
                <div
                    key={item.id}
                    className="flex flex-col gap-4 rounded-lg border border-gray-200 p-5 sm:flex-row sm:items-center sm:justify-between"
                >
                    <div>
                        <h2 className="text-lg font-semibold">{item.name}</h2>

                        <p className="mt-1 text-gray-600">
                            {item.price} ETB each
                        </p>

                        <p className="mt-1 font-medium">
                            Subtotal: {item.price * item.quantity} ETB
                        </p>
                    </div>
                    <div className="flex flex-wrap items-center gap-3">
                        <button
                            type="button"
                            onClick={() =>
                            item.quantity === 1
                                ? removeItem(item.id)
                                : updateQuantity(item.id, item.quantity - 1)
                            }
                            aria-label={`Decrease ${item.name} quantity`}
                            className="rounded border px-3 py-1 hover:bg-gray-100"
                        >
                            -
                        </button>
                        <span className="min-w-6 text-center">{item.quantity}</span>
                        <button
                            type="button"
                            onClick={() =>
                            updateQuantity(item.id, item.quantity + 1)
                            }
                            aria-label={`Increase ${item.name} quantity`}
                            className="rounded border px-3 py-1 hover:bg-gray-100"
                        >
                            +
                        </button>
                        <button
                            type="button"
                            onClick={() => removeItem(item.id)}
                            className="ml-2 text-sm font-medium text-red-600 hover:underline"
                        >
                            Remove
                        </button>
                    </div>
                </div>
              ))} 
            </div>
            <div className="mt-8 border-t pt-6">
                <div className="flex items-center justify-between text-xl font-bold">
                    <span>Total</span>
                    <span>{total} ETB</span>
                </div>

                <div className="mt-6 flex flex-wrap gap-4">
                    <Link
                        href="/menu"
                        className="rounded-lg border border-gray-300 px-5 py-3 font-medium hover:bg-gray-100"
                    >
                        Continue Shopping
                    </Link>
                    <Link
                        href="/checkout"
                        className="rounded-lg bg-orange-600 px-5 py-3 font-medium text-white hover:bg-orange-700"
                    >
                        Proceed to Checkout
                    </Link>
                </div>
            </div>
        </main>
    );
}