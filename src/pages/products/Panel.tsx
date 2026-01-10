import { Link } from "react-router-dom";
import "./Panel.css";
import PanelImage from "../../assets/products/PANEL .png";

function Panel() {
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
          <h1>LED Backlit Panel</h1>
          <p className="product-subtitle">Modern Flat Panel Lighting for Commercial Spaces</p>
        </div>
      </div>

      <div className="product-detail-content">
        <div className="product-showcase">
          <div className="product-image-large">
            <img src={PanelImage} alt="LED Backlit Panel" />
          </div>
          <div className="product-quick-specs">
            <h3>Quick Specifications</h3>
            <ul>
              <li><strong>Type:</strong> Edge-Lit LED Panel</li>
              <li><strong>Energy Rating:</strong> A++</li>
              <li><strong>Color Temps:</strong> 3000K - 5000K</li>
              <li><strong>Profile:</strong> Ultra-slim design</li>
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
              Transform your space with our premium LED Backlit Panels. Featuring advanced edge-lit technology, these 
              ultra-slim fixtures deliver uniform, glare-free illumination perfect for offices, retail, healthcare, and 
              hospitality environments. The sleek, modern design integrates seamlessly with any ceiling system while 
              providing superior energy efficiency.
            </p>
          </div>

          <div className="detail-block">
            <h2>Key Features</h2>
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon">✨</div>
                <h4>Uniform Illumination</h4>
                <p>Advanced diffuser technology eliminates hotspots and shadows</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">📏</div>
                <h4>Ultra-Slim Profile</h4>
                <p>Less than 1" thick - ideal for low-ceiling applications</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">👁️</div>
                <h4>Glare-Free Design</h4>
                <p>UGR &lt;19 rating provides comfortable, eye-friendly lighting</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🎨</div>
                <h4>Modern Aesthetics</h4>
                <p>Clean, frameless design complements contemporary interiors</p>
              </div>
            </div>
          </div>

          <div className="detail-block">
            <h2>Technical Specifications</h2>
            <div className="specs-table">
              <div className="spec-row">
                <span className="spec-label">Size Options:</span>
                <span className="spec-value">1x4 ft, 2x2 ft, 2x4 ft</span>
              </div>
              <div className="spec-row">
                <span className="spec-label">Wattage Range:</span>
                <span className="spec-value">28W - 50W</span>
              </div>
              <div className="spec-row">
                <span className="spec-label">Lumen Output:</span>
                <span className="spec-value">3,200 - 5,500 lumens</span>
              </div>
              <div className="spec-row">
                <span className="spec-label">Efficacy:</span>
                <span className="spec-value">110-120 lm/W</span>
              </div>
              <div className="spec-row">
                <span className="spec-label">Color Temperature:</span>
                <span className="spec-value">3000K, 3500K, 4000K, 5000K</span>
              </div>
              <div className="spec-row">
                <span className="spec-label">CRI:</span>
                <span className="spec-value">&gt;80 (CRI90 available)</span>
              </div>
              <div className="spec-row">
                <span className="spec-label">Dimming:</span>
                <span className="spec-value">0-10V, TRIAC (optional)</span>
              </div>
              <div className="spec-row">
                <span className="spec-label">UGR Rating:</span>
                <span className="spec-value">&lt;19</span>
              </div>
              <div className="spec-row">
                <span className="spec-label">Lifespan:</span>
                <span className="spec-value">50,000+ hours (L70)</span>
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
              <span className="app-badge">Corporate Offices</span>
              <span className="app-badge">Healthcare Facilities</span>
              <span className="app-badge">Retail Stores</span>
              <span className="app-badge">Schools & Universities</span>
              <span className="app-badge">Hotels & Hospitality</span>
              <span className="app-badge">Conference Rooms</span>
              <span className="app-badge">Corridors & Common Areas</span>
              <span className="app-badge">Clean Rooms</span>
            </div>
          </div>

          <div className="detail-block">
            <h2>Installation Options</h2>
            <div className="installation-types">
              <div className="install-option">
                <h4>Drop Ceiling / Grid Mount</h4>
                <p>
                  Designed to drop into standard T-bar ceiling grids (15/16" or 9/16"). Mounting hardware included 
                  for secure installation. Perfect for office environments and commercial buildings.
                </p>
              </div>
              <div className="install-option">
                <h4>Surface Mount</h4>
                <p>
                  Surface mount kit available for hard ceilings or areas without drop ceiling systems. Maintains 
                  slim profile while providing versatile mounting options.
                </p>
              </div>
              <div className="install-option">
                <h4>Recessed / Drywall Mount</h4>
                <p>
                  Can be recessed into drywall ceilings for a flush, integrated appearance. Requires compatible 
                  mounting frame (sold separately).
                </p>
              </div>
              <div className="install-option">
                <h4>Suspended / Pendant Mount</h4>
                <p>
                  Suspension cables available for pendant-style installation in high-ceiling applications or 
                  architectural features.
                </p>
              </div>
            </div>
          </div>

          <div className="detail-block benefits-section">
            <h2>Benefits & Advantages</h2>
            <ul className="benefits-list">
              <li>Reduce energy consumption by up to 60% vs fluorescent troffers</li>
              <li>Create comfortable, productive work environments with even illumination</li>
              <li>Eliminate maintenance hassles with 50,000+ hour lifespan</li>
              <li>Improve visual comfort with low-glare, flicker-free operation</li>
              <li>Enhance space aesthetics with modern, minimalist design</li>
              <li>Qualify for utility rebates and energy incentive programs</li>
              <li>Instant-on with no warm-up time</li>
              <li>Mercury-free and environmentally friendly</li>
            </ul>
          </div>

          <div className="detail-block">
            <h2>Color Temperature Guide</h2>
            <div className="color-temp-guide">
              <div className="temp-option">
                <strong>3000K - Warm White:</strong> Relaxed atmosphere, ideal for hospitality and residential-style offices
              </div>
              <div className="temp-option">
                <strong>3500K - Neutral White:</strong> Balanced warmth, suitable for retail and patient care areas
              </div>
              <div className="temp-option">
                <strong>4000K - Cool White:</strong> Professional environment, most popular for corporate offices
              </div>
              <div className="temp-option">
                <strong>5000K - Daylight:</strong> Bright, energizing, perfect for task-intensive work areas
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="product-cta-section">
        <div className="cta-content-box">
          <h2>Upgrade Your Space with LED Panels</h2>
          <p>Get a customized lighting plan and quote for your project.</p>
          <div className="cta-buttons-centered">
            <Link to="/quote" className="btn-cta-large">Request Free Quote</Link>
            <Link to="/contact" className="btn-cta-secondary">Schedule Site Assessment</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Panel;
