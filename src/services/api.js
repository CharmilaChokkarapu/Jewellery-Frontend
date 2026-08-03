import axios from "axios";

const api = axios.create({
  baseURL: "https://jewellery-backend-1-8vsh.onrender.com/",
});

export default api;