import { Link } from "react-router-dom";
import "./T8TypeA.css";
import T8sImage from "../../assets/products/T8s.png";

function T8TypeA() {
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
          <h1>LED Tube T8 Type A</h1>
          <p className="product-subtitle">Ballast Compatible LED Tube Solution</p>
        </div>
      </div>

      <div className="product-detail-content">
        <div className="product-showcase">
          <div className="product-image-large">
            <img src={T8sImage} alt="LED Tube T8 Type A" />
          </div>
          <div className="product-quick-specs">
            <h3>Quick Specifications</h3>
            <ul>
              <li><strong>Type:</strong> Ballast Compatible (Plug & Play)</li>
              <li><strong>Energy Rating:</strong> A++</li>
              <li><strong>Compatibility:</strong> Works with existing T8 ballasts</li>
              <li><strong>Installation:</strong> Direct replacement, no rewiring</li>
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
              The LED Tube T8 Type A is designed for seamless integration with your existing fluorescent lighting infrastructure. 
              These ballast-compatible tubes offer a simple plug-and-play solution, allowing you to upgrade to energy-efficient 
              LED technology without the need for rewiring or ballast removal.
            </p>
          </div>

          <div className="detail-block">
            <h2>Key Features</h2>
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon">⚡</div>
                <h4>Plug & Play Installation</h4>
                <p>Works directly with existing T8 fluorescent ballasts - no rewiring required</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">💡</div>
                <h4>Energy Efficient</h4>
                <p>A++ energy rating reduces power consumption by up to 60%</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">⏱️</div>
                <h4>Long Lifespan</h4>
                <p>50,000+ hour rated life - lasts up to 10 years with typical use</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🔆</div>
                <h4>Instant On</h4>
                <p>No warm-up time - full brightness immediately upon switching on</p>
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
                <span className="spec-value">9W - 36W</span>
              </div>
              <div className="spec-row">
                <span className="spec-label">Lumen Output:</span>
                <span className="spec-value">1,200 - 4,800 lumens</span>
              </div>
              <div className="spec-row">
                <span className="spec-label">Color Temperature:</span>
                <span className="spec-value">3000K, 4000K, 5000K, 6500K</span>
              </div>
              <div className="spec-row">
                <span className="spec-label">CRI:</span>
                <span className="spec-value">&gt;80</span>
              </div>
              <div className="spec-row">
                <span className="spec-label">Beam Angle:</span>
                <span className="spec-value">220°</span>
              </div>
              <div className="spec-row">
                <span className="spec-label">Operating Voltage:</span>
                <span className="spec-value">120-277V AC</span>
              </div>
              <div className="spec-row">
                <span className="spec-label">Certifications:</span>
                <span className="spec-value">UL Listed, DLC Premium, Energy Star</span>
              </div>
            </div>
          </div>

          <div className="detail-block">
            <h2>Applications</h2>
            <div className="applications-list">
              <span className="app-badge">Office Buildings</span>
              <span className="app-badge">Retail Stores</span>
              <span className="app-badge">Schools</span>
              <span className="app-badge">Hospitals</span>
              <span className="app-badge">Warehouses</span>
              <span className="app-badge">Parking Garages</span>
              <span className="app-badge">Manufacturing Facilities</span>
            </div>
          </div>

          <div className="detail-block">
            <h2>Installation & Compatibility</h2>
            <p>
              Type A LED tubes are designed to work with your existing electronic T8 ballast. Simply remove the old 
              fluorescent tube and insert the LED tube - it's that easy. Compatible with most electronic T8 ballasts 
              manufactured after 2010. For older magnetic ballasts, we recommend upgrading to Type B or Type A+B tubes.
            </p>
            <p className="note">
              <strong>Note:</strong> Ballast compatibility testing is recommended before full-scale installation. 
              We provide a ballast compatibility list upon request.
            </p>
          </div>

          <div className="detail-block benefits-section">
            <h2>Benefits of Upgrading</h2>
            <ul className="benefits-list">
              <li>Reduce energy costs by 50-60% compared to fluorescent tubes</li>
              <li>Eliminate mercury and harmful materials</li>
              <li>Reduce maintenance costs with 50,000+ hour lifespan</li>
              <li>Improve light quality with superior color rendering</li>
              <li>No flickering or humming typical of fluorescent lighting</li>
              <li>Qualify for utility rebates and energy incentive programs</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="product-cta-section">
        <div className="cta-content-box">
          <h2>Ready to Upgrade Your Lighting?</h2>
          <p>Get a custom quote for your project and start saving on energy costs today.</p>
          <div className="cta-buttons-centered">
            <Link to="/quote" className="btn-cta-large">Get a Free Quote</Link>
            <Link to="/contact" className="btn-cta-secondary">Talk to an Expert</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default T8TypeA;
