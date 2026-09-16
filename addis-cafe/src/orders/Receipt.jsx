import { Link, useParams } from "react-router-dom";

function Receipt() {
  const { id } = useParams();
  return (
    <div>
      <h2>Order Confirmed</h2>
      <p>Your order has been placed successfully.</p>
      <p>Order ID: {id}</p>
      <Link to="/menu">Back to Menu</Link>
    </div>
  );
}
export default Receipt;