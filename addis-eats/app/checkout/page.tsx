import Link from "next/link";
import CheckoutForm from "./CheckoutForm";

export const dynamic = "force-dynamic";
export default function CheckoutPage(){
    return(
        <main className="mx-auto max-w-2xl px-6 py-12">
            <h1 className="text-3xl font-bold">Checkout</h1>
            <p className="mt-2 text-gray-600">
                Enter your details to continue.
            </p>
            <CheckoutForm/>
            <Link href="/cart" className="mt-6 inline-block">Back to Cart</Link>
        </main>
    );
}