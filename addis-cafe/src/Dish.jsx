import { useState } from "react";
import PropTypes from "prop-types";
import { useCartStore } from "./cart/cartStore";
import Modal from "./ui/Modal";

function Dish({id, name, price, spicy, description, currency = "ETB",}) {
  const [showModal, setShowModal] = useState(false);
  const quantity = useCartStore(
    (s) => s.items.find((item) => item.id === id)?.qty ?? 0
  );
  const addItem = useCartStore((s) => s.addItem);
  const remove = useCartStore((s) => s.remove);

  function handleAdd() {
      addItem({id, name, price, description, spicy});
      setShowModal(true)
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

      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <h2 id="modal-title">Added to your order</h2>
          <p>{name} was added to your cart.</p>
          <button onClick={() => setShowModal(false)}>
            Close
          </button>
        </Modal>
      )}
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