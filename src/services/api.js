import axios from "axios";

const api = axios.create({
  baseURL: "https://jewellery-backend-tys7.onrender.com/",
});

export default api;