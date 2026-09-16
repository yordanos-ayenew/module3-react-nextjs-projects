import PropTypes from "prop-types";
import { useCartStore } from "./cart/cartStore";

function Dish({id, name, price, spicy, description, currency = "ETB",}) {
  const quantity = useCartStore(
    (s) => s.items.find((item) => item.id === id)?.qty ?? 0
  );
  const addItem = useCartStore((s) => s.addItem);
  const remove = useCartStore((s) => s.remove);

  function handleAdd() {
      addItem({id, name, price, description, spicy});
  }
  function handleRemove() {
    remove(id);
  }

  return (
    <div>
      <h3>{name}</h3>
      <p>{description}</p>
      <p>{price} {currency}</p>
      {spicy && <span>Spicy</span>}
      <div>
        <button onClick={handleAdd}>Add</button>
        <span> Quantity: {quantity} </span>
        {quantity > 0 && (
          <button onClick={handleRemove}>Remove</button>
        )}
      </div>
    </div>
  );
}

Dish.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  spicy: PropTypes.bool,
  currency: PropTypes.string,
};
export default Dish;