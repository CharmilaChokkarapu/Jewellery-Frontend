/* eslint-disable react-hooks/immutability */
import { useEffect, useState } from "react";
// eslint-disable-next-line no-unused-vars
import { Link } from "react-router-dom";
import api from "../services/api";
import ChainCard from "../components/ChainCard";
import "../components/FilterSection.css";

function Bangles() {
  const [bangles, setBangles] = useState([]);
  const [filteredBangles, setFilteredBangles] = useState([]);

  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");

  useEffect(() => {
    getBangles();
  }, []);

  useEffect(() => {
    filterBangles();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bangles, category, price]);

  async function getBangles() {
    try {
      const response = await api.get("/bangles");
      setBangles(response.data);
      setFilteredBangles(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  function filterBangles() {
    let data = [...bangles];

    if (category !== "") {
      data = data.filter((item) => {
        const metalMatch = item.metal ? item.metal.toLowerCase() === category.toLowerCase() : false;
        const nameMatch = item.name ? item.name.toLowerCase().includes(category.toLowerCase()) : false;
        return metalMatch || nameMatch;
      });
    }

    if (price === "0-10000") {
      data = data.filter((item) => item.price <= 10000);
    } else if (price === "10000-50000") {
      data = data.filter(
        (item) => item.price > 10000 && item.price <= 50000
      );
    } else if (price === "50000") {
      data = data.filter((item) => item.price > 50000);
    }

    setFilteredBangles(data);
  }

  function resetFilters() {
    setCategory("");
    setPrice("");
    setFilteredBangles(bangles);
  }

  async function deleteBangle(id) {
    try {
      await api.delete(`/bangles/${id}`);
      setBangles(bangles.filter((item) => item.id !== id));
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
     

      <h1>Bangles Collection</h1>

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
        {filteredBangles.length > 0 ? (
          filteredBangles.map((item) => (
            <ChainCard
              key={item.id}
              chain={item}
              deleteChain={deleteBangle}
            />
          ))
        ) : (
          <h2 style={{ textAlign: "center", width: "100%" }}>
            No Bangles Found
          </h2>
        )}
      </div>
    </>
  );
}

export default Bangles;