import { Link } from "react-router-dom";
import "./LinearHighBay.css";
import LinearHighBayImage from "../../assets/products/LinearHighBayLights .png";

function LinearHighBay() {
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
          <h1>LED Linear High Bay</h1>
          <p className="product-subtitle">High-Output Industrial Lighting for Warehouses</p>
        </div>
      </div>

      <div className="product-detail-content">
        <div className="product-showcase">
          <div className="product-image-large">
            <img src={LinearHighBayImage} alt="LED Linear High Bay" />
          </div>
          <div className="product-quick-specs">
            <h3>Quick Specifications</h3>
            <ul>
              <li><strong>Type:</strong> Linear High Bay Fixture</li>
              <li><strong>Energy Rating:</strong> A++</li>
              <li><strong>Mounting Height:</strong> 15-40 feet</li>
              <li><strong>Output:</strong> Up to 28,000 lumens</li>
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
              Linear High Bay fixtures deliver powerful, energy-efficient illumination for industrial and warehouse 
              applications. Engineered for mounting heights from 15 to 40 feet, these fixtures provide exceptional light 
              output while reducing energy consumption by up to 70% compared to traditional metal halide or HPS lighting.
            </p>
          </div>

          <div className="detail-block">
            <h2>Key Features</h2>
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon">⚡</div>
                <h4>High Power Output</h4>
                <p>Up to 28,000 lumens for expansive coverage</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">📶</div>
                <h4>Smart Controls Ready</h4>
                <p>Compatible with 0-10V dimming and occupancy sensors</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🔗</div>
                <h4>Daisy Chain Capable</h4>
                <p>Link multiple fixtures for simplified wiring</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🌡️</div>
                <h4>Thermal Management</h4>
                <p>Advanced heat dissipation extends fixture life</p>
              </div>
            </div>
          </div>

          <div className="detail-block">
            <h2>Technical Specifications</h2>
            <div className="specs-table">
              <div className="spec-row">
                <span className="spec-label">Length Options:</span>
                <span className="spec-value">2ft, 4ft, 8ft</span>
              </div>
              <div className="spec-row">
                <span className="spec-label">Wattage Range:</span>
                <span className="spec-value">100W - 240W</span>
              </div>
              <div className="spec-row">
                <span className="spec-label">Lumen Output:</span>
                <span className="spec-value">13,000 - 28,000 lumens</span>
              </div>
              <div className="spec-row">
                <span className="spec-label">Efficacy:</span>
                <span className="spec-value">130-140 lm/W</span>
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
                <span className="spec-label">Beam Options:</span>
                <span className="spec-value">60°, 90°, 120°</span>
              </div>
              <div className="spec-row">
                <span className="spec-label">Operating Voltage:</span>
                <span className="spec-value">120-277V / 347-480V</span>
              </div>
              <div className="spec-row">
                <span className="spec-label">Lifespan:</span>
                <span className="spec-value">100,000+ hours (L70)</span>
              </div>
              <div className="spec-row">
                <span className="spec-label">Certifications:</span>
                <span className="spec-value">UL/cUL Listed, DLC Premium</span>
              </div>
            </div>
          </div>

          <div className="detail-block">
            <h2>Applications</h2>
            <div className="applications-list">
              <span className="app-badge">Warehouses</span>
              <span className="app-badge">Manufacturing</span>
              <span className="app-badge">Distribution Centers</span>
              <span className="app-badge">Logistics Facilities</span>
              <span className="app-badge">Assembly Plants</span>
              <span className="app-badge">Airplane Hangars</span>
              <span className="app-badge">Gymnasiums</span>
              <span className="app-badge">Convention Centers</span>
            </div>
          </div>

          <div className="detail-block benefits-section">
            <h2>Benefits & Advantages</h2>
            <ul className="benefits-list">
              <li>70% energy savings vs metal halide/HPS</li>
              <li>Instant on - no warm-up time</li>
              <li>Reduce HVAC costs with lower heat output</li>
              <li>Improve workplace safety with better visibility</li>
              <li>Lower maintenance costs - lasts 3-5x longer</li>
              <li>Maximize utility rebates with DLC Premium rating</li>
              <li>Integrate with smart controls for additional savings</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="product-cta-section">
        <div className="cta-content-box">
          <h2>Illuminate Your Facility</h2>
          <p>Get a professional lighting assessment and energy savings analysis.</p>
          <div className="cta-buttons-centered">
            <Link to="/quote" className="btn-cta-large">Request Site Assessment</Link>
            <Link to="/contact" className="btn-cta-secondary">Talk to Industrial Specialist</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LinearHighBay;
