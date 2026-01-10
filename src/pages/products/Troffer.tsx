import { Link } from "react-router-dom";
import "./Troffer.css";
import TrofferImage from "../../assets/products/LEDTrofferLights .png";

function Troffer() {
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
          <h1>LED Troffer Lights 2x4</h1>
          <p className="product-subtitle">High-Performance Drop Ceiling Fixtures</p>
        </div>
      </div>

      <div className="product-detail-content">
        <div className="product-showcase">
          <div className="product-image-large">
            <img src={TrofferImage} alt="LED Troffer Lights 2x4" />
          </div>
          <div className="product-quick-specs">
            <h3>Quick Specifications</h3>
            <ul>
              <li><strong>Type:</strong> 2x4 LED Troffer</li>
              <li><strong>Energy Rating:</strong> A++</li>
              <li><strong>Color Temps:</strong> 3500K - 5000K</li>
              <li><strong>Output:</strong> Up to 5,000 lumens</li>
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
              LED Troffer Lights provide superior illumination for commercial and office environments. Designed to drop 
              into standard 2x4 ceiling grids, these fixtures deliver exceptional light quality, energy efficiency, and 
              long-term reliability.
            </p>
          </div>

          <div className="detail-block">
            <h2>Key Features</h2>
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon">📐</div>
                <h4>Grid Compatible</h4>
                <p>Fits standard 15/16" T-bar ceiling systems</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">💡</div>
                <h4>High Output</h4>
                <p>Up to 5,000 lumens from energy-efficient LEDs</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">👁️</div>
                <h4>Low Glare</h4>
                <p>UGR &lt;19 for comfortable visual environment</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🔧</div>
                <h4>Tool-Free Install</h4>
                <p>Quick connect wiring for fast installation</p>
              </div>
            </div>
          </div>

          <div className="detail-block">
            <h2>Technical Specifications</h2>
            <div className="specs-table">
              <div className="spec-row">
                <span className="spec-label">Dimensions:</span>
                <span className="spec-value">24" x 48"</span>
              </div>
              <div className="spec-row">
                <span className="spec-label">Wattage Options:</span>
                <span className="spec-value">32W, 40W, 50W</span>
              </div>
              <div className="spec-row">
                <span className="spec-label">Lumen Output:</span>
                <span className="spec-value">3,500 - 5,000 lumens</span>
              </div>
              <div className="spec-row">
                <span className="spec-label">Efficacy:</span>
                <span className="spec-value">100-110 lm/W</span>
              </div>
              <div className="spec-row">
                <span className="spec-label">Color Temperature:</span>
                <span className="spec-value">3500K, 4000K, 5000K</span>
              </div>
              <div className="spec-row">
                <span className="spec-label">CRI:</span>
                <span className="spec-value">&gt;80</span>
              </div>
              <div className="spec-row">
                <span className="spec-label">Dimming:</span>
                <span className="spec-value">0-10V (optional)</span>
              </div>
              <div className="spec-row">
                <span className="spec-label">Lifespan:</span>
                <span className="spec-value">50,000+ hours</span>
              </div>
              <div className="spec-row">
                <span className="spec-label">Certifications:</span>
                <span className="spec-value">UL Listed, DLC Premium</span>
              </div>
            </div>
          </div>

          <div className="detail-block">
            <h2>Applications</h2>
            <div className="applications-list">
              <span className="app-badge">Corporate Offices</span>
              <span className="app-badge">Schools & Universities</span>
              <span className="app-badge">Healthcare Facilities</span>
              <span className="app-badge">Government Buildings</span>
              <span className="app-badge">Retail Back Offices</span>
              <span className="app-badge">Call Centers</span>
              <span className="app-badge">Libraries</span>
            </div>
          </div>

          <div className="detail-block benefits-section">
            <h2>Benefits</h2>
            <ul className="benefits-list">
              <li>Replace old fluorescent troffers 1:1</li>
              <li>Save 50-60% on lighting energy costs</li>
              <li>Improve workplace productivity with better light quality</li>
              <li>Reduce HVAC costs - less heat generation</li>
              <li>Qualify for utility rebates</li>
              <li>Flicker-free, silent operation</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="product-cta-section">
        <div className="cta-content-box">
          <h2>Upgrade Your Office Lighting</h2>
          <p>Get a customized quote for your commercial space.</p>
          <div className="cta-buttons-centered">
            <Link to="/quote" className="btn-cta-large">Get Free Quote</Link>
            <Link to="/contact" className="btn-cta-secondary">Talk to Expert</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Troffer;
