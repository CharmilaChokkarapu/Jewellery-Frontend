import { useState } from "react";
import api from "../services/api";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line no-unused-vars
function AddChain() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    category: "",
    price: "",
    material: "",
    image: "",
    description: ""
  });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await api.post("/jewellery", formData);
      navigate("/jewellery");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="name"
          placeholder="Jewellery Name"
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="category"
          placeholder="Category (Gold Chain, Silver Chain, Ring...)"
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="price"
          placeholder="Price"
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="material"
          placeholder="Material (Gold, Silver, Diamond)"
          onChange={handleChange}
        />

        <input
          type="text"
          name="image"
          placeholder="Image URL"
          onChange={handleChange}
          required
        />

        <textarea
          name="description"
          placeholder="Description"
          onChange={handleChange}
        ></textarea>

        <button className="submit-btn">
          Add Jewellery
        </button>

      </form>
    </div>
  );
}

export default AddChain;