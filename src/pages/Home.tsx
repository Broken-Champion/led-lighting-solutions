import { useState, useEffect } from 'react';
import ProductCarousel from '../components/ProductCarousel';
import './Home.css';

function Home() {
    const [currentSlide, setCurrentSlide] = useState(0);
    
    // Background images - these would be factory/testing facility images
    const backgroundImages = [
        'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1920',  // Factory floor
        'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1920',  // Manufacturing
        'https://images.unsplash.com/photo-1581092160607-ee67dcf19f00?w=1920',  // Industrial facility
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % backgroundImages.length);
        }, 6000); // Change every 6 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="home-page">
            {/* Cinematic Background Slideshow */}
            <div className="hero-background">
                {backgroundImages.map((image, index) => (
                    <div
                        key={index}
                        className={`hero-bg-slide ${index === currentSlide ? 'active' : ''}`}
                        style={{ backgroundImage: `url(${image})` }}
                    />
                ))}
                <div className="hero-overlay"></div>
            </div>

            {/* Hero Section */}
            <section className="hero-section-premium">
                <div className="hero-content-premium">
                    <div className="hero-eyebrow">Enterprise LED Manufacturing Excellence</div>
                    <h1 className="hero-title-premium">
                        Precision-Engineered<br />
                        <span className="gradient-text-premium">Lighting Solutions</span>
                    </h1>
                    <p className="hero-description">
                        Leading the industry in commercial-grade LED technology with<br />
                        state-of-the-art manufacturing and rigorous quality control
                    </p>
                    <div className="hero-cta-group">
                        <a href="/products" className="btn-hero-primary">
                            View Product Line
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </a>
                        <a href="/contact" className="btn-hero-secondary">
                            Contact Sales
                        </a>
                    </div>
                </div>

                {/* Manufacturing Stats */}
                <div className="hero-stats-premium">
                    <div className="stat-box">
                        <div className="stat-number">50M+</div>
                        <div className="stat-label">Bulbs Manufactured</div>
                        <div className="stat-detail">Annual Production</div>
                    </div>
                    <div className="stat-box">
                        <div className="stat-number">99.7%</div>
                        <div className="stat-label">Quality Rate</div>
                        <div className="stat-detail">ISO 9001 Certified</div>
                    </div>
                    <div className="stat-box">
                        <div className="stat-number">15+</div>
                        <div className="stat-label">Years Experience</div>
                        <div className="stat-detail">Industry Leadership</div>
                    </div>
                    <div className="stat-box">
                        <div className="stat-number">500+</div>
                        <div className="stat-label">Enterprise Clients</div>
                        <div className="stat-detail">Worldwide</div>
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
