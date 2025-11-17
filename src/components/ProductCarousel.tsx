import { useState, useEffect, useRef } from 'react';
import './ProductCarousel.css';

interface Product {
    id: number;
    name: string;
    category: string;
    specs: string;
    image: string;
    soldOut: boolean;
}

const products: Product[] = [
    {
        id: 1,
        name: 'LED Troffer Lights 2x2',
        category: 'MasterPro',
        specs: '3500K - 5000K / A++',
        image: '/products/troffer-2x2.png',
        soldOut: false
    },
    {
        id: 2,
        name: 'LED Troffer Lights 2x4',
        category: 'MasterPro',
        specs: '3500K - 5000K / A++',
        image: '/products/troffer-2x4.png',
        soldOut: false
    },
    {
        id: 3,
        name: 'LED Linear High Bay Lights',
        category: 'MasterPro',
        specs: '4000K - 5000K / A++',
        image: '/products/linear-highbay.png',
        soldOut: false
    },
    {
        id: 4,
        name: 'LED UFO High Bay Lights',
        category: 'MasterPro',
        specs: '5000K / A++',
        image: '/products/ufo-highbay.png',
        soldOut: false
    },
    {
        id: 5,
        name: 'LED Panel Lights',
        category: 'MasterPro',
        specs: '3000K - 5000K / A++',
        image: '/products/panel.png',
        soldOut: false
    },
    {
        id: 6,
        name: 'LED T8 Tube Lights',
        category: 'MasterPro',
        specs: '4000K - 6500K / A++',
        image: '/products/t8-tube.png',
        soldOut: false
    },
    {
        id: 7,
        name: 'LED Shop Lights',
        category: 'MasterPro',
        specs: '5000K / A++',
        image: '/products/shop-light.png',
        soldOut: false
    },
    {
        id: 8,
        name: 'LED Corn Bulbs',
        category: 'MasterPro',
        specs: '3000K - 6000K / A++',
        image: '/products/corn-bulb.png',
        soldOut: false
    },
    {
        id: 9,
        name: 'LED Wall Pack Lights',
        category: 'MasterPro',
        specs: '5000K / A++',
        image: '/products/wall-pack.png',
        soldOut: false
    },
    {
        id: 10,
        name: 'LED Canopy Lights',
        category: 'MasterPro',
        specs: '4000K - 5000K / A++',
        image: '/products/canopy.png',
        soldOut: false
    },
    {
        id: 11,
        name: 'LED Parking Lot Lights',
        category: 'MasterPro',
        specs: '5000K / A++',
        image: '/products/parking-lot.png',
        soldOut: false
    },
    {
        id: 12,
        name: 'LED Flood Lights',
        category: 'MasterPro',
        specs: '3000K - 6000K / A++',
        image: '/products/flood-light.png',
        soldOut: false
    },
    {
        id: 13,
        name: 'LED Strip Lights',
        category: 'MasterPro',
        specs: 'RGB / 2700K - 6500K / A++',
        image: '/products/strip-light.png',
        soldOut: false
    },
    {
        id: 14,
        name: 'LED Downlights',
        category: 'MasterPro',
        specs: '3000K - 5000K / A++',
        image: '/products/downlight.png',
        soldOut: false
    },
    {
        id: 15,
        name: 'LED Track Lights',
        category: 'MasterPro',
        specs: '3000K - 4000K / A++',
        image: '/products/track-light.png',
        soldOut: false
    }
];

function ProductCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

    const startAutoPlay = (): void => {
        stopAutoPlay();
        autoPlayRef.current = setInterval(() => {
            handleNext();
        }, 3000);
    };

    const stopAutoPlay = (): void => {
        if (autoPlayRef.current) {
            clearInterval(autoPlayRef.current);
        }
    };

    useEffect(() => {
        startAutoPlay();
        return () => stopAutoPlay();
    }, []);

    const handleNext = (): void => {
        if (isAnimating) return;
        setIsAnimating(true);
        setCurrentIndex((prev) => (prev + 1) % products.length);
        setTimeout(() => setIsAnimating(false), 700);
    };

    const handlePrev = (): void => {
        if (isAnimating) return;
        setIsAnimating(true);
        setCurrentIndex((prev) => (prev - 1 + products.length) % products.length);
        setTimeout(() => setIsAnimating(false), 700);
        stopAutoPlay();
        startAutoPlay();
    };

    const handleDotClick = (index: number): void => {
        if (isAnimating || index === currentIndex) return;
        setIsAnimating(true);
        setCurrentIndex(index);
        setTimeout(() => setIsAnimating(false), 700);
        stopAutoPlay();
        startAutoPlay();
    };

    // Get 3 visible products with proper wrapping - create extended array for smooth scrolling
    const getVisibleProducts = () => {
        const visible = [];
        // Show one before, three current, and one after for smooth infinite scroll
        for (let i = -1; i < 4; i++) {
            const index = (currentIndex + i + products.length) % products.length;
            visible.push({ ...products[index], displayIndex: i, key: `${products[index].id}-${i}` });
        }
        return visible;
    };

    return (
        <div className="product-carousel-section">
            <div className="carousel-container">
                <h2 className="carousel-title">Our Premium LED Solutions</h2>
                <p className="carousel-subtitle">Industry-Leading Lighting Technology for Commercial Applications</p>

                <div className="carousel-wrapper">
                    <button
                        className="carousel-arrow carousel-arrow-left"
                        onClick={handlePrev}
                        aria-label="Previous"
                        disabled={isAnimating}
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                            <polyline points="15 18 9 12 15 6"></polyline>
                        </svg>
                    </button>

                    <div className="carousel-viewport">
                        <div 
                            className={`carousel-track ${isAnimating ? 'animating' : ''}`}
                            style={{
                                transform: `translateX(calc(-1 * (${100 / 3}% + 2rem)))`
                            }}
                        >
                            {getVisibleProducts().map((product, idx) => (
                                <div key={`${product.id}-${currentIndex}-${idx}`} className="product-card">
                                    {product.soldOut && <div className="sold-out-badge">SOLD OUT</div>}

                                    <div className="product-image">
                                        <div className="product-placeholder">
                                            <svg width="100%" height="100%" viewBox="0 0 200 200">
                                                <rect width="200" height="200" fill="rgba(255, 255, 255, 0.1)" rx="10" />
                                                <text x="100" y="100" fill="white" fontSize="12" textAnchor="middle" dominantBaseline="middle">
                                                    {product.name}
                                                </text>
                                            </svg>
                                        </div>
                                    </div>

                                    <div className="product-info">
                                        <p className="product-category">{product.category}</p>
                                        <h3 className="product-name">{product.name}</h3>
                                        <p className="product-specs">{product.specs}</p>
                                        <button className="product-detail-btn">Detail</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <button
                        className="carousel-arrow carousel-arrow-right"
                        onClick={handleNext}
                        aria-label="Next"
                        disabled={isAnimating}
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                            <polyline points="9 18 15 12 9 6"></polyline>
                        </svg>
                    </button>
                </div>

                <div className="carousel-indicators">
                    {products.map((_, index) => (
                        <div
                            key={index}
                            className={`indicator ${index === currentIndex ? 'active' : ''}`}
                            onClick={() => handleDotClick(index)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ProductCarousel;
