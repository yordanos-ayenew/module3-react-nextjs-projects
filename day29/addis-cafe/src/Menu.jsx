import { useEffect, useRef, useState } from "react";
import { loadDishes } from "./api";
import DishList from "./DishList";
import CategoryBar from "./CategoryBar";

function Menu() {
    const [category, setCategory] = useState("All");
    const [total, setTotal] = useState(0);
    const [dishes, setDishes] = useState([]); 
    const [loading, setLoading] = useState(true); 
    const [error, setError] = useState(null);
    const [search, setSearch] = useState("");

    const searchRef = useRef(null);
    useEffect(() => { searchRef.current?.focus(); }, []);
    useEffect(() => { const controller = new AbortController(); 
    setLoading(true);
    setError(null);

    async function fetchDishes() {
        try {
            const data = await loadDishes(category, controller.signal);
            const filtered = category === "All" ? data 
                : data.filter((dish) => dish.category === category); 
            setDishes(filtered); 
        } catch (err) { 
            if (err.name !== "AbortError"){ 
                setError(err.message); 
            } 
        } finally { 
            if (!controller.signal.aborted){ 
                setLoading(false); 
            }
        }
    }
    fetchDishes();

    return() => {controller.abort();};}, [category]);

    function handleAddToCart(price) {
        setTotal((prevTotal) => prevTotal + price);
    }

    const searchedDishes = dishes.filter((dish) =>
        dish.name.toLowerCase().includes(search.toLowerCase())
    );
  return (
    <div>
        <h2>Menu</h2> 
        <input ref={searchRef} type="text" value={search}
            placeholder="Search dishes..." 
            onChange={(e) => setSearch(e.target.value)}
        /> 
        <CategoryBar selected={category} onSelect={setCategory}/> 
        {loading && <p>Loading the menu...</p>} 
        {error && <p className="err">{error}</p>} 
        {!loading && !error && ( 
            <> 
                <h2>Total: {total} ETB</h2> 
                <DishList dishes={searchedDishes} 
                category={category} 
                onAddToCart={handleAddToCart}/> 
            </> 
        )}
    </div>
  );
}
export default Menu;