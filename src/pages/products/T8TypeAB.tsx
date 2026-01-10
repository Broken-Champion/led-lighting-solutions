import { Link } from "react-router-dom";
import "./T8TypeAB.css";
import T8sImage from "../../assets/products/T8s.png";

function T8TypeAB() {
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
          <h1>LED Tube T8 Type A+B</h1>
          <p className="product-subtitle">Hybrid Dual-Mode LED Tube Solution</p>
        </div>
      </div>

      <div className="product-detail-content">
        <div className="product-showcase">
          <div className="product-image-large">
            <img src={T8sImage} alt="LED Tube T8 Type A+B" />
          </div>
          <div className="product-quick-specs">
            <h3>Quick Specifications</h3>
            <ul>
              <li><strong>Type:</strong> Hybrid (Ballast Compatible OR Bypass)</li>
              <li><strong>Energy Rating:</strong> A++</li>
              <li><strong>Flexibility:</strong> Works both ways</li>
              <li><strong>Future-Proof:</strong> Adapts as needs change</li>
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
              The LED Tube T8 Type A+B represents the ultimate in flexibility and future-proofing. These innovative hybrid 
              tubes can operate both with existing ballasts (Type A mode) OR as direct-wire ballast bypass (Type B mode). 
              Install them today as plug-and-play, then easily convert to ballast bypass later when ballasts fail - no need 
              to buy new tubes.
            </p>
          </div>

          <div className="detail-block">
            <h2>Key Features</h2>
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon">🔄</div>
                <h4>Dual Operating Modes</h4>
                <p>Works with ballasts OR bypasses them - your choice</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🎯</div>
                <h4>Future-Proof Investment</h4>
                <p>Protects against ballast failures without replacing tubes</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">⚙️</div>
                <h4>Maximum Flexibility</h4>
                <p>Install quickly now, optimize efficiency later</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">📈</div>
                <h4>Best Total Value</h4>
                <p>Single tube solution for mixed or transitioning installations</p>
              </div>
            </div>
          </div>

          <div className="detail-block">
            <h2>Technical Specifications</h2>
            <div className="specs-table">
              <div className="spec-row">
                <span className="spec-label">Length Options:</span>
                <span className="spec-value">2ft, 4ft</span>
              </div>
              <div className="spec-row">
                <span className="spec-label">Wattage Range:</span>
                <span className="spec-value">9W - 18W</span>
              </div>
              <div className="spec-row">
                <span className="spec-label">Lumen Output:</span>
                <span className="spec-value">1,300 - 2,600 lumens</span>
              </div>
              <div className="spec-row">
                <span className="spec-label">Efficacy:</span>
                <span className="spec-value">Up to 145 lm/W (Type B mode)</span>
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
                <span className="spec-label">Operating Voltage:</span>
                <span className="spec-value">120-277V AC (Both Modes)</span>
              </div>
              <div className="spec-row">
                <span className="spec-label">Certifications:</span>
                <span className="spec-value">UL Type A+B, DLC Standard, Energy Star</span>
              </div>
            </div>
          </div>

          <div className="detail-block">
            <h2>Applications</h2>
            <div className="applications-list">
              <span className="app-badge">Mixed Installations</span>
              <span className="app-badge">Phased Retrofits</span>
              <span className="app-badge">Multi-Tenant Buildings</span>
              <span className="app-badge">Schools & Universities</span>
              <span className="app-badge">Hotels</span>
              <span className="app-badge">Multi-Site Businesses</span>
              <span className="app-badge">Maintenance Simplification</span>
            </div>
          </div>

          <div className="detail-block">
            <h2>How Type A+B Works</h2>
            <div className="hybrid-modes">
              <div className="mode-explanation">
                <h4>Type A Mode (With Ballast)</h4>
                <p>
                  Install the tube directly into existing fixtures with electronic ballasts - works immediately without 
                  any wiring changes. Perfect for quick upgrades or facilities with recently replaced ballasts.
                </p>
              </div>
              <div className="mode-explanation">
                <h4>Type B Mode (Ballast Bypass)</h4>
                <p>
                  When a ballast fails or during planned maintenance, simply remove the ballast and rewire for direct 
                  line voltage. The SAME tube continues working in the more efficient ballast-free mode.
                </p>
              </div>
            </div>
            <p className="note">
              <strong>Conversion Tip:</strong> Type A+B tubes allow facilities to transition gradually from ballasted 
              to ballast-free operation, spreading installation costs over time while maintaining a single tube inventory.
            </p>
          </div>

          <div className="detail-block benefits-section">
            <h2>Why Choose Type A+B?</h2>
            <ul className="benefits-list">
              <li>Install quickly today, upgrade to maximum efficiency later</li>
              <li>Simplify inventory - one tube works in all fixtures</li>
              <li>Protect against premature ballast failures</li>
              <li>Ideal for facilities with mixed ballast ages</li>
              <li>Perfect for phased retrofit projects</li>
              <li>Reduce long-term tube stocking requirements</li>
              <li>Give yourself options as technology and budgets evolve</li>
            </ul>
          </div>

          <div className="detail-block">
            <h2>Ideal For</h2>
            <p>
              Type A+B tubes are particularly well-suited for facilities that need flexibility:
            </p>
            <ul className="benefits-list">
              <li>Buildings with ballasts of varying ages</li>
              <li>Organizations planning multi-year retrofit programs</li>
              <li>Facilities with budget constraints requiring phased upgrades</li>
              <li>Multi-location businesses wanting standardized inventory</li>
              <li>Properties where future maintenance strategy is uncertain</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="product-cta-section">
        <div className="cta-content-box">
          <h2>Get the Best of Both Worlds</h2>
          <p>Discover how Type A+B tubes can simplify your lighting upgrade strategy.</p>
          <div className="cta-buttons-centered">
            <Link to="/quote" className="btn-cta-large">Request Product Quote</Link>
            <Link to="/contact" className="btn-cta-secondary">Speak with Expert</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default T8TypeAB;
