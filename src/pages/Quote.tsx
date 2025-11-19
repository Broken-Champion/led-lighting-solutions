import { useState } from "react";
import "./Quote.css";

function Quote() {
  const [formData, setFormData] = useState({
    // Contact Information
    name: "",
    email: "",
    phone: "",
    company: "",

    // Project Information
    facilityType: "",
    projectType: "",
    facilitySize: "",
    timeline: "",
    budget: "",

    // Current Lighting
    currentLighting: "",
    monthlyElectricBill: "",

    // Product Interest
    products: [] as string[],

    // Additional Information
    specialRequirements: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    if (checked) {
      setFormData({
        ...formData,
        products: [...formData.products, value],
      });
    } else {
      setFormData({
        ...formData,
        products: formData.products.filter((product) => product !== value),
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Quote request submitted:", formData);
    alert(
      "Thank you for your quote request! Our team will review your requirements and contact you within 24 hours with a detailed proposal."
    );
  };

  return (
    <div className="quote-page">
      <div className="quote-content">
        <div className="quote-intro">
          <h2>Free Product Quote & Consultation</h2>
          <p>
            Share your project details below and receive a comprehensive quote
            tailored to your specific lighting needs. Our experts will analyze
            your requirements and provide energy savings projections, product
            recommendations, and available rebate information.
          </p>
        </div>

        <form className="quote-form" onSubmit={handleSubmit}>
          <div className="form-section">
            <h3>Contact Information</h3>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="phone">Phone Number *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="company">Company Name *</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          </div>

          <div className="form-section">
            <h3>Project Details</h3>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="facilityType">Facility Type *</label>
                <select
                  id="facilityType"
                  name="facilityType"
                  value={formData.facilityType}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select facility type...</option>
                  <option value="office">Office Building</option>
                  <option value="warehouse">
                    Warehouse / Distribution Center
                  </option>
                  <option value="retail">Retail Store</option>
                  <option value="manufacturing">Manufacturing Facility</option>
                  <option value="healthcare">Healthcare Facility</option>
                  <option value="education">Educational Institution</option>
                  <option value="hospitality">Hospitality / Hotel</option>
                  <option value="parking">Parking Garage / Lot</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="projectType">Project Type *</label>
                <select
                  id="projectType"
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select project type...</option>
                  <option value="new-construction">New Construction</option>
                  <option value="retrofit">Retrofit / Replacement</option>
                  <option value="expansion">Facility Expansion</option>
                  <option value="upgrade">Lighting Upgrade</option>
                  <option value="bulk-purchase">Bulk Purchase</option>
                </select>
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="facilitySize">Facility Size (sq ft)</label>
                <input
                  type="text"
                  id="facilitySize"
                  name="facilitySize"
                  placeholder="e.g., 50,000"
                  value={formData.facilitySize}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="timeline">Project Timeline *</label>
                <select
                  id="timeline"
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select timeline...</option>
                  <option value="immediate">Immediate (Within 1 month)</option>
                  <option value="1-3-months">1-3 Months</option>
                  <option value="3-6-months">3-6 Months</option>
                  <option value="6-12-months">6-12 Months</option>
                  <option value="planning">Planning Phase (12+ months)</option>
                </select>
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="budget">Budget Range</label>
                <select
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                >
                  <option value="">Select budget range...</option>
                  <option value="under-10k">Under $10,000</option>
                  <option value="10k-25k">$10,000 - $25,000</option>
                  <option value="25k-50k">$25,000 - $50,000</option>
                  <option value="50k-100k">$50,000 - $100,000</option>
                  <option value="100k-plus">$100,000+</option>
                  <option value="not-sure">Not Sure</option>
                </select>
              </div>
            </div>
          </div>

          <div className="form-section">
            <h3>Current Lighting System</h3>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="currentLighting">Current Lighting Type</label>
                <select
                  id="currentLighting"
                  name="currentLighting"
                  value={formData.currentLighting}
                  onChange={handleChange}
                >
                  <option value="">Select current lighting...</option>
                  <option value="fluorescent">Fluorescent</option>
                  <option value="metal-halide">Metal Halide</option>
                  <option value="hps">High-Pressure Sodium (HPS)</option>
                  <option value="incandescent">Incandescent</option>
                  <option value="old-led">Old LED System</option>
                  <option value="mixed">Mixed Types</option>
                  <option value="none">
                    New Construction (No Current Lighting)
                  </option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="monthlyElectricBill">
                  Monthly Electric Bill (Lighting)
                </label>
                <input
                  type="text"
                  id="monthlyElectricBill"
                  name="monthlyElectricBill"
                  placeholder="e.g., $2,500"
                  value={formData.monthlyElectricBill}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          <div className="form-section">
            <h3>Product Interest</h3>
            <p className="section-description">
              Select all products you're interested in:
            </p>
            <div className="checkbox-grid">
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  value="troffer"
                  onChange={handleCheckboxChange}
                />
                <span>LED Troffer Lights</span>
              </label>
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  value="high-bay"
                  onChange={handleCheckboxChange}
                />
                <span>LED High Bay Lights</span>
              </label>
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  value="panel"
                  onChange={handleCheckboxChange}
                />
                <span>LED Panel Lights</span>
              </label>
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  value="t8"
                  onChange={handleCheckboxChange}
                />
                <span>LED T8 Tubes</span>
              </label>
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  value="corn"
                  onChange={handleCheckboxChange}
                />
                <span>LED Corn Bulbs</span>
              </label>
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  value="wall-pack"
                  onChange={handleCheckboxChange}
                />
                <span>LED Wall Pack Lights</span>
              </label>
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  value="canopy"
                  onChange={handleCheckboxChange}
                />
                <span>LED Canopy Lights</span>
              </label>
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  value="flood"
                  onChange={handleCheckboxChange}
                />
                <span>LED Flood Lights</span>
              </label>
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  value="strip"
                  onChange={handleCheckboxChange}
                />
                <span>LED Strip Lights</span>
              </label>
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  value="downlight"
                  onChange={handleCheckboxChange}
                />
                <span>LED Downlights</span>
              </label>
            </div>
          </div>

          <div className="form-section">
            <h3>Additional Information</h3>
            <div className="form-group">
              <label htmlFor="specialRequirements">
                Special Requirements or Comments
              </label>
              <textarea
                id="specialRequirements"
                name="specialRequirements"
                rows={6}
                placeholder="Please share any specific requirements, questions, or additional details about your project..."
                value={formData.specialRequirements}
                onChange={handleChange}
              ></textarea>
            </div>
          </div>

          <button type="submit" className="submit-btn">
            Submit Quote Request
          </button>
        </form>

        <div className="quote-benefits">
          <h3>What You'll Receive</h3>
          <div className="benefits-grid">
            <div className="benefit-item">
              <span className="benefit-icon">📄</span>
              <h4>Detailed Proposal</h4>
              <p>Comprehensive quote with product specifications and pricing</p>
            </div>
            <div className="benefit-item">
              <span className="benefit-icon">💰</span>
              <h4>Energy Savings Analysis</h4>
              <p>Projected energy savings and ROI calculations</p>
            </div>
            <div className="benefit-item">
              <span className="benefit-icon">🎟</span>
              <h4>Rebate Information</h4>
              <p>Available utility rebates and tax incentives</p>
            </div>
            <div className="benefit-item">
              <span className="benefit-icon">👤</span>
              <h4>Expert Consultation</h4>
              <p>Personalized recommendations from lighting specialists</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Quote;
