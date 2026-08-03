import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../features/Cartslice";
import "./Cart.css";

function Cart() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <div className="cart-page">
      <h1>Shopping Cart</h1>

      <div className="cart-grid">
        {cart.map((item) => (
          <div className="cart-card" key={item.id}>
            <img src={item.image} alt={item.name} />

            <div className="cart-info">
              <h2>{item.name}</h2>

              <p>
                <strong>Category:</strong> {item.category}
              </p>

              <p>
                <strong>Price:</strong> ₹{item.price}
              </p>

              <button
  className="remove-btn"
  onClick={() => dispatch(removeFromCart(item.id))}
>
  Remove
</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cart;