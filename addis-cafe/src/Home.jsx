import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h2>Welcome to Addis Eats</h2>
      <p>Order delicious Ethiopian food from Addis Eats.</p>
      <Link to="/menu">
        Browse Menu
      </Link>
    </div>
  );
}
export default Home;