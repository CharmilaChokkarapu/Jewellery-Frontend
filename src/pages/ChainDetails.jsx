import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../services/api";

function ChainDetails() {
  const { id } = useParams();

  const [chain, setChain] = useState(null);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/immutability
    getChain();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function getChain() {
    try {
      const response = await api.get(`/chains/${id}`);
      setChain(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  if (!chain) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="details">

      <img
        src={chain.image}
        alt={chain.name}
      />

      <h1>{chain.name}</h1>

      <h2>₹ {chain.price}</h2>

      <p>{chain.description}</p>

      <hr />

      <h3>Category</h3>
      <p>{chain.category}</p>

      <h3>Material</h3>
      <p>{chain.material}</p>

      <h3>Weight</h3>
      <p>{chain.weight}</p>

      <h3>Length</h3>
      <p>{chain.length}</p>

      <h3>Purity</h3>
      <p>{chain.purity}</p>

      <h3>Availability</h3>
      <p>{chain.availability}</p>

      <h3>Rating</h3>
      <p>⭐ {chain.rating}</p>

      {chain.features && (
        <>
          <h3>Features</h3>

          <ul>
            {chain.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </>
      )}

    </div>
  );
}

export default ChainDetails;