import { NavLink, Outlet } from "react-router-dom";
import CartBadge from "./CartBadge";

function Layout() {
  return (
    <div>
      <header>
        <h1>Addis Eats</h1>
        <nav>
          <NavLink to="/">Home</NavLink>
          {" | "}
          <NavLink to="/menu">Menu</NavLink>
          {" | "}
          <NavLink to="/cart">Cart</NavLink>
          {" | "}
          <NavLink to="/checkout">Checkout</NavLink>
        </nav>
        <CartBadge />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <p>© 2026 Addis Eats</p>
      </footer>
    </div>
  );
}
export default Layout;