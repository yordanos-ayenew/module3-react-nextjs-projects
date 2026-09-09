import { Link, useParams } from "react-router-dom";
import useFetch from "./hooks/useFetch";

function DishDetail() {
  const { id } = useParams();
  const {
    data: dishes, loading, error,
  } = useFetch("/dishes.json");
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
  return (
    <div>
      <h2>{dish.name}</h2>
      <p>{dish.description}</p>
      <p>{dish.price} ETB</p>
      {dish.spicy && (<span>Spicy</span>)}
      <p>Category: {dish.category}</p>
      <Link to="/menu">
        Back to Menu
      </Link>
    </div>
  );
}
export default DishDetail;