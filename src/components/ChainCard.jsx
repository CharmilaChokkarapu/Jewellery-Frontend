import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addFavorite } from "../features/favoriteSlice";
import { addToCart } from "../features/Cartslice";

function ChainCard({ chain, onDelete }) {

  const dispatch = useDispatch();


  const currentUser = JSON.parse(localStorage.getItem("user"));

  const isAdmin = currentUser?.role === "admin";


  function handleFavorite() {
    dispatch(addFavorite(chain));
  }


  function handleCart() {
    dispatch(addToCart(chain));
  }


  const detailsRoute =
    chain.category === "Chains"
      ? `/chains/${chain.id}`
      : chain.category === "Rings"
      ? `/rings/${chain.id}`
      : chain.category === "Bracelets"
      ? `/bracelets/${chain.id}`
      : chain.category === "Bangles"
      ? `/bangles/${chain.id}`
      : `/earrings/${chain.id}`;



  const editRoute =
    chain.category === "Chains"
      ? `/edit-chain/${chain.id}`
      : chain.category === "Rings"
      ? `/edit-ring/${chain.id}`
      : chain.category === "Bracelets"
      ? `/edit-bracelet/${chain.id}`
      : chain.category === "Bangles"
      ? `/edit-bangle/${chain.id}`
      : `/edit-earring/${chain.id}`;



  return (

    <div className="chain-card">


      <img
        src={chain.image}
        alt={chain.name}
        className="chain-image"
      />


      <div className="chain-info">


        <h3>{chain.name}</h3>


        <p className="price">
          ₹{chain.price}
        </p>


        <p>
          <strong>Category:</strong> {chain.category}
        </p>


        <p>
          <strong>Metal:</strong> {chain.metal}
        </p>



        <div className="card-actions">


          {/* View Details */}
          <Link
            to={detailsRoute}
            className="view-btn"
          >
            View Details
          </Link>



          {/* Admin buttons */}
          {isAdmin && (
            <>
              <Link
                to={editRoute}
                className="edit-btn"
              >
                ✏ Edit
              </Link>


              <button
                className="delete-btn"
                onClick={() => onDelete && onDelete(chain.id)}
              >
                🗑 Delete
              </button>
            </>
          )}



          {/* Buyer buttons */}
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
            🛒 Add Cart
          </button>



        </div>


      </div>


    </div>

  );

}

export default ChainCard;