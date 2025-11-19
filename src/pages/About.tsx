import "./About.css";

function About() {
  return (
    <div className="about-page">
      <div className="about-content">
        <div className="page-content">
          <div className="content-section">
            <h2>Our Story</h2>
            <p>
              Founded in 2008, LED Lighting Solutions emerged from a vision to
              revolutionize commercial and industrial lighting through
              cutting-edge LED technology. What began as a small manufacturing
              operation has grown into a leading provider of premium LED
              lighting solutions, serving over 500 enterprise clients worldwide.
            </p>
            <p>
              Our state-of-the-art manufacturing facilities produce over 50
              million LED bulbs annually, maintaining an industry-leading 99.7%
              quality rate. Every product that leaves our facility is backed by
              rigorous testing, ISO 9001 certification, and our commitment to
              excellence.
            </p>
          </div>

          <div className="content-section">
            <h2>Our Mission</h2>
            <p>
              To deliver innovative, energy-efficient LED lighting solutions
              that reduce operational costs, minimize environmental impact, and
              enhance the quality of commercial and industrial spaces worldwide.
            </p>
          </div>

          <div className="content-section">
            <h2>Manufacturing Excellence</h2>
            <p>
              Our ISO 9001:2015 certified manufacturing facilities utilize
              advanced automated production lines and rigorous quality control
              processes. Each product undergoes comprehensive testing including:
            </p>
            <ul className="about-list">
              <li>Photometric Testing</li>
              <li>Thermal Performance Analysis</li>
              <li>Electrical Safety Testing</li>
              <li>Accelerated Life Testing</li>
              <li>Environmental Stress Testing</li>
            </ul>
          </div>

          <div className="stats-section">
            <div className="stat-item">
              <h3>50M+</h3>
              <p>Bulbs Manufactured Annually</p>
            </div>
            <div className="stat-item">
              <h3>99.7%</h3>
              <p>Quality Rate</p>
            </div>
            <div className="stat-item">
              <h3>15+</h3>
              <p>Years Experience</p>
            </div>
            <div className="stat-item">
              <h3>500+</h3>
              <p>Enterprise Clients</p>
            </div>
          </div>

          <div className="content-section">
            <h2>Certifications & Standards</h2>
            <div className="certifications-grid">
              <div className="cert-item">
                <h4>ISO 9001:2015</h4>
                <p>Quality Management Systems</p>
              </div>
              <div className="cert-item">
                <h4>Energy Star</h4>
                <p>Energy Efficiency Certification</p>
              </div>
              <div className="cert-item">
                <h4>DLC Listed</h4>
                <p>DesignLights Consortium</p>
              </div>
              <div className="cert-item">
                <h4>UL Certified</h4>
                <p>Safety Standards Compliance</p>
              </div>
              <div className="cert-item">
                <h4>RoHS Compliant</h4>
                <p>Restriction of Hazardous Substances</p>
              </div>
              <div className="cert-item">
                <h4>CE Marked</h4>
                <p>European Conformity</p>
              </div>
            </div>
          </div>

          <div className="content-section">
            <h2>Our Values</h2>
            <div className="values-grid">
              <div className="value-item">
                <h4>Quality First</h4>
                <p>
                  We never compromise on quality. Every product meets the
                  highest industry standards.
                </p>
              </div>
              <div className="value-item">
                <h4>Innovation</h4>
                <p>
                  Continuously advancing LED technology to deliver better, more
                  efficient solutions.
                </p>
              </div>
              <div className="value-item">
                <h4>Sustainability</h4>
                <p>
                  Committed to reducing carbon footprints and promoting
                  eco-friendly practices.
                </p>
              </div>
              <div className="value-item">
                <h4>Customer Focus</h4>
                <p>
                  Your success is our priority. We provide exceptional support
                  and service.
                </p>
              </div>
            </div>
          </div>

          <div className="content-section">
            <h2>Global Reach</h2>
            <p>
              With distribution centers across North America, Europe, and Asia,
              we serve clients in over 40 countries. Our global logistics
              network ensures timely delivery and comprehensive support wherever
              your projects take you.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
