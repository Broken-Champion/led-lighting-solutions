import { Link } from "react-router-dom";
import "./A19Bulbs.css";
import A19Image from "../../assets/products/A19.png";

function A19Bulbs() {
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
          <h1>LED A19 Bulbs</h1>
          <p className="product-subtitle">Energy-Efficient Standard Bulb Replacement</p>
        </div>
      </div>

      <div className="product-detail-content">
        <div className="product-showcase">
          <div className="product-image-large">
            <img src={A19Image} alt="LED A19 Bulbs" />
          </div>
          <div className="product-quick-specs">
            <h3>Quick Specifications</h3>
            <ul>
              <li><strong>Type:</strong> A19 Standard Base (E26)</li>
              <li><strong>Energy Rating:</strong> A++</li>
              <li><strong>Wattage:</strong> 9W - 15W</li>
              <li><strong>Equivalent:</strong> 60W - 100W incandescent</li>
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
              Our LED A19 bulbs are the perfect drop-in replacement for traditional incandescent and CFL bulbs. With 
              standard E26 screw bases, these bulbs fit into any existing socket while using up to 85% less energy. 
              Available in multiple color temperatures and brightness levels to suit any application.
            </p>
          </div>

          <div className="detail-block">
            <h2>Key Features</h2>
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon">🔌</div>
                <h4>Universal Compatibility</h4>
                <p>Standard E26 base fits all existing sockets</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">💡</div>
                <h4>Instant Full Brightness</h4>
                <p>No warm-up time unlike CFLs</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">⏰</div>
                <h4>Long Lasting</h4>
                <p>25,000 hour lifespan - lasts 20+ years</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🎚️</div>
                <h4>Dimmable Options</h4>
                <p>Smooth dimming from 100% to 10%</p>
              </div>
            </div>
          </div>

          <div className="detail-block">
            <h2>Technical Specifications</h2>
            <div className="specs-table">
              <div className="spec-row">
                <span className="spec-label">Wattage Options:</span>
                <span className="spec-value">9W, 12W, 15W</span>
              </div>
              <div className="spec-row">
                <span className="spec-label">Incandescent Equivalent:</span>
                <span className="spec-value">60W, 75W, 100W</span>
              </div>
              <div className="spec-row">
                <span className="spec-label">Lumen Output:</span>
                <span className="spec-value">800 - 1,600 lumens</span>
              </div>
              <div className="spec-row">
                <span className="spec-label">Color Temperature:</span>
                <span className="spec-value">2700K, 3000K, 4000K, 5000K</span>
              </div>
              <div className="spec-row">
                <span className="spec-label">CRI:</span>
                <span className="spec-value">&gt;80 (CRI90+ available)</span>
              </div>
              <div className="spec-row">
                <span className="spec-label">Beam Angle:</span>
                <span className="spec-value">220° - 240°</span>
              </div>
              <div className="spec-row">
                <span className="spec-label">Lifespan:</span>
                <span className="spec-value">25,000 hours</span>
              </div>
              <div className="spec-row">
                <span className="spec-label">Operating Voltage:</span>
                <span className="spec-value">120V AC</span>
              </div>
              <div className="spec-row">
                <span className="spec-label">Certifications:</span>
                <span className="spec-value">UL Listed, Energy Star, FCC Compliant</span>
              </div>
            </div>
          </div>

          <div className="detail-block">
            <h2>Applications</h2>
            <div className="applications-list">
              <span className="app-badge">Residential Homes</span>
              <span className="app-badge">Hotels & Hospitality</span>
              <span className="app-badge">Retail Displays</span>
              <span className="app-badge">Office Spaces</span>
              <span className="app-badge">Restaurants</span>
              <span className="app-badge">Multi-Family Housing</span>
              <span className="app-badge">Table & Floor Lamps</span>
              <span className="app-badge">Ceiling Fixtures</span>
            </div>
          </div>

          <div className="detail-block benefits-section">
            <h2>Benefits of LED A19 Bulbs</h2>
            <ul className="benefits-list">
              <li>Save up to 85% on lighting energy costs</li>
              <li>Last 25x longer than incandescent bulbs</li>
              <li>Never change a bulb again for 20+ years (typical use)</li>
              <li>Instant on - full brightness immediately</li>
              <li>Cool to the touch - safer than hot incandescent bulbs</li>
              <li>No mercury or hazardous materials</li>
              <li>Works with existing dimmer switches (dimmable models)</li>
              <li>Consistent color throughout lifespan</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="product-cta-section">
        <div className="cta-content-box">
          <h2>Ready to Switch to LED?</h2>
          <p>Get bulk pricing for your home or business lighting upgrade.</p>
          <div className="cta-buttons-centered">
            <Link to="/quote" className="btn-cta-large">Get Bulk Quote</Link>
            <Link to="/contact" className="btn-cta-secondary">Contact Us</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default A19Bulbs;
