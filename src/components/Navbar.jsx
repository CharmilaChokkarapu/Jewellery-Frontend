import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar() {
  const favorites = useSelector((state) => state.favorites);
  const cart = useSelector((state) => state.cart);

  const navigate = useNavigate();

  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  function handleLogout() {
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
  }

  return (
    <nav>
      <Link to="/">Home</Link>

      <Link to="/chains">Chains</Link>

      <Link to="/contact">Contact</Link>

      <Link to="/favorites">
        Favorite ({favorites.length})
      </Link>

      <Link to="/cart">
        🛒 Cart ({cart.length})
      </Link>

      {!isLoggedIn ? (
        <>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </>
      ) : (
        <span className="logout-link" onClick={handleLogout}>
          Logout
        </span>
      )}
    </nav>
  );
}

export default Navbar;