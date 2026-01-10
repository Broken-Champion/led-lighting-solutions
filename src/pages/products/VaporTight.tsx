import { Link } from "react-router-dom";
import "./VaporTight.css";
import VaporTightImage from "../../assets/products/Vapor-Tight-Lights .png";

function VaporTight() {
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
          <h1>LED Vapor Tight Lights</h1>
          <p className="product-subtitle">IP65 Rated Weatherproof Industrial Lighting</p>
        </div>
      </div>

      <div className="product-detail-content">
        <div className="product-showcase">
          <div className="product-image-large">
            <img src={VaporTightImage} alt="LED Vapor Tight Lights" />
          </div>
          <div className="product-quick-specs">
            <h3>Quick Specifications</h3>
            <ul>
              <li><strong>Type:</strong> Sealed Vapor-Proof Fixture</li>
              <li><strong>Energy Rating:</strong> A++</li>
              <li><strong>IP Rating:</strong> IP65 (Dust & Water Tight)</li>
              <li><strong>Application:</strong> Indoor/Outdoor harsh environments</li>
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
              Built for the toughest environments, our LED Vapor Tight fixtures provide reliable illumination where 
              moisture, dust, and temperature extremes are concerns. With IP65-rated sealed housing and corrosion-resistant 
              construction, these fixtures excel in car washes, food processing plants, parking garages, and other 
              demanding applications.
            </p>
          </div>

          <div className="detail-block">
            <h2>Key Features</h2>
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon">💧</div>
                <h4>IP65 Waterproof</h4>
                <p>Fully sealed against water jets and dust intrusion</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🛡️</div>
                <h4>Impact Resistant</h4>
                <p>IK08 impact rating withstands physical abuse</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🌡️</div>
                <h4>Wide Temperature Range</h4>
                <p>Operates reliably from -40°F to 122°F</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">⚡</div>
                <h4>Surge Protected</h4>
                <p>Built-in 10kV surge protection</p>
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
                <span className="spec-value">20W - 80W</span>
              </div>
              <div className="spec-row">
                <span className="spec-label">Lumen Output:</span>
                <span className="spec-value">2,600 - 11,200 lumens</span>
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
                <span className="spec-label">IP Rating:</span>
                <span className="spec-value">IP65</span>
              </div>
              <div className="spec-row">
                <span className="spec-label">IK Rating:</span>
                <span className="spec-value">IK08</span>
              </div>
              <div className="spec-row">
                <span className="spec-label">Operating Temperature:</span>
                <span className="spec-value">-40°F to 122°F (-40°C to 50°C)</span>
              </div>
              <div className="spec-row">
                <span className="spec-label">Lifespan:</span>
                <span className="spec-value">50,000+ hours</span>
              </div>
              <div className="spec-row">
                <span className="spec-label">Certifications:</span>
                <span className="spec-value">UL Listed, DLC Premium, NSF Certified</span>
              </div>
            </div>
          </div>

          <div className="detail-block">
            <h2>Applications</h2>
            <div className="applications-list">
              <span className="app-badge">Car Washes</span>
              <span className="app-badge">Food Processing</span>
              <span className="app-badge">Parking Garages</span>
              <span className="app-badge">Cold Storage</span>
              <span className="app-badge">Outdoor Walkways</span>
              <span className="app-badge">Marine Environments</span>
              <span className="app-badge">Chemical Plants</span>
              <span className="app-badge">Agricultural Facilities</span>
            </div>
          </div>

          <div className="detail-block benefits-section">
            <h2>Benefits & Advantages</h2>
            <ul className="benefits-list">
              <li>Withstands direct water spray and pressure washing</li>
              <li>Corrosion-resistant polycarbonate housing</li>
              <li>Stainless steel mounting clips resist rust</li>
              <li>Reduce maintenance costs in challenging environments</li>
              <li>NSF certified for food-safe applications</li>
              <li>Energy savings of 60-70% vs fluorescent vapor tights</li>
              <li>Emergency backup battery option available</li>
              <li>Flicker-free operation even at extreme temperatures</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="product-cta-section">
        <div className="cta-content-box">
          <h2>Protect Your Investment with Durable Lighting</h2>
          <p>Get expert recommendations for your harsh environment application.</p>
          <div className="cta-buttons-centered">
            <Link to="/quote" className="btn-cta-large">Get Project Quote</Link>
            <Link to="/contact" className="btn-cta-secondary">Speak with Specialist</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VaporTight;
