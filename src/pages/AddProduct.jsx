import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

function AddProduct() {

  const navigate = useNavigate();

  const currentUser = JSON.parse(localStorage.getItem("user"));

  const isAdmin = currentUser?.role === "admin";


  const [product, setProduct] = useState({
    name: "",
    category: "",
    metal: "",
    material: "",
    price: "",
    image: "",
    description: ""
  });


  const handleChange = (e) => {

    setProduct({
      ...product,
      [e.target.name]: e.target.value
    });

  };


  const handleSubmit = async (e) => {

    e.preventDefault();


    if (!isAdmin) {
      alert("Only admin can add products");
      navigate("/");
      return;
    }


    if (
      !product.name ||
      !product.category ||
      !product.price ||
      !product.image
    ) {
      alert("Please fill all required fields");
      return;
    }


    try {

      await api.post("/chains", {

        id: Date.now().toString(),

        ...product,

        price: Number(product.price)

      });


      alert("Product Added Successfully");


      navigate("/chains");


    } catch (error) {

      console.log(error);

      alert("Failed to add product");

    }

  };


  if (!isAdmin) {

    return (
      <h2 style={{ textAlign: "center" }}>
        Access Denied - Admin Only
      </h2>
    );

  }



  return (

    <div className="add-product">

      <h2>
        Add Jewellery Product
      </h2>


      <form onSubmit={handleSubmit}>


        <input
          type="text"
          name="name"
          placeholder="Product Name"
          value={product.name}
          onChange={handleChange}
        />


        <input
          type="text"
          name="category"
          placeholder="Chains / Rings / Earrings"
          value={product.category}
          onChange={handleChange}
        />


        <input
          type="text"
          name="metal"
          placeholder="Gold / Silver / Diamond"
          value={product.metal}
          onChange={handleChange}
        />


        <input
          type="text"
          name="material"
          placeholder="22K Gold / Platinum"
          value={product.material}
          onChange={handleChange}
        />


        <input
          type="number"
          name="price"
          placeholder="Price"
          value={product.price}
          onChange={handleChange}
        />


        <input
          type="text"
          name="image"
          placeholder="/images/product.jpg"
          value={product.image}
          onChange={handleChange}
        />


        <textarea
          name="description"
          placeholder="Product Description"
          value={product.description}
          onChange={handleChange}
        />


        <button type="submit">
          Add Product
        </button>


      </form>


    </div>

  );

}


export default AddProduct;