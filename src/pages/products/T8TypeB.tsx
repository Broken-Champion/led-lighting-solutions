import { Link } from "react-router-dom";
import "./T8TypeB.css";
import T8sImage from "../../assets/products/T8s.png";

function T8TypeB() {
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
          <h1>LED Tube T8 Type B</h1>
          <p className="product-subtitle">Ballast Bypass LED Tube Solution</p>
        </div>
      </div>

      <div className="product-detail-content">
        <div className="product-showcase">
          <div className="product-image-large">
            <img src={T8sImage} alt="LED Tube T8 Type B" />
          </div>
          <div className="product-quick-specs">
            <h3>Quick Specifications</h3>
            <ul>
              <li><strong>Type:</strong> Ballast Bypass (Direct Wire)</li>
              <li><strong>Energy Rating:</strong> A++</li>
              <li><strong>Installation:</strong> Ballast removal required</li>
              <li><strong>Efficiency:</strong> Maximum energy savings</li>
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
              The LED Tube T8 Type B is a ballast bypass solution that connects directly to line voltage, eliminating 
              the ballast entirely. This design maximizes energy efficiency and eliminates potential points of failure, 
              resulting in the most reliable and cost-effective LED tube solution available.
            </p>
          </div>

          <div className="detail-block">
            <h2>Key Features</h2>
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon">🔧</div>
                <h4>Ballast Free Design</h4>
                <p>Eliminates ballast failures and associated maintenance costs</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">⚡</div>
                <h4>Maximum Efficiency</h4>
                <p>No ballast power loss - uses up to 65% less energy than fluorescent</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🛡️</div>
                <h4>Superior Reliability</h4>
                <p>Fewer components mean fewer potential failure points</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">💰</div>
                <h4>Lower Total Cost</h4>
                <p>Best long-term value with reduced maintenance and energy costs</p>
              </div>
            </div>
          </div>

          <div className="detail-block">
            <h2>Technical Specifications</h2>
            <div className="specs-table">
              <div className="spec-row">
                <span className="spec-label">Length Options:</span>
                <span className="spec-value">2ft, 3ft, 4ft, 8ft</span>
              </div>
              <div className="spec-row">
                <span className="spec-label">Wattage Range:</span>
                <span className="spec-value">8W - 32W</span>
              </div>
              <div className="spec-row">
                <span className="spec-label">Lumen Output:</span>
                <span className="spec-value">1,400 - 5,200 lumens</span>
              </div>
              <div className="spec-row">
                <span className="spec-label">Efficacy:</span>
                <span className="spec-value">Up to 160 lm/W</span>
              </div>
              <div className="spec-row">
                <span className="spec-label">Color Temperature:</span>
                <span className="spec-value">3000K, 3500K, 4000K, 5000K, 6500K</span>
              </div>
              <div className="spec-row">
                <span className="spec-label">CRI:</span>
                <span className="spec-value">&gt;82</span>
              </div>
              <div className="spec-row">
                <span className="spec-label">Operating Voltage:</span>
                <span className="spec-value">120-277V AC (Direct Line)</span>
              </div>
              <div className="spec-row">
                <span className="spec-label">Certifications:</span>
                <span className="spec-value">UL Type B, DLC Premium, Energy Star</span>
              </div>
            </div>
          </div>

          <div className="detail-block">
            <h2>Applications</h2>
            <div className="applications-list">
              <span className="app-badge">New Construction</span>
              <span className="app-badge">Major Retrofits</span>
              <span className="app-badge">Industrial Facilities</span>
              <span className="app-badge">Commercial Buildings</span>
              <span className="app-badge">Cold Storage</span>
              <span className="app-badge">High-Use Areas</span>
              <span className="app-badge">24/7 Operations</span>
            </div>
          </div>

          <div className="detail-block">
            <h2>Installation Requirements</h2>
            <p>
              Type B installation requires removing the existing fluorescent ballast and rewiring the fixture to connect 
              directly to line voltage. This should be performed by a licensed electrician in accordance with local electrical 
              codes. While initial installation is more involved than Type A, the long-term benefits include:
            </p>
            <ul className="benefits-list">
              <li>No future ballast failures or replacements</li>
              <li>Maximum energy efficiency with no ballast power loss</li>
              <li>Simplified maintenance - only replace tubes when needed</li>
              <li>Compatible with any fixture after rewiring</li>
            </ul>
            <p className="note">
              <strong>Installation Support:</strong> We provide detailed wiring diagrams and can recommend qualified 
              electricians in your area.
            </p>
          </div>

          <div className="detail-block benefits-section">
            <h2>Why Choose Type B?</h2>
            <ul className="benefits-list">
              <li>Highest energy efficiency - no ballast power consumption</li>
              <li>Most reliable long-term solution</li>
              <li>Ideal for facilities with aging ballasts</li>
              <li>Best for high-use applications running 12+ hours daily</li>
              <li>Maximum return on investment over fixture lifetime</li>
              <li>Eliminates ballast replacement costs permanently</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="product-cta-section">
        <div className="cta-content-box">
          <h2>Calculate Your Energy Savings</h2>
          <p>Find out how much you can save with Type B LED tubes in your facility.</p>
          <div className="cta-buttons-centered">
            <Link to="/quote" className="btn-cta-large">Get a Free Quote</Link>
            <Link to="/contact" className="btn-cta-secondary">Schedule Consultation</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default T8TypeB;
