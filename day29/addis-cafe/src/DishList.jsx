import Dish from "./Dish";
import Card from "./Card";
function DishList({ dishes, category, onAddToCart }){
    if (dishes.length === 0){
    return <p>No {category} dishes</p>
    }
    return(
        <div>
            {dishes.map((dish) => (
                <Card key={dish.id}>
                    <Dish {...dish} onAddToCart={onAddToCart} />
                </Card>
            ))}
        </div>
    );
}
export default DishList;