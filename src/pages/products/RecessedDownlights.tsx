import { Link } from "react-router-dom";
import "./RecessedDownlights.css";
import RecessedDownlightsImage from "../../assets/products/RecessedDownlights .png";

function RecessedDownlights() {
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
          <h1>LED Recessed Downlights</h1>
          <p className="product-subtitle">Integrated LED Retrofit and New Construction</p>
        </div>
      </div>

      <div className="product-detail-content">
        <div className="product-showcase">
          <div className="product-image-large">
            <img src={RecessedDownlightsImage} alt="LED Recessed Downlights" />
          </div>
          <div className="product-quick-specs">
            <h3>Quick Specifications</h3>
            <ul>
              <li><strong>Type:</strong> Retrofit / New Construction</li>
              <li><strong>Energy Rating:</strong> A++</li>
              <li><strong>Color Temps:</strong> 3000K - 5000K</li>
              <li><strong>Sizes:</strong> 4", 5", 6" apertures</li>
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
              LED Recessed Downlights provide sleek, energy-efficient illumination for residential and commercial spaces. 
              Available as retrofit kits for existing cans or complete new construction housings. Features integrated LEDs 
              for long-lasting performance and minimal maintenance.
            </p>
          </div>

          <div className="detail-block">
            <h2>Key Features</h2>
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon">🔄</div>
                <h4>Retrofit Ready</h4>
                <p>Fits most existing 4", 5", 6" recessed cans</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🎨</div>
                <h4>Multiple Trims</h4>
                <p>Baffle, reflector, or adjustable gimbal options</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🎚️</div>
                <h4>Dimmable</h4>
                <p>Smooth dimming compatible with most dimmers</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🌟</div>
                <h4>High CRI Options</h4>
                <p>CRI90+ available for superior color rendering</p>
              </div>
            </div>
          </div>

          <div className="detail-block">
            <h2>Technical Specifications</h2>
            <div className="specs-table">
              <div className="spec-row">
                <span className="spec-label">Aperture Sizes:</span>
                <span className="spec-value">4", 5", 6"</span>
              </div>
              <div className="spec-row">
                <span className="spec-label">Wattage Range:</span>
                <span className="spec-value">8W - 18W</span>
              </div>
              <div className="spec-row">
                <span className="spec-label">Lumen Output:</span>
                <span className="spec-value">650 - 1,500 lumens</span>
              </div>
              <div className="spec-row">
                <span className="spec-label">Efficacy:</span>
                <span className="spec-value">80-90 lm/W</span>
              </div>
              <div className="spec-row">
                <span className="spec-label">Color Temperature:</span>
                <span className="spec-value">2700K, 3000K, 3500K, 4000K, 5000K</span>
              </div>
              <div className="spec-row">
                <span className="spec-label">CRI:</span>
                <span className="spec-value">80, 90 (selectable)</span>
              </div>
              <div className="spec-row">
                <span className="spec-label">Dimming Range:</span>
                <span className="spec-value">10% - 100%</span>
              </div>
              <div className="spec-row">
                <span className="spec-label">IC Rated:</span>
                <span className="spec-value">Yes (safe for insulation contact)</span>
              </div>
              <div className="spec-row">
                <span className="spec-label">Lifespan:</span>
                <span className="spec-value">50,000 hours</span>
              </div>
              <div className="spec-row">
                <span className="spec-label">Certifications:</span>
                <span className="spec-value">UL/cUL, Energy Star, JA8 Compliant</span>
              </div>
            </div>
          </div>

          <div className="detail-block">
            <h2>Applications</h2>
            <div className="applications-list">
              <span className="app-badge">Residential Homes</span>
              <span className="app-badge">Kitchens & Bathrooms</span>
              <span className="app-badge">Hotels</span>
              <span className="app-badge">Retail Stores</span>
              <span className="app-badge">Restaurants</span>
              <span className="app-badge">Office Buildings</span>
              <span className="app-badge">Healthcare</span>
              <span className="app-badge">Museums & Galleries</span>
            </div>
          </div>

          <div className="detail-block benefits-section">
            <h2>Benefits & Advantages</h2>
            <ul className="benefits-list">
              <li>Retrofit existing cans in minutes - no housing replacement</li>
              <li>Save 80-85% vs incandescent recessed lighting</li>
              <li>Integrated design eliminates bulb replacement for decades</li>
              <li>IC-rated safe for direct insulation contact</li>
              <li>Air-tight models reduce energy loss through ceiling</li>
              <li>Available in multiple color temperatures for any mood</li>
              <li>Wet location rated options for showers and outdoor soffits</li>
              <li>Adjustable gimbal models for accent lighting</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="product-cta-section">
        <div className="cta-content-box">
          <h2>Modernize Your Recessed Lighting</h2>
          <p>Get a quote for retrofit kits or new construction housings.</p>
          <div className="cta-buttons-centered">
            <Link to="/quote" className="btn-cta-large">Request Quote</Link>
            <Link to="/contact" className="btn-cta-secondary">Get Expert Advice</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecessedDownlights;
