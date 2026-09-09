import { useSearchParams } from "react-router-dom";
import CategoryBar from "./CategoryBar";
import DishList from "./DishList";
import useFetch from "./hooks/useFetch";

function Menu(){
  const [params, setParams] = useSearchParams();
  const category = params.get("category") ?? "All";
  const {
    data: dishes, loading, error,
  } = useFetch("/dishes.json");

  function handleCategoryChange(cat){
    if (cat === "All") {
      setParams({});
    } else {
      setParams({
        category: cat,
      });
    }
  }
  const shown = category === "All" ? dishes
      : dishes.filter(
          (dish) =>
            dish.category === category
        );
  if (loading){
    return <p>Loading the menu...</p>;
  }
  if (error) {
    return <p>{error}</p>;
  }
  return (
    <div>
      <h2>Menu</h2>
      <CategoryBar
        selected={category}
        onSelect={handleCategoryChange}
      />
      <DishList dishes={shown}/>
    </div>
  );
}
export default Menu;