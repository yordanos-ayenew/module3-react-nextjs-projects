import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "./cart/CartProvider";

function Checkout() {
  const {items, total, dispatch} = useContext(CartContext);
  const navigate = useNavigate();
  function placeOrder() {
    alert("Order placed successfully!");
    dispatch({type: "clear"});
    navigate("/menu", {
      replace: true,
    });
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