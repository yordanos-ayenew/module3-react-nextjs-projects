import { useContext, useMemo, useRef, useState } from "react";
import CategoryBar from "./CategoryBar";
import DishList from "./DishList";
import useFetch from "./hooks/useFetch";
import { CartContext } from "./cart/CartProvider";

function Menu() {
  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");
  const searchRef = useRef(null);
  const { data: dishes, loading, error } = useFetch("/dishes.json");
  const { dispatch, total } = useContext(CartContext);

  const filteredDishes = useMemo(() => {
    return dishes.filter((dish) => {
      const matchesCategory =
        category === "All" ||
        dish.category === category;
      const matchesSearch =
        dish.name.toLowerCase().includes(search.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [dishes, category, search]);

  function handleAddToCart(dish) {
    dispatch({
      type: "add",
      payload: dish,
    });
  }

  function handleRemoveFromCart(id) {
    dispatch({
      type: "remove",
      payload: id,
    });
  }
  return (
    <div>
      <h2>Menu</h2>
      <input
        ref={searchRef}
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search dishes..."
      />
      <CategoryBar
        selected={category}
        onSelect={setCategory}
      />
      {loading && <p>Loading the menu...</p>}
      {error && <p className="err">{error}</p>}
      {!loading && !error && (
        <>
          <h2>Total: {total} ETB</h2>
          <DishList
            dishes={filteredDishes}
            category={category}
            onAddToCart={handleAddToCart}
          />
        </>
      )}
    </div>
  );
}
export default Menu;