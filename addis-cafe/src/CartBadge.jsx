import { useCartStore } from "./cart/cartStore";

function CartBadge() {
  const count = useCartStore((s) =>
    s.items.reduce((sum, item) => sum + item.qty, 0)
  );

  return (
    <div>
      <h2>🛒 Cart: {count}</h2>
    </div>
  );
}
export default CartBadge;