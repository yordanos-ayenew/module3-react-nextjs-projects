import { Link } from "react-router-dom";
import { useCartStore } from "./cart/cartStore";

function Cart() {
  const items = useCartStore((s) => s.items);
  const remove = useCartStore((s) => s.remove);
  const clear = useCartStore((s) => s.clear);
  const total = useCartStore((s) =>
    s.items.reduce((sum, item) => sum + item.price * item.qty, 0)
  );
  if (items.length === 0) {
    return (
      <div>
        <h2>Your Cart</h2>
        <p>Your cart is empty.</p>
        <Link to="/menu">
          Browse Menu
        </Link>
      </div>
    );
  }
  return (
    <div>
      <h2>Your Cart</h2>
      {items.map((item) => (
        <div key={item.id}>
          <h3>{item.name}</h3>
          <p>{item.price} ETB x {item.qty}</p>
          <button onClick={() => remove(item.id)}>Remove</button>
        </div>
      ))}
      <h3>Total: {total} ETB</h3>
      <button onClick={clear}>Clear Cart</button>
      <br />
      <br />
      <Link to="/checkout">
        Checkout
      </Link>
    </div>
  );
}
export default Cart;