import Menu from "./Menu";
import OrderForm from "./OrderForm";
import { CartProvider } from "./cart/CartProvider";
import CartBadge from "./CartBadge";

function App() {

  return (
    <CartProvider>
      <div>
        <h1>Addis Eats</h1>
        <CartBadge/>
        <Menu />
        <OrderForm />
      </div>
    </CartProvider>
  )
}

export default App
