import PropTypes from "prop-types";
import { useContext } from "react";
import { CartContext } from "./cart/CartProvider";

function Dish({id, name, price, spicy, description, currency = "ETB",}) {
  const { items, dispatch } = useContext(CartContext);
  const item = items.find((item) => item.id === id);
  const quantity = item ? item.qty : 0;

  function handleAdd() {
    dispatch({
      type: "add",
      payload: {id, name, price, description, spicy}
    });
  }

  function handleRemove() {
    dispatch({
      type: "remove",
      payload: id,
    });
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