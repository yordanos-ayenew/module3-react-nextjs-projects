import { Link } from "react-router-dom";
import Dish from "./Dish";
import Card from "./Card";

function DishList({ dishes }) {
  if (dishes.length === 0) {
    return <p>No dishes found.</p>;
  }
  return (
    <div>
      {dishes.map((dish) => (
        <Card key={dish.id}>
          <Link to={`/menu/${dish.id}`}>
            View details
          </Link>
          <Dish {...dish}/>
        </Card>
      ))}
    </div>
  );
}
export default DishList;