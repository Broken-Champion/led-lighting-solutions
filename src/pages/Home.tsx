import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ProductCarousel from "../components/ProductCarousel";
import "./Home.css";

// Import banner images
import banner1 from "../assets/Banners/banner.jpg";
import banner2 from "../assets/Banners/banner2.jpg";
import banner3 from "../assets/Banners/led-light-fixtures-industrial-energy-saving-light-fixtures-low-led-energy-lighting-bamford-lighting-white-lighting-with-white-room-2.jpg";
import banner4 from "../assets/Banners/smart-warehouse-management-800x500.jpg";
import banner5 from "../assets/Banners/unnamed.jpg";

function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Background images - LED lights in testing labs and massive installations in warehouses
  const backgroundImages = [banner1, banner2, banner3, banner4, banner5];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % backgroundImages.length);
    }, 6000); // Change every 6 seconds

    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  return (
    <div className="home-page">
      {/* Cinematic Background Slideshow */}
      <div className="hero-background">
        {backgroundImages.map((image, index) => (
          <div
            key={index}
            className={`hero-bg-slide ${
              index === currentSlide ? "active" : ""
            }`}
            style={{ backgroundImage: `url(${image})` }}
          />
        ))}
        <div className="hero-overlay"></div>
      </div>

      {/* Hero Section */}
      <section className="hero-section-premium">
        <div className="hero-content-premium">
          <div className="hero-eyebrow">
            Enterprise LED Manufacturing Excellence
          </div>
          <h1 className="hero-title-premium">
            Precision-Engineered
            <br />
            <span className="gradient-text-premium">Lighting Solutions</span>
          </h1>
          <p className="hero-description">
            Leading the industry in commercial-grade LED technology with
            <br />
            state-of-the-art manufacturing and rigorous quality control
          </p>
        </div>

        {/* Manufacturing Stats */}
        <div className="hero-stats-premium">
          <div className="stat-box">
            <div className="stat-number">50M+</div>
            <div className="stat-label">Bulbs Manufactured</div>
            <div className="stat-detail">Annual Production</div>
          </div>
          <div className="stat-box">
            <div className="stat-number">99.7%</div>
            <div className="stat-label">Quality Rate</div>
            <div className="stat-detail">ISO 9001 Certified</div>
          </div>
          <div className="stat-box">
            <div className="stat-number">15+</div>
            <div className="stat-label">Years Experience</div>
            <div className="stat-detail">Industry Leadership</div>
          </div>
          <div className="stat-box">
            <div className="stat-number">500+</div>
            <div className="stat-label">Enterprise Clients</div>
            <div className="stat-detail">Worldwide</div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-section">
        <div className="section-container">
          <h2 className="section-title">Why Choose LED Lighting Solutions?</h2>
          <div className="features-grid">
            <div className="feature-item">
              <div className="feature-icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                </svg>
              </div>
              <h3>Energy Efficiency</h3>
              <p>
                Save up to 80% on energy costs with our cutting-edge LED
                technology
              </p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="8" r="7" />
                  <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
                </svg>
              </div>
              <h3>Premium Quality</h3>
              <p>
                Industry-leading products with extended warranties and
                certifications
              </p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                </svg>
              </div>
              <h3>Expert Installation</h3>
              <p>Professional installation services by certified technicians</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="12" y1="1" x2="12" y2="23" />
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
              </div>
              <h3>Cost Effective</h3>
              <p>
                Competitive pricing with flexible payment options and ROI
                analysis
              </p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <line x1="2" y1="12" x2="22" y2="12" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
              </div>
              <h3>Eco-Friendly</h3>
              <p>
                Reduce your carbon footprint with sustainable lighting solutions
              </p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <h3>24/7 Support</h3>
              <p>Round-the-clock customer support and maintenance services</p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Carousel */}
      <ProductCarousel />

      {/* Product Features Section */}
      <section className="product-features-section">
        <div className="section-container">
          <div className="features-header">
            <h2>Provide the perfect light for every space.</h2>
            <p>
              Our LED lighting products are uniquely designed to create
              perfectly uniform light, surpassing the performance of traditional
              fluorescent fixtures.
            </p>
          </div>

          <div className="features-content">
            <div className="features-list">
              <div className="feature-box">
                <div className="feature-box-icon">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                    <polyline points="9 22 9 12 15 12 15 22" />
                  </svg>
                </div>
                <div className="feature-box-content">
                  <h3>Fast and easy installation.</h3>
                  <p>
                    Our LED products are true retrofit solutions, making them
                    the fastest-to-install option on the market.
                  </p>
                </div>
              </div>

              <div className="feature-box">
                <div className="feature-box-icon">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
                <div className="feature-box-content">
                  <h3>Hassle-free compatibility.</h3>
                  <p>
                    No wires to replace or drivers to change. Our products work
                    with over 80% of ballast electronics on the market.
                  </p>
                </div>
              </div>

              <div className="feature-box">
                <div className="feature-box-icon">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <path d="M9 12l2 2 4-4" />
                  </svg>
                </div>
                <div className="feature-box-content">
                  <h3>Trusted performance.</h3>
                  <p>
                    Lowest failure rate + Warranty 10 years + High resistance to
                    switching cycles.
                  </p>
                </div>
              </div>
            </div>

            <div className="features-image">
              <div className="features-image-container">
                <img src={banner1} alt="LED Lighting Installation" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2>Ready to Upgrade Your Lighting?</h2>
          <p>Contact us today for a free consultation and quote</p>
          <Link to="/contact" className="btn-cta">
            Contact Us Now
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
