import { Link } from "react-router-dom";
import "./UFOHighBay.css";
import UFOHighBayImage from "../../assets/products/UFOHighBayLights .png";

function UFOHighBay() {
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
          <h1>LED UFO High Bay Lights</h1>
          <p className="product-subtitle">Compact Round High Bay for Industrial Spaces</p>
        </div>
      </div>

      <div className="product-detail-content">
        <div className="product-showcase">
          <div className="product-image-large">
            <img src={UFOHighBayImage} alt="LED UFO High Bay Lights" />
          </div>
          <div className="product-quick-specs">
            <h3>Quick Specifications</h3>
            <ul>
              <li><strong>Type:</strong> UFO / Round High Bay</li>
              <li><strong>Power:</strong> 150W</li>
              <li><strong>Efficacy:</strong> 130 lm/W</li>
              <li><strong>Energy Rating:</strong> A++</li>
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
              UFO High Bay lights combine compact design with powerful output, making them ideal for warehouses, 
              manufacturing facilities, and large retail spaces. The round, low-profile design provides excellent light 
              distribution while maintaining a modern, unobtrusive appearance.
            </p>
          </div>

          <div className="detail-block">
            <h2>Key Features</h2>
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon">🎯</div>
                <h4>Precise Optics</h4>
                <p>Multiple beam angles for optimal light distribution</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">💨</div>
                <h4>Compact & Lightweight</h4>
                <p>Easy to install and transport</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🛡️</div>
                <h4>Durable Construction</h4>
                <p>Die-cast aluminum housing with powder coat finish</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">⚡</div>
                <h4>Superior Efficiency</h4>
                <p>130 lm/W delivers maximum energy savings</p>
              </div>
            </div>
          </div>

          <div className="detail-block">
            <h2>Technical Specifications</h2>
            <div className="specs-table">
              <div className="spec-row">
                <span className="spec-label">Wattage Options:</span>
                <span className="spec-value">100W, 150W, 200W, 240W</span>
              </div>
              <div className="spec-row">
                <span className="spec-label">Lumen Output:</span>
                <span className="spec-value">13,000 - 31,200 lumens</span>
              </div>
              <div className="spec-row">
                <span className="spec-label">Efficacy:</span>
                <span className="spec-value">130 lm/W</span>
              </div>
              <div className="spec-row">
                <span className="spec-label">Color Temperature:</span>
                <span className="spec-value">4000K, 5000K</span>
              </div>
              <div className="spec-row">
                <span className="spec-label">CRI:</span>
                <span className="spec-value">&gt;70</span>
              </div>
              <div className="spec-row">
                <span className="spec-label">Beam Angles:</span>
                <span className="spec-value">60°, 90°, 120°</span>
              </div>
              <div className="spec-row">
                <span className="spec-label">Power Factor:</span>
                <span className="spec-value">&gt;0.95</span>
              </div>
              <div className="spec-row">
                <span className="spec-label">Operating Voltage:</span>
                <span className="spec-value">100-277V / 347-480V</span>
              </div>
              <div className="spec-row">
                <span className="spec-label">Lifespan:</span>
                <span className="spec-value">100,000 hours (L70)</span>
              </div>
              <div className="spec-row">
                <span className="spec-label">Certifications:</span>
                <span className="spec-value">UL/cUL, DLC Premium, CE</span>
              </div>
            </div>
          </div>

          <div className="detail-block">
            <h2>Applications</h2>
            <div className="applications-list">
              <span className="app-badge">Warehouses</span>
              <span className="app-badge">Manufacturing Plants</span>
              <span className="app-badge">Big Box Retail</span>
              <span className="app-badge">Logistics Centers</span>
              <span className="app-badge">Sports Arenas</span>
              <span className="app-badge">Exhibition Halls</span>
              <span className="app-badge">Automotive Facilities</span>
              <span className="app-badge">Transportation Hubs</span>
            </div>
          </div>

          <div className="detail-block benefits-section">
            <h2>Benefits & Advantages</h2>
            <ul className="benefits-list">
              <li>Replace 400W-750W metal halide fixtures</li>
              <li>Save 65-75% on lighting energy costs</li>
              <li>Compact size simplifies installation</li>
              <li>Instant on/off - no restrike delay</li>
              <li>Operating temperature: -40°F to 131°F</li>
              <li>Dimming and motion sensor compatible</li>
              <li>10kV surge protection standard</li>
              <li>5-year manufacturer warranty</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="product-cta-section">
        <div className="cta-content-box">
          <h2>Powerful Lighting in a Compact Package</h2>
          <p>Calculate your ROI with UFO High Bay lights.</p>
          <div className="cta-buttons-centered">
            <Link to="/quote" className="btn-cta-large">Get Energy Analysis</Link>
            <Link to="/contact" className="btn-cta-secondary">Schedule Consultation</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UFOHighBay;
