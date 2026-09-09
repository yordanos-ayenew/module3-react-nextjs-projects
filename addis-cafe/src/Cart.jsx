import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "./cart/CartProvider";

function Cart() {
  const {items, dispatch, total} = useContext(CartContext);
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
          <button onClick={() => dispatch({type: "remove", payload: item.id,})}>
            Remove
          </button>
        </div>
      ))}
      <h3>Total: {total} ETB</h3>
      <button onClick={() => dispatch({ type: "clear" })}>
        Clear Cart
      </button>
      <br />
      <br />
      <Link to="/checkout">
        Checkout
      </Link>
    </div>
  );
}
export default Cart;