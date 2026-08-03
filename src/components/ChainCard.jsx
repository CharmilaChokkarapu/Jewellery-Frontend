import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addFavorite } from "../features/favoriteSlice";
import { addToCart } from "../features/cartSlice";

function ChainCard({ chain }) {
  const dispatch = useDispatch();

  function handleFavorite() {
    dispatch(addFavorite(chain));
  }

  function handleCart() {
    dispatch(addToCart(chain));
  }

  // Decide the route based on category
  const detailsRoute =
    chain.category === "Chains"
      ? `/chains/${chain.id}`
      : chain.category === "Rings"
      ? `/rings/${chain.id}`
      : chain.category === "Bracelets"
      ? `/bracelets/${chain.id}`
      : chain.category === "Bangles"
      ? `/bangles/${chain.id}`
      : chain.category === "Earrings"
      ? `/earrings/${chain.id}`
      : "#";

  return (
    <div className="chain-card">
      <img
        src={chain.image}
        alt={chain.name}
        className="chain-image"
      />

      <div className="chain-info">
        <h3>{chain.name}</h3>

        <p className="price">₹{chain.price}</p>

        <p>
          <strong>Category:</strong> {chain.category}
        </p>

        <p>
          <strong>Metal:</strong> {chain.metal}
        </p>

        <div className="card-actions">
          <Link
            to={detailsRoute}
            className="view-btn"
          >
            View Details
          </Link>

          <button
            className="favorite-btn"
            onClick={handleFavorite}
          >
            ❤ Favorite
          </button>

          <button
            className="cart-btn"
            onClick={handleCart}
          >
            🛒 Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ChainCard;