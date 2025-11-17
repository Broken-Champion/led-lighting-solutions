import ProductCarousel from '../components/ProductCarousel';
import './Home.css';

function Home() {
    return (
        <div className="home-page">
            {/* Hero Section */}
            <section className="hero-section">
                <div className="hero-content">
                    <h1 className="hero-title">Illuminating Your Future</h1>
                    <p className="hero-subtitle">
                        Premium LED Lighting Solutions for Commercial & Industrial Applications
                    </p>
                    <div className="hero-buttons">
                        <a href="/products" className="btn-primary">Explore Products</a>
                        <a href="/quote" className="btn-secondary">Get a Quote</a>
                    </div>
                </div>
                <div className="hero-stats">
                    <div className="stat-card">
                        <h3>10,000+</h3>
                        <p>Installations</p>
                    </div>
                    <div className="stat-card">
                        <h3>99.9%</h3>
                        <p>Satisfaction Rate</p>
                    </div>
                    <div className="stat-card">
                        <h3>15+</h3>
                        <p>Years Experience</p>
                    </div>
                </div>
            </section>

            {/* Product Carousel */}
            <ProductCarousel />

            {/* Why Choose Us Section */}
            <section className="why-choose-section">
                <div className="section-container">
                    <h2 className="section-title">Why Choose LED Lighting Solutions?</h2>
                    <div className="features-grid">
                        <div className="feature-item">
                            <div className="feature-icon">⚡</div>
                            <h3>Energy Efficiency</h3>
                            <p>Save up to 80% on energy costs with our cutting-edge LED technology</p>
                        </div>
                        <div className="feature-item">
                            <div className="feature-icon">🏆</div>
                            <h3>Premium Quality</h3>
                            <p>Industry-leading products with extended warranties and certifications</p>
                        </div>
                        <div className="feature-item">
                            <div className="feature-icon">🔧</div>
                            <h3>Expert Installation</h3>
                            <p>Professional installation services by certified technicians</p>
                        </div>
                        <div className="feature-item">
                            <div className="feature-icon">💰</div>
                            <h3>Cost Effective</h3>
                            <p>Competitive pricing with flexible payment options and ROI analysis</p>
                        </div>
                        <div className="feature-item">
                            <div className="feature-icon">🌍</div>
                            <h3>Eco-Friendly</h3>
                            <p>Reduce your carbon footprint with sustainable lighting solutions</p>
                        </div>
                        <div className="feature-item">
                            <div className="feature-icon">📞</div>
                            <h3>24/7 Support</h3>
                            <p>Round-the-clock customer support and maintenance services</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta-section">
                <div className="cta-content">
                    <h2>Ready to Upgrade Your Lighting?</h2>
                    <p>Contact us today for a free consultation and quote</p>
                    <a href="/contact" className="btn-cta">Contact Us Now</a>
                </div>
            </section>
        </div>
    );
}

export default Home;
