import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

export default function CartContainer() {
  const cart = useSelector((state) => state.cart.cart);
  return cart ? (
    <div>CartContianer</div>
  ) : (
    <div>
      <h1 className="title">Your Cart Is Empty</h1>
      <Link to="/products" className="button">
        Fill It
      </Link>
    </div>
  );
}
