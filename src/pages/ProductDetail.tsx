import { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { getProductBySlug } from '../data/products';
import './ProductDetail.css';

function ProductDetail() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const product = getProductBySlug(slug || '');

  useEffect(() => {
    if (product) {
      document.title = `${product.name} | LED Lighting Solutions`;
    } else {
      document.title = 'Product Not Found | LED Lighting Solutions';
    }
  }, [product]);

  if (!product) {
    return (
      <div className="product-detail-container">
        <div className="product-not-found">
          <h1>Product Not Found</h1>
          <p>The product you're looking for doesn't exist.</p>
          <Link to="/products" className="back-to-products-btn">
            View All Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="product-detail-container">
      <div className="product-detail-content">
        {/* Breadcrumb Navigation */}
        <nav className="breadcrumb">
          <Link to="/">Home</Link>
          <span className="breadcrumb-separator">/</span>
          <Link to="/products">Products</Link>
          <span className="breadcrumb-separator">/</span>
          <span className="breadcrumb-current">{product.name}</span>
        </nav>

        {/* Product Header */}
        <div className="product-header">
          <button onClick={() => navigate(-1)} className="back-button">
            ← Back
          </button>
          <div className="product-category-badge">{product.category}</div>
        </div>

        {/* Main Product Section */}
        <div className="product-main">
          {/* Product Image */}
          <div className="product-image-section">
            <div className="product-image-wrapper">
              {product.image ? (
                <img src={product.image} alt={product.name} className="product-detail-image" />
              ) : (
                <div className="product-image-placeholder">No Image Available</div>
              )}
            </div>
            {product.soldOut && <div className="sold-out-badge">Sold Out</div>}
          </div>

          {/* Product Info */}
          <div className="product-info-section">
            <h1 className="product-title">{product.name}</h1>
            <p className="product-specs-highlight">{product.specs}</p>
            <p className="product-description">{product.description}</p>

            {/* CTA Buttons */}
            <div className="product-cta-buttons">
              <Link to="/quote" className="btn-primary">
                Request Quote
              </Link>
              <Link to="/contact" className="btn-secondary">
                Contact Us
              </Link>
            </div>
          </div>
        </div>

        {/* Technical Specifications */}
        <section className="product-section">
          <h2 className="section-title">Technical Specifications</h2>
          <div className="specs-grid">
            {product.technicalSpecs.wattage && (
              <div className="spec-item">
                <span className="spec-label">Wattage</span>
                <span className="spec-value">{product.technicalSpecs.wattage}</span>
              </div>
            )}
            {product.technicalSpecs.lumens && (
              <div className="spec-item">
                <span className="spec-label">Lumens</span>
                <span className="spec-value">{product.technicalSpecs.lumens}</span>
              </div>
            )}
            {product.technicalSpecs.colorTemp && (
              <div className="spec-item">
                <span className="spec-label">Color Temperature</span>
                <span className="spec-value">{product.technicalSpecs.colorTemp}</span>
              </div>
            )}
            {product.technicalSpecs.cri && (
              <div className="spec-item">
                <span className="spec-label">CRI</span>
                <span className="spec-value">{product.technicalSpecs.cri}</span>
              </div>
            )}
            {product.technicalSpecs.voltage && (
              <div className="spec-item">
                <span className="spec-label">Voltage</span>
                <span className="spec-value">{product.technicalSpecs.voltage}</span>
              </div>
            )}
            {product.technicalSpecs.lifespan && (
              <div className="spec-item">
                <span className="spec-label">Lifespan</span>
                <span className="spec-value">{product.technicalSpecs.lifespan}</span>
              </div>
            )}
            {product.technicalSpecs.warranty && (
              <div className="spec-item">
                <span className="spec-label">Warranty</span>
                <span className="spec-value">{product.technicalSpecs.warranty}</span>
              </div>
            )}
            {product.technicalSpecs.dimming && (
              <div className="spec-item">
                <span className="spec-label">Dimming</span>
                <span className="spec-value">{product.technicalSpecs.dimming}</span>
              </div>
            )}
            {product.technicalSpecs.rating && (
              <div className="spec-item">
                <span className="spec-label">Rating</span>
                <span className="spec-value">{product.technicalSpecs.rating}</span>
              </div>
            )}
          </div>
        </section>

        {/* Features Section */}
        <section className="product-section features-section">
          <h2 className="section-title">Key Features</h2>
          <ul className="features-list">
            {product.features.map((feature, index) => (
              <li key={index} className="feature-item">
                <span className="feature-icon">✓</span>
                <span className="feature-text">{feature}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Applications Section */}
        <section className="product-section applications-section">
          <h2 className="section-title">Ideal Applications</h2>
          <div className="applications-grid">
            {product.applications.map((application, index) => (
              <div key={index} className="application-item">
                <span className="application-icon">●</span>
                <span className="application-text">{application}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Bottom CTA Section */}
        <section className="bottom-cta-section">
          <div className="bottom-cta-content">
            <h2>Ready to Upgrade Your Lighting?</h2>
            <p>Get a custom quote for {product.name} tailored to your specific needs.</p>
            <div className="bottom-cta-buttons">
              <Link to="/quote" className="btn-primary-large">
                Request a Quote
              </Link>
              <Link to="/products" className="btn-outline-large">
                View All Products
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default ProductDetail;
