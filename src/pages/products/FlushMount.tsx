import { Link } from "react-router-dom";
import "./FlushMount.css";
import FlushMountImage from "../../assets/products/FlushMountCeilingLights .png";

function FlushMount() {
  return (
    <div className="product-detail-page">
      <div className="product-detail-header">
        <div className="header-content">
          <Link to="/products" className="back-link">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
            Back to Products
          </Link>
          <h1>LED Flush Mount Ceiling</h1>
          <p className="product-subtitle">Low-Profile Ceiling Fixtures for Any Space</p>
        </div>
      </div>

      <div className="product-detail-content">
        <div className="product-showcase">
          <div className="product-image-large">
            <img src={FlushMountImage} alt="LED Flush Mount Ceiling" />
          </div>
          <div className="product-quick-specs">
            <h3>Quick Specifications</h3>
            <ul>
              <li><strong>Type:</strong> Surface Mount LED Fixture</li>
              <li><strong>Energy Rating:</strong> A++</li>
              <li><strong>Profile:</strong> Ultra-low 1-2" depth</li>
              <li><strong>Installation:</strong> Direct ceiling mount</li>
            </ul>
            <div className="cta-buttons">
              <Link to="/quote" className="btn-primary">Request Quote</Link>
              <Link to="/contact" className="btn-secondary">Contact Us</Link>
            </div>
          </div>
        </div>

        <div className="product-details-section">
          <div className="detail-block">
            <h2>Product Overview</h2>
            <p>
              Our LED Flush Mount Ceiling fixtures combine sleek aesthetics with powerful, energy-efficient illumination. 
              Perfect for spaces with low ceilings or where a clean, modern look is desired. Ideal for residential, 
              commercial, and hospitality applications.
            </p>
          </div>

          <div className="detail-block">
            <h2>Key Features</h2>
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon">📏</div>
                <h4>Low Profile Design</h4>
                <p>Minimal 1-2 inch depth perfect for low ceilings</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">⚙️</div>
                <h4>Easy Installation</h4>
                <p>Simple surface mount with standard junction box</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">✨</div>
                <h4>Even Distribution</h4>
                <p>Wide beam angle provides uniform room illumination</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🎨</div>
                <h4>Multiple Finishes</h4>
                <p>Available in white, brushed nickel, and bronze</p>
              </div>
            </div>
          </div>

          <div className="detail-block">
            <h2>Technical Specifications</h2>
            <div className="specs-table">
              <div className="spec-row">
                <span className="spec-label">Size Options:</span>
                <span className="spec-value">8", 10", 12", 14", 16"</span>
              </div>
              <div className="spec-row">
                <span className="spec-label">Wattage Range:</span>
                <span className="spec-value">11W - 28W</span>
              </div>
              <div className="spec-row">
                <span className="spec-label">Lumen Output:</span>
                <span className="spec-value">900 - 2,800 lumens</span>
              </div>
              <div className="spec-row">
                <span className="spec-label">Color Temperature:</span>
                <span className="spec-value">2700K, 3000K, 4000K, 5000K</span>
              </div>
              <div className="spec-row">
                <span className="spec-label">CRI:</span>
                <span className="spec-value">&gt;80</span>
              </div>
              <div className="spec-row">
                <span className="spec-label">Dimmable:</span>
                <span className="spec-value">Yes (TRIAC/ELV compatible)</span>
              </div>
              <div className="spec-row">
                <span className="spec-label">Lifespan:</span>
                <span className="spec-value">50,000 hours</span>
              </div>
              <div className="spec-row">
                <span className="spec-label">Certifications:</span>
                <span className="spec-value">UL/cUL Listed, Energy Star</span>
              </div>
            </div>
          </div>

          <div className="detail-block">
            <h2>Applications</h2>
            <div className="applications-list">
              <span className="app-badge">Bedrooms</span>
              <span className="app-badge">Hallways</span>
              <span className="app-badge">Closets</span>
              <span className="app-badge">Bathrooms</span>
              <span className="app-badge">Laundry Rooms</span>
              <span className="app-badge">Hotel Rooms</span>
              <span className="app-badge">Apartment Common Areas</span>
              <span className="app-badge">Office Corridors</span>
            </div>
          </div>

          <div className="detail-block benefits-section">
            <h2>Benefits</h2>
            <ul className="benefits-list">
              <li>Ideal for 7-8 foot ceiling heights</li>
              <li>Modern, minimalist aesthetic</li>
              <li>No bulb changes for 15+ years</li>
              <li>Dimmable for ambiance control</li>
              <li>Wet location rated models available</li>
              <li>85% energy savings vs incandescent</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="product-cta-section">
        <div className="cta-content-box">
          <h2>Transform Your Space</h2>
          <p>Get pricing on LED flush mount fixtures for your project.</p>
          <div className="cta-buttons-centered">
            <Link to="/quote" className="btn-cta-large">Request Quote</Link>
            <Link to="/contact" className="btn-cta-secondary">Contact Us</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FlushMount;
