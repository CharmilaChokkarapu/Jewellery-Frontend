import { useEffect, useState } from "react";
// eslint-disable-next-line no-unused-vars
import { Link } from "react-router-dom";
import api from "../services/api";
import ChainCard from "../components/ChainCard";
import "../components/FilterSection.css";

function Earrings() {
  const [earrings, setEarrings] = useState([]);
  const [filteredEarrings, setFilteredEarrings] = useState([]);

  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");

  useEffect(() => {
    // eslint-disable-next-line react-hooks/immutability
    getEarrings();
  }, []);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/immutability
    filterEarrings();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [earrings, category, price]);

  async function getEarrings() {
    try {
      const response = await api.get("/earrings");
      setEarrings(response.data);
      setFilteredEarrings(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  function filterEarrings() {
    let data = [...earrings];

    // Filter by Metal or Name match
    if (category !== "") {
      data = data.filter((item) => {
        const metalMatch = item.metal ? item.metal.toLowerCase() === category.toLowerCase() : false;
        const nameMatch = item.name ? item.name.toLowerCase().includes(category.toLowerCase()) : false;
        return metalMatch || nameMatch;
      });
    }

    // Filter by Price
    if (price === "0-10000") {
      data = data.filter((item) => item.price <= 10000);
    } else if (price === "10000-50000") {
      data = data.filter(
        (item) => item.price > 10000 && item.price <= 50000
      );
    } else if (price === "50000") {
      data = data.filter((item) => item.price > 50000);
    }

    setFilteredEarrings(data);
  }

  function resetFilters() {
    setCategory("");
    setPrice("");
    setFilteredEarrings(earrings);
  }

  async function deleteEarring(id) {
    try {
      await api.delete(`/earrings/${id}`);
      setEarrings(earrings.filter((item) => item.id !== id));
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
     

      <h1>Earrings Collection</h1>

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
        {filteredEarrings.length > 0 ? (
          filteredEarrings.map((item) => (
            <ChainCard
              key={item.id}
              chain={item}
              deleteChain={deleteEarring}
            />
          ))
        ) : (
          <h2 style={{ textAlign: "center", width: "100%" }}>
            No Earrings Found
          </h2>
        )}
      </div>
    </>
  );
}

export default Earrings;