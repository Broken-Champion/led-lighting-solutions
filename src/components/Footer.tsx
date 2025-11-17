import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer-main">
                <div className="footer-content">
                    <div className="footer-section footer-brand">
                        <img src="/led-logo.png" alt="LED Lighting Solutions" className="footer-logo" />
                        <p className="footer-tagline">Illuminating your future with premium LED technology for commercial and industrial applications</p>
                        <div className="footer-certifications">
                            <div className="cert-badge">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                                    <path d="M8 12L11 15L16 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                                </svg>
                                <span>ISO 9001</span>
                            </div>
                            <div className="cert-badge">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M12 2L15 8L22 9L17 14L18 21L12 18L6 21L7 14L2 9L9 8L12 2Z" fill="currentColor"/>
                                </svg>
                                <span>Energy Star</span>
                            </div>
                            <div className="cert-badge">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <rect x="6" y="6" width="12" height="12" stroke="currentColor" strokeWidth="2"/>
                                    <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                                </svg>
                                <span>UL Listed</span>
                            </div>
                        </div>
                    </div>

                    <div className="footer-section">
                        <h4>Products</h4>
                        <Link to="/products">All Products</Link>
                        <a href="/products#commercial">Commercial Lighting</a>
                        <a href="/products#industrial">Industrial Lighting</a>
                        <a href="/products#outdoor">Outdoor Lighting</a>
                        <a href="/products#specialty">Specialty Solutions</a>
                    </div>

                    <div className="footer-section">
                        <h4>Company</h4>
                        <Link to="/about">About Us</Link>
                        <Link to="/services">Services</Link>
                        <Link to="/contact">Contact</Link>
                        <a href="/careers">Careers</a>
                        <a href="/blog">Blog</a>
                    </div>

                    <div className="footer-section">
                        <h4>Support</h4>
                        <Link to="/quote">Get a Quote</Link>
                        <a href="/warranty">Warranty Info</a>
                        <a href="/installation">Installation Guide</a>
                        <a href="/faq">FAQ</a>
                        <a href="/resources">Resources</a>
                    </div>

                    <div className="footer-section footer-contact">
                        <h4>Get In Touch</h4>
                        <div className="contact-item">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M2.5 6.66667L10 11.6667L17.5 6.66667M3.33333 15H16.6667C17.5871 15 18.3333 14.2538 18.3333 13.3333V6.66667C18.3333 5.74619 17.5871 5 16.6667 5H3.33333C2.41286 5 1.66667 5.74619 1.66667 6.66667V13.3333C1.66667 14.2538 2.41286 15 3.33333 15Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <a href="mailto:info@ledlightingsolutionsus.com">info@ledlightingsolutionsus.com</a>
                        </div>
                        <div className="contact-item">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M2.5 4.16667C2.5 3.24619 3.24619 2.5 4.16667 2.5H6.96521C7.2706 2.5 7.54296 2.6873 7.64636 2.97253L9.01969 6.7192C9.13891 7.05404 8.99276 7.42478 8.67848 7.58192L6.875 8.48333C7.83333 10.8333 9.58333 12.5833 12.0833 13.5417L12.9848 11.7382C13.1419 11.4239 13.5126 11.2778 13.8475 11.397L17.5941 12.7703C17.8794 12.8737 18.0667 13.1461 18.0667 13.4515V16.25C18.0667 17.1705 17.3205 17.9167 16.4 17.9167H15.8333C8.46041 17.9167 2.5 11.9563 2.5 4.58333V4.16667Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <a href="tel:+15551234567">(555) 123-4567</a>
                        </div>
                        <div className="contact-item">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M10 10.8333C11.3807 10.8333 12.5 9.71405 12.5 8.33333C12.5 6.95262 11.3807 5.83333 10 5.83333C8.61929 5.83333 7.5 6.95262 7.5 8.33333C7.5 9.71405 8.61929 10.8333 10 10.8333Z" stroke="currentColor" strokeWidth="1.5"/>
                                <path d="M10 17.5C13.3333 14.1667 16.6667 11.4052 16.6667 8.33333C16.6667 4.65143 13.6819 1.66667 10 1.66667C6.31811 1.66667 3.33334 4.65143 3.33334 8.33333C3.33334 11.4052 6.66667 14.1667 10 17.5Z" stroke="currentColor" strokeWidth="1.5"/>
                            </svg>
                            <span>Nationwide Service</span>
                        </div>
                        <div className="footer-social">
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                                </svg>
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M22.46 6c-.85.38-1.75.64-2.7.76a4.7 4.7 0 0 0 2.07-2.6 9.4 9.4 0 0 1-3 1.14 4.7 4.7 0 0 0-8 4.28 13.3 13.3 0 0 1-9.67-4.9 4.7 4.7 0 0 0 1.45 6.26A4.65 4.65 0 0 1 .96 10v.06a4.7 4.7 0 0 0 3.77 4.6 4.7 4.7 0 0 1-2.12.08 4.7 4.7 0 0 0 4.39 3.26A9.43 9.43 0 0 1 0 19.54a13.3 13.3 0 0 0 7.29 2.13c8.75 0 13.54-7.25 13.54-13.54 0-.21 0-.41-.01-.62A9.7 9.7 0 0 0 24 4.56a9.37 9.37 0 0 1-2.54.7z"/>
                                </svg>
                            </a>
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="footer-bottom-content">
                    <p>© {currentYear} LED Lighting Solutions LLC. All rights reserved.</p>
                    <div className="footer-legal">
                        <a href="/privacy">Privacy Policy</a>
                        <span>•</span>
                        <a href="/terms">Terms of Service</a>
                        <span>•</span>
                        <a href="/sitemap">Sitemap</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;

