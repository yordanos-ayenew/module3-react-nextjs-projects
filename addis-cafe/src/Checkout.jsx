import { useNavigate } from "react-router-dom";
import { useCartStore } from "./cart/cartStore";

function Checkout() {
  const items = useCartStore((s) => s.items);
  const total = useCartStore((s) =>
    s.items.reduce((sum, item) => sum + item.price * item.qty, 0)
  );
  const clear = useCartStore((s) => s.clear);
  const navigate = useNavigate();

  function placeOrder() {
    alert("Order placed successfully!");
    clear();
    navigate("/menu", {replace: true});
  }
  if (items.length === 0) {
    return (
      <div>
        <h2>Checkout</h2>
        <p>Your cart is empty.</p>
      </div>
    );
  }
  return (
    <div>
      <h2>Checkout</h2>
      {items.map((item) => (
        <p key={item.id}>{item.name} x {item.qty}</p>
      ))}
      <h3>Total: {total} ETB</h3>
      <button onClick={placeOrder}>Place Order</button>
    </div>
  );
}
export default Checkout;