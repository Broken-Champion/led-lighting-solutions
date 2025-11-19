import "./Services.css";

function Services() {
  const services = [
    {
      id: 1,
      icon: "💡",
      title: "Product Consultation & Design",
      description:
        "Expert consultants help you select the right LED products for your facility and provide custom lighting design recommendations.",
      features: [
        "Comprehensive Lighting Needs Assessment",
        "Product Selection Guidance",
        "Custom Lighting Layout Design",
        "ROI Calculation & Rebate Assistance",
      ],
    },
    {
      id: 2,
      icon: "🔧",
      title: "Technical Support",
      description:
        "Our technical team provides comprehensive support to ensure you get the most out of your LED products.",
      features: [
        "Product Specifications & Documentation",
        "Installation Guidelines",
        "Troubleshooting Assistance",
        "Warranty Support",
      ],
    },
    {
      id: 3,
      icon: "🛠",
      title: "Custom Manufacturing",
      description:
        "We offer custom manufacturing solutions for unique lighting requirements and specialized applications.",
      features: [
        "Custom Product Design",
        "Specialized Color Temperatures",
        "Custom Dimensions & Configurations",
        "OEM & Private Label Options",
      ],
    },
    {
      id: 4,
      icon: "📊",
      title: "Energy Analysis",
      description:
        "Detailed energy analysis services help you understand potential savings and return on investment.",
      features: [
        "Current Lighting System Analysis",
        "Energy Savings Projections",
        "Cost-Benefit Analysis",
        "Utility Rebate Identification",
      ],
    },
    {
      id: 5,
      icon: "♻",
      title: "Product Training",
      description:
        "Comprehensive training programs for your team or installation partners on our LED products.",
      features: [
        "Product Features & Benefits",
        "Installation Best Practices",
        "Maintenance Recommendations",
        "Technical Documentation Review",
      ],
    },
    {
      id: 6,
      icon: "✓",
      title: "Order Management",
      description:
        "Dedicated account managers coordinate every aspect of your order from quote to delivery.",
      features: [
        "Dedicated Account Manager",
        "Order Tracking & Updates",
        "Flexible Delivery Options",
        "Quality Assurance",
      ],
    },
  ];

  return (
    <div className="services-page">
      <div className="services-content">
        <div className="services-intro">
          <h2>Comprehensive LED Manufacturing Services</h2>
          <p>
            From product consultation to delivery, we provide complete
            manufacturing and support services that ensure you get the perfect
            LED lighting products for your needs.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="services-process">
          <h2>Our Process</h2>
          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">1</div>
              <h4>Consultation</h4>
              <p>
                We assess your lighting needs and recommend the best products
              </p>
            </div>
            <div className="process-step">
              <div className="step-number">2</div>
              <h4>Quote & Planning</h4>
              <p>Receive detailed quotes and energy savings projections</p>
            </div>
            <div className="process-step">
              <div className="step-number">3</div>
              <h4>Manufacturing</h4>
              <p>Your order is manufactured to our highest quality standards</p>
            </div>
            <div className="process-step">
              <div className="step-number">4</div>
              <h4>Delivery & Support</h4>
              <p>Fast shipping and ongoing technical support</p>
            </div>
          </div>
        </div>

        <div className="services-cta">
          <h2>Ready to Get Started?</h2>
          <p>
            Contact us today for a free consultation and quote on our premium
            LED lighting products
          </p>
          <div className="cta-buttons">
            <a href="/contact" className="btn-primary">
              Contact Sales
            </a>
            <a href="/quote" className="btn-secondary">
              Request Quote
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
