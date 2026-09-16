import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useCartStore = create(
  persist(
    (set) => ({
      items: [],
      addItem: (dish) =>
        set((state) => {
          const existingItem = state.items.find(
            (item) => item.id === dish.id
          );
          if (existingItem) {
            return {
              items: state.items.map((item) =>
                item.id === dish.id ? { ...item, qty: item.qty + 1 }: item)
            };
          }
          return {
            items: [...state.items, { ...dish, qty: 1 }],
          };
        }),
      remove: (id) =>
        set((state) => ({
          items: state.items.map((item) =>
              item.id === id ? { ...item, qty: item.qty - 1 } : item)
            .filter((item) => item.qty > 0)
        })),
      clear: () => set({ items: [] }),
    }),
    {name: "addis-eats-cart"}
  )
);