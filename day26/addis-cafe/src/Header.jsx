const restaurantName="Addis Cafe";
function Header(){
    return(
        <header className="header">
            <h1>{restaurantName}</h1>
            <p>Fresh Ethiopian Food & Coffee</p>
            <p>📍 Bole, Addis Ababa</p>
        </header>
    );
}
export default Header;