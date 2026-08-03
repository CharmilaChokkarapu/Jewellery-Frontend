import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../services/api";
import ChainCard from "../components/ChainCard";
import "../components/FilterSection.css";

function Chains() {
  const [chains, setChains] = useState([]);
  const [filteredChains, setFilteredChains] = useState([]);

  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");

  useEffect(() => {
    // eslint-disable-next-line react-hooks/immutability
    getChains();
  }, []);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/immutability
    filterChains();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chains, category, price]);

  async function getChains() {
    try {
      const response = await api.get("/chains");
      setChains(response.data);
      setFilteredChains(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  function filterChains() {
    let data = [...chains];

    // Filter by Metal
    if (category !== "") {
      data = data.filter(
        (chain) => chain.metal.toLowerCase() === category.toLowerCase()
      );
    }

    // Filter by Price
    if (price === "0-10000") {
      data = data.filter((chain) => chain.price <= 10000);
    } else if (price === "10000-50000") {
      data = data.filter(
        (chain) => chain.price > 10000 && chain.price <= 50000
      );
    } else if (price === "50000") {
      data = data.filter((chain) => chain.price > 50000);
    }

    setFilteredChains(data);
  }

  function resetFilters() {
    setCategory("");
    setPrice("");
    setFilteredChains(chains);
  }

  async function deleteChain(id) {
    try {
      await api.delete(`/chains/${id}`);
      setChains(chains.filter((chain) => chain.id !== id));
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <Link to="/add-chains" className="add-btn">
        Add Chain
      </Link>

      <h1>Our Jewellery Collection</h1>

      {/* Filter Section */}
      <div className="filter-bar">

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">All Metals</option>
          <option value="Gold">Gold</option>
          <option value="Silver">Silver</option>
          <option value="Rose Gold">Rose Gold</option>
          <option value="Diamond">Diamond</option>
          <option value="Platinum">Platinum</option>
        </select>

        <select
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        >
          <option value="">All Prices</option>
          <option value="0-10000">Below ₹10,000</option>
          <option value="10000-50000">₹10,000 - ₹50,000</option>
          <option value="50000">Above ₹50,000</option>
        </select>

        <button onClick={resetFilters}>
          Reset
        </button>

      </div>

      <div className="chains">
        {filteredChains.length > 0 ? (
          filteredChains.map((chain) => (
            <ChainCard
              key={chain.id}
              chain={chain}
              deleteChain={deleteChain}
            />
          ))
        ) : (
          <h2 style={{ textAlign: "center", width: "100%" }}>
            No Jewellery Found
          </h2>
        )}
      </div>
    </>
  );
}

export default Chains;