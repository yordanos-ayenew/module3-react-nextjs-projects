import Link from "next/link";
export default function CartPage(){
    return(
        <main>
            <h1>Your Cart</h1>
            <Link href="/checkout">Go to Checkout</Link>
        </main>
    );
}