import { useCartStore } from "./cart/cartStore";

function CartBadge() {
  const count = useCartStore((s) =>
    s.items.reduce((sum, item) => sum + item.qty, 0)
  );

  return (
    <span>
      <h2>🛒 Cart: {count}</h2>
    </span>
  );
}
export default CartBadge;