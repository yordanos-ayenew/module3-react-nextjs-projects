import { createContext, useMemo, useReducer } from "react";
import { cartReducer } from "./cartReducer";

export const CartContext = createContext(null);
export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, {
    items: [],
  });
  const total = useMemo(() =>
      state.items.reduce((sum, item) => sum + item.price * item.qty, 0)
      ,[state.items]
  );
  const value = useMemo(() => ({
      items: state.items,
      dispatch,
      total,
    }),
    [state.items, total]
  );
  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}