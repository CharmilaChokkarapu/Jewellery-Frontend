import {
  useDispatch,
  useSelector
} from "react-redux";

import {
  removeFavorite
} from "../features/favoriteSlice";

function Favorites() {

  const dispatch = useDispatch();

  const favorites = useSelector(
    (state) => state.favorites
  );

  return (

    <div className="favorites-container">

      <h1 className="page-title">
        Favorite Chains
      </h1>

      {
        favorites.length === 0 ? (

          <div className="empty-favorites">

            <h2>
              No Favorite Chains
            </h2>

            <p>
              Add your favorite jewellery chains from the Chains page.
            </p>

          </div>

        ) : (

          <div className="favorites-grid">

            {
              favorites.map((chain) => (

                <div
                  key={chain.id}
                  className="favorite-card"
                >

                  <img
                    src={chain.image}
                    alt={chain.name}
                  />

                  <div className="favorite-content">

                    <h2>
                      {chain.name}
                    </h2>

                    <p>
                      Category: {chain.category}
                    </p>

                    <p>
                      Price: ₹{chain.price}
                    </p>

                    <button
                      onClick={() =>
                        dispatch(
                          removeFavorite(chain.id)
                        )
                      }
                    >
                      Remove
                    </button>

                  </div>

                </div>

              ))
            }

          </div>

        )
      }

    </div>

  );
}

export default Favorites;