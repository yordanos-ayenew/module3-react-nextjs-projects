import { useState } from "react";
import PropTypes from "prop-types";

function Dish({ name, price, spicy, description, currency = "ETB", onAddToCart }) {
  const [count, setCount] = useState(0);
  function handleAdd() {
    setCount(count + 1);
    onAddToCart(price);
  }
  return (
    <div>
      <h3>{name}</h3>
      <p>{description}</p>
      <p>{price} {currency}</p>
      {spicy && <span>Spicy</span>}
      <div>
        <button onClick={handleAdd}>Add</button>
        <span>Quantity: {count}</span>
      </div>
    </div>
  );
}
Dish.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  spicy: PropTypes.bool,
  currency: PropTypes.string,
  onAddToCart: PropTypes.func.isRequired,
};
export default Dish;