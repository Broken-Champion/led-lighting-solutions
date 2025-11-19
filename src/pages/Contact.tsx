import { useState } from "react";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add form submission logic here
    alert(
      "Thank you for contacting us! We'll get back to you within 24 hours."
    );
  };

  return (
    <div className="contact-page">
      <div className="contact-content">
        <div className="contact-intro">
          <h2>We're Here to Help</h2>
          <p>
            Have a question about our products or need help selecting the right
            LED lighting solution? Our team of experts is ready to assist you.
            Reach out today and experience our commitment to exceptional
            customer service.
          </p>
        </div>

        <div className="contact-container">
          <div className="contact-info">
            <div className="info-section">
              <h3>Corporate Headquarters</h3>
              <div className="info-item">
                <span className="info-icon">📍</span>
                <div>
                  <p>
                    <strong>Address</strong>
                  </p>
                  <p>1234 Industrial Parkway</p>
                  <p>Suite 500</p>
                  <p>Denver, CO 80202</p>
                </div>
              </div>
            </div>

            <div className="info-section">
              <h3>Get In Touch</h3>
              <div className="info-item">
                <span className="info-icon">📞</span>
                <div>
                  <p>
                    <strong>Phone</strong>
                  </p>
                  <p>(800) 555-LEDS</p>
                  <p>(800) 555-5337</p>
                </div>
              </div>
              <div className="info-item">
                <span className="info-icon">✉</span>
                <div>
                  <p>
                    <strong>Email</strong>
                  </p>
                  <p>sales@ledlightingsolutions.com</p>
                  <p>support@ledlightingsolutions.com</p>
                </div>
              </div>
            </div>

            <div className="info-section">
              <h3>Business Hours</h3>
              <div className="info-item">
                <span className="info-icon">🕐</span>
                <div>
                  <p>
                    <strong>Monday - Friday</strong>
                  </p>
                  <p>8:00 AM - 6:00 PM MST</p>
                  <p>
                    <strong>Saturday</strong>
                  </p>
                  <p>9:00 AM - 3:00 PM MST</p>
                  <p>
                    <strong>Sunday</strong>
                  </p>
                  <p>Closed</p>
                </div>
              </div>
            </div>

            <div className="info-section">
              <h3>Emergency Support</h3>
              <div className="info-item">
                <span className="info-icon">🚨</span>
                <div>
                  <p>
                    <strong>24/7 Emergency Line</strong>
                  </p>
                  <p>(800) 555-9999</p>
                  <p>For urgent technical support</p>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-container">
            <h3>Send Us a Message</h3>
            <form className="contact-form" onSubmit={handleSubmit}>
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
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="company">Company Name</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject *</label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select a subject...</option>
                  <option value="product-inquiry">Product Inquiry</option>
                  <option value="quote-request">Quote Request</option>
                  <option value="technical-support">Technical Support</option>
                  <option value="bulk-order">Bulk Order</option>
                  <option value="partnership">Partnership Opportunities</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button type="submit" className="submit-btn">
                Send Message
              </button>
            </form>
          </div>
        </div>

        <div className="response-promise">
          <h3>Our Promise</h3>
          <div className="promise-grid">
            <div className="promise-item">
              <span className="promise-icon">⏱</span>
              <h4>Quick Response</h4>
              <p>We respond to all inquiries within 24 hours</p>
            </div>
            <div className="promise-item">
              <span className="promise-icon">👤</span>
              <h4>Expert Guidance</h4>
              <p>Speak directly with lighting professionals</p>
            </div>
            <div className="promise-item">
              <span className="promise-icon">⭐</span>
              <h4>Custom Solutions</h4>
              <p>Tailored recommendations for your needs</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
