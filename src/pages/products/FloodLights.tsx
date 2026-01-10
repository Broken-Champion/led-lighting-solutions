import { Link } from "react-router-dom";
import "./FloodLights.css";
import FloodLightsImage from "../../assets/products/LEDFloodlights .png";

function FloodLights() {
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
          <h1>LED Flood Lights</h1>
          <p className="product-subtitle">Outdoor-Rated High-Intensity Area Lighting</p>
        </div>
      </div>

      <div className="product-detail-content">
        <div className="product-showcase">
          <div className="product-image-large">
            <img src={FloodLightsImage} alt="LED Flood Lights" />
          </div>
          <div className="product-quick-specs">
            <h3>Quick Specifications</h3>
            <ul>
              <li><strong>Type:</strong> Outdoor Flood/Area Light</li>
              <li><strong>Energy Rating:</strong> A++</li>
              <li><strong>Weather Rating:</strong> IP66 Waterproof</li>
              <li><strong>Power Range:</strong> 30W - 300W</li>
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
              Professional-grade LED Flood Lights for outdoor security, sports facilities, parking lots, and architectural 
              lighting. Built to withstand harsh weather conditions while delivering powerful, energy-efficient illumination. 
              IP66 rated housing protects against dust and water intrusion.
            </p>
          </div>

          <div className="detail-block">
            <h2>Key Features</h2>
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon">🌧️</div>
                <h4>Weatherproof IP66</h4>
                <p>Withstands rain, snow, and extreme temperatures</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🔦</div>
                <h4>Adjustable Bracket</h4>
                <p>180° tilting for precise beam aiming</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">⚡</div>
                <h4>High Performance</h4>
                <p>Up to 150 lm/W for maximum efficiency</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🛡️</div>
                <h4>Surge Protected</h4>
                <p>10kV surge protection for outdoor reliability</p>
              </div>
            </div>
          </div>

          <div className="detail-block">
            <h2>Technical Specifications</h2>
            <div className="specs-table">
              <div className="spec-row">
                <span className="spec-label">Wattage Options:</span>
                <span className="spec-value">30W, 50W, 100W, 150W, 200W, 300W</span>
              </div>
              <div className="spec-row">
                <span className="spec-label">Lumen Output:</span>
                <span className="spec-value">3,900 - 45,000 lumens</span>
              </div>
              <div className="spec-row">
                <span className="spec-label">Efficacy:</span>
                <span className="spec-value">130-150 lm/W</span>
              </div>
              <div className="spec-row">
                <span className="spec-label">Color Temperature:</span>
                <span className="spec-value">3000K, 4000K, 5000K, 5700K</span>
              </div>
              <div className="spec-row">
                <span className="spec-label">CRI:</span>
                <span className="spec-value">&gt;70</span>
              </div>
              <div className="spec-row">
                <span className="spec-label">Beam Angles:</span>
                <span className="spec-value">25°, 40°, 60°, 90°, 120°</span>
              </div>
              <div className="spec-row">
                <span className="spec-label">IP Rating:</span>
                <span className="spec-value">IP66</span>
              </div>
              <div className="spec-row">
                <span className="spec-label">Operating Temperature:</span>
                <span className="spec-value">-40°F to 140°F</span>
              </div>
              <div className="spec-row">
                <span className="spec-label">Lifespan:</span>
                <span className="spec-value">50,000+ hours</span>
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
              <span className="app-badge">Parking Lots</span>
              <span className="app-badge">Building Facades</span>
              <span className="app-badge">Sports Fields</span>
              <span className="app-badge">Perimeter Security</span>
              <span className="app-badge">Walkways & Plazas</span>
              <span className="app-badge">Loading Docks</span>
              <span className="app-badge">Architectural Lighting</span>
              <span className="app-badge">Billboards & Signage</span>
            </div>
          </div>

          <div className="detail-block benefits-section">
            <h2>Benefits & Advantages</h2>
            <ul className="benefits-list">
              <li>Replace 250W-1000W metal halide flood lights</li>
              <li>Save 70-80% on outdoor lighting energy costs</li>
              <li>Instant on - no warm-up time for security applications</li>
              <li>Enhance property security with better visibility</li>
              <li>Reduce light pollution with precise beam control</li>
              <li>Bronze housing option for coastal environments</li>
              <li>Photocell and motion sensor compatible</li>
              <li>5-year manufacturer warranty</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="product-cta-section">
        <div className="cta-content-box">
          <h2>Secure Your Property with LED Flood Lights</h2>
          <p>Get a professional outdoor lighting design and quote.</p>
          <div className="cta-buttons-centered">
            <Link to="/quote" className="btn-cta-large">Request Free Quote</Link>
            <Link to="/contact" className="btn-cta-secondary">Schedule Site Visit</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FloodLights;
