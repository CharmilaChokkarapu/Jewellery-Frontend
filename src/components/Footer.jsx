import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-section">
          <h2>FASHIONWAYS</h2>
          <p>
            Premium Gold, Silver, Rose Gold, Platinum and Diamond Jewellery.
            Crafted with elegance for every occasion.
          </p>
        </div>

        <div className="footer-section">
          <h3>Collections</h3>

          <Link to="/chains">Gold Chains</Link>
          <Link to="/chains">Silver Chains</Link>
          <Link to="/chains">Rose Gold</Link>
          <Link to="/chains">Diamond Chains</Link>
        </div>

        <div className="footer-section">
          <h3>Company</h3>

          <Link to="/">About Us</Link>
          <Link to="/">Our Collections</Link>
          <Link to="/">Why FashionWays</Link>
          <Link to="/">Stores</Link>
        </div>

        <div className="footer-section">
          <h3>Support</h3>

          <Link to="/">Contact Us</Link>
          <Link to="/">FAQs</Link>
          <Link to="/">Shipping</Link>
          <Link to="/">Returns</Link>
        </div>

      </div>

      <div className="footer-bottom">
        © 2026 FashionWays Jewellery. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;