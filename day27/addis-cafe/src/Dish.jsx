import PropTypes from "prop-types";
function Dish({name, price, spicy, description, currency="ETB"}){
    return(
        <div>
            <h3>{name}</h3>
            <p>{description}</p>
            <p>{price} {currency}</p>
            {spicy && <span>Spicy</span>}
        </div>
    );
}
Dish.propTypes={
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    spicy: PropTypes.bool    
};
export default Dish;