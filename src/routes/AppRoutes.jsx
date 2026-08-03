import { Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import Chains from "../pages/Chains";
import ChainDetails from "../pages/ChainDetails";
import AddChains from "../pages/AddChain";
import EditChain from "../pages/EditChain";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Favorites from "../pages/Favorites";
import Rings from "../pages/Rings";
import Earrings from "../pages/Earrings";
import Cart from "../pages/Cart";
import Bracelets from "../pages/Bracelets";
import Bangles from "../pages/Bangles";
import Contact from "../pages/Contact";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/chains" element={<Chains />} />
      <Route path="/chains/:id" element={<ChainDetails />} />
      <Route path="/add-chains" element={<AddChains />} />
      <Route path="/edit-chain/:id" element={<EditChain />} />
      <Route path="/rings" element={<Rings />} />
      <Route path="/earrings" element={<Earrings />} />
      <Route path="/bracelets" element={<Bracelets />} />
      <Route path="/bangles" element={<Bangles />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/favorites" element={<Favorites />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default AppRoutes;