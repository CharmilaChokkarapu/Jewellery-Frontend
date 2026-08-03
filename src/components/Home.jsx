import { Link } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { useState } from "react";


function Home() {
  

  return (
    <>
      {/* Hero Banner */}
      <section className="hero">
        <img
          src="/images/banner-image.png"
          alt="Jewellery Banner"
          className="hero-image"
        />

        <div className="hero-content">
          <h1>FashionWays Jewellery</h1>
          <p>Discover Beautiful Jewellery Collections</p>

          <Link to="/chains" className="shop-btn">
            Shop Now
          </Link>
        </div>
      </section>

     

      {/* Categories */}
      <section className="home-content">
        <div className="home-right">
          <section className="categories">
            <h2>Shop By Category</h2>

            <div className="category-grid">

              <div className="category-card">
                <img
                  src="/images/chains.jpg"
                  alt="Chains"
                />

                <h3>Chains</h3>

                <Link to="/chains" className="category-btn">
                  View Collection
                </Link>
              </div>

              <div className="category-card">
                <img
                  src="/images/category-earrings.jpg"
                  alt="Earrings"
                />

                <h3>Earrings</h3>

                <Link to="/earrings" className="category-btn">
                  View Collection
                </Link>
              </div>

              <div className="category-card">
                <img
                  src="/images/category-bracelets.jpg"
                  alt="Bracelets"
                />

                <h3>Bracelets</h3>

                <Link to="/bracelets" className="category-btn">
                  View Collection
                </Link>
              </div>

              <div className="category-card">
                <img
                  src="/images/category-ring-jpg.jpg"
                  alt="Rings"
                />

                <h3>Rings</h3>

                <Link to="/rings" className="category-btn">
                  View Collection
                </Link>
              </div>

              <div className="category-card">
                <img
                  src="/images/bangles.jpg"
                  alt="Bangles"
                />

                <h3>Bangles</h3>

                <Link to="/bangles" className="category-btn">
                  View Collection
                </Link>
              </div>

            </div>
          </section>
        </div>
      </section>
    </>
  );
}

export default Home;