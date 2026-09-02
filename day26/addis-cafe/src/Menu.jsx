import MenuItem from "./MenuItem";
const menu=[
    {
        id: 1,
        name: "Buna",
        price: 80,
        description: "Traditional Ethiopian coffee",
        category: "Drink",
        emoji: "☕"
    },
    {
        id: 2,
        name: "Shiro",
        price: 250,
        description: "Traditional Ethiopian chickpea stew",
        category: "Main",
        emoji: "🍲"
    },
    {
        id: 3,
        name: "Doro",
        price: 400,
        description: "Traditional Ethiopian chicken stew with peppers and spices",
        category: "Main",
        emoji: "🐓"
    },
    {
        id: 4,
        name: "Firfir",
        price: 200,
        description: "Injera pieces mixed with pepper sauce and spices",
        category: "Breakfast",
        emoji: "🍛"
    },
    {
        id: 5,
        name: "Chechebsa",
        price: 150,
        description: "Shredded flatbread with butter and honey",
        category: "Breakfast",
        emoji: "🥞"
    },
    {
        id: 6,
        name: "Baklava",
        price: 70,
        description: "Tradditional Ethiopian crispy layered pastry with nuts and honey syrup",
        category: "Dessert",
        emoji: "🍪"
    },  
    {
        id: 7,
        name: "Juice",
        price: 100,
        description: "Seasonal fresh fruit juice",
        category: "Drink",
        emoji: "🍹"
    },
        {
        id: 8,
        name: "Kitfo",
        price: 400,
        description: "Traditional Ethiopian minced beef with mitmita spice",
        category: "Main",
        emoji: "🥩"
    }

];

function Menu(){
    return(
        <section className="menu">
            <h2>Our Menu</h2>
            <div className="menu-grid">
                {menu.map(item=> (
                    <MenuItem
                        key={item.id}
                        name={item.name}
                        price={item.price}
                        description={item.description}
                        category={item.category}
                        emoji={item.emoji}
                    />
                ))}
            </div>
        </section>
    );
}
export default Menu;