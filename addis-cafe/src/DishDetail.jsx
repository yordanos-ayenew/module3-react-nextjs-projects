import { Link, useParams } from "react-router-dom";
import useFetch from "./hooks/useFetch";
import { useCartStore } from "./cart/cartStore";

function DishDetail() {
  const { id } = useParams();
  const {
    data: dishes, loading, error,
  } = useFetch("/dishes.json");
  const addItem = useCartStore((s) => s.addItem);
  if (loading) {
    return <p>Loading dish...</p>;
  }
  if (error) {
    return <p>{error}</p>;
  }
  const dish = dishes.find(
    (dish) => String(dish.id) === id
  );
  if (!dish) {
    return (
      <div>
        <h2>Dish not found</h2>
        <p>No dish exists with ID "{id}".</p>
        <Link to="/menu">
          Back to menu
        </Link>
      </div>
    );
  }

  function handleAdd() {
    addItem(dish);
  }
  return (
    <div>
      <h2>{dish.name}</h2>
      <p>{dish.description}</p>
      <p>{dish.price} ETB</p>
      {dish.spicy && (<span>Spicy</span>)}
      <p>Category: {dish.category}</p>
      <button onClick={handleAdd}>Add to Cart</button>
      <br />
      <br />
      <Link to="/menu">
        Back to Menu
      </Link>
    </div>
  );
}
export default DishDetail;