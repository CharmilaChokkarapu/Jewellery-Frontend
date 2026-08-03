import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar() {

  const favorites = useSelector((state) => state.favorites);
  const cart = useSelector((state) => state.cart || []);

  const navigate = useNavigate();

  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  // Get logged-in user
  const currentUser = JSON.parse(localStorage.getItem("user"));

  // Check admin
  const isAdmin = currentUser?.role === "admin";


  function handleLogout() {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("user");

    navigate("/login");
  }


  return (
    <nav>

      <Link to="/">
        Home
      </Link>


      <Link to="/chains">
        Chains
      </Link>


      <Link to="/contact">
        Contact
      </Link>


      <Link to="/favorites">
        ❤ Favorites ({favorites.length})
      </Link>


      <Link to="/cart">
        🛒 Cart ({cart.length})
      </Link>


      {/* Only Admin can add products */}
      {isLoggedIn && isAdmin && (
        <Link to="/add-product">
          ➕ Add Product
        </Link>
      )}


      {!isLoggedIn ? (
        <>
          <Link to="/login">
            Login
          </Link>

          <Link to="/register">
            Register
          </Link>
        </>
      ) : (

        <span
          className="logout-link"
          onClick={handleLogout}
          style={{ cursor: "pointer" }}
        >
          Logout
        </span>

      )}

    </nav>
  );
}

export default Navbar;