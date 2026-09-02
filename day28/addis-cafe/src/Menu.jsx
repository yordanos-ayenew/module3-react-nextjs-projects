import { useState } from "react";
import Dish from "./Dish";
import Card from "./Card";
import CategoryBar from "./CategoryBar";

function Menu({ dishes }) {
  const [category, setCategory] = useState("All");
  const [total, setTotal] = useState(0);
  const shown = category === "All" ? dishes
    : dishes.filter((dish) => dish.category === category);
  function handleAddToCart(price) {
    setTotal((prevTotal) => prevTotal + price);
  }
  return (
    <div>
      <CategoryBar selected={category} onSelect={setCategory} />
      <h2>Total: {total} ETB</h2>
      {shown.length === 0 ? (
        <p>No {category} dishes</p>
      ) : (
        <div>
          {shown.map((dish) => (
            <Card key={dish.id}>
              <Dish {...dish} onAddToCart={handleAddToCart} />
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
export default Menu;