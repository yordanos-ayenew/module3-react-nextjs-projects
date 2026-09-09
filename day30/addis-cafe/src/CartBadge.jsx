import { useContext } from "react";
import { CartContext } from "./cart/CartProvider";

function CartBadge() {
  const { items } = useContext(CartContext);
  const itemCount = items.reduce((sum, item) => sum + item.qty, 0);

  return (
    <header>
      <h2>🛒 Cart: {itemCount}</h2>
    </header>
  );
}
export default CartBadge;