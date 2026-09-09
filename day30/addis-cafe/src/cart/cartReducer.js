export function cartReducer(state, action) {
  switch (action.type) {
    case "add": {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        return {
          ...state,
          items: state.items.map((item) =>
            item.id === action.payload.id
              ? { ...item, qty: item.qty + 1 }
              : item
          ),
        };
      }
      return {
        ...state,
        items: [
          ...state.items,
          {
            ...action.payload,
            qty: 1,
          },
        ],
      };
    }
    case "remove": {
      return {
        ...state,
        items: state.items
          .map((item) => item.id === action.payload
              ? { ...item, qty: item.qty - 1 }
              : item
          )
          .filter((item) => item.qty > 0),
      };
    }
    case "clear":
      return {
        ...state,
        items: [],
      };
    default:
      return state;
  }
}