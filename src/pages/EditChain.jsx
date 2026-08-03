import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../services/api";

function EditChain() {
  const { id } = useParams();

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    price: "",
    image: "",
    description: ""
  });

  useEffect(() => {
    // eslint-disable-next-line react-hooks/immutability
    getChain();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function getChain() {
    try {
      const response = await api.get(`/chains/${id}`);
      setFormData(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await api.put(`/chains/${id}`, formData);
      navigate("/chains");
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
          value={formData.name}
          onChange={handleChange}
          placeholder="Chain Name"
        />

        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
          placeholder="Price"
        />

        <input
          type="text"
          name="image"
          value={formData.image}
          onChange={handleChange}
          placeholder="Image URL"
        />

        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Description"
        />

        <button className="submit-btn">
          Update Chain
        </button>

      </form>
    </div>
  );
}

export default EditChain;