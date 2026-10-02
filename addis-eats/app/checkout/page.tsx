import Link from "next/link";
export default function CheckoutPage(){
    return(
        <main>
            <h1>Checkout</h1>
            <Link href="/menu">Back to Menu</Link>
        </main>
    );
}