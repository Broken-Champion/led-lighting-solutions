import { useState, useEffect, useRef } from "react";
import "./ProductCarousel.css";

// Import actual product images
import A19 from "../assets/products/A19.png";
import FlushMount from "../assets/products/FlushMountCeilingLights .png";
import FloodLights from "../assets/products/LEDFloodlights .png";
import TrofferLights from "../assets/products/LEDTrofferLights .png";
import LinearHighBay from "../assets/products/LinearHighBayLights .png";
import Panel from "../assets/products/PANEL .png";
import RecessedDownlights from "../assets/products/RecessedDownlights .png";
import UFOHighBay from "../assets/products/UFOHighBayLights .png";
import VaporTight from "../assets/products/Vapor-Tight-Lights .png";

interface Product {
  id: number;
  name: string;
  category: string;
  specs: string;
  image: string | null;
  soldOut: boolean;
}

const products: Product[] = [
  {
    id: 1,
    name: "LED Tube T8 Type A",
    category: "LED Lighting Solutions",
    specs: "Ballast Compatible / A++",
    image: null,
    soldOut: false,
  },
  {
    id: 2,
    name: "LED Tube T8 Type B",
    category: "LED Lighting Solutions",
    specs: "Ballast Bypass / A++",
    image: null,
    soldOut: false,
  },
  {
    id: 3,
    name: "LED Tube T8 Type A+B",
    category: "LED Lighting Solutions",
    specs: "Hybrid Design / A++",
    image: null,
    soldOut: false,
  },
  {
    id: 4,
    name: "LED Backlit Panel",
    category: "LED Lighting Solutions",
    specs: "3000K - 5000K / A++",
    image: Panel,
    soldOut: false,
  },
  {
    id: 5,
    name: "LED A19 Bulbs",
    category: "LED Lighting Solutions",
    specs: "Multiple Color Temps / A++",
    image: A19,
    soldOut: false,
  },
  {
    id: 6,
    name: "LED Vapor Tight Lights",
    category: "LED Lighting Solutions",
    specs: "IP65 Rated / A++",
    image: VaporTight,
    soldOut: false,
  },
  {
    id: 7,
    name: "LED Flush Mount Ceiling",
    category: "LED Lighting Solutions",
    specs: "Low Profile / A++",
    image: FlushMount,
    soldOut: false,
  },
  {
    id: 8,
    name: "LED Troffer Lights 2x4",
    category: "LED Lighting Solutions",
    specs: "3500K - 5000K / A++",
    image: TrofferLights,
    soldOut: false,
  },
  {
    id: 9,
    name: "LED Linear High Bay",
    category: "LED Lighting Solutions",
    specs: "High Output / A++",
    image: LinearHighBay,
    soldOut: false,
  },
  {
    id: 10,
    name: "LED UFO High Bay Lights",
    category: "LED Lighting Solutions",
    specs: "150W / 130 LM/W / A++",
    image: UFOHighBay,
    soldOut: false,
  },
  {
    id: 11,
    name: "LED Flood Lights",
    category: "LED Lighting Solutions",
    specs: "Outdoor Rated / A++",
    image: FloodLights,
    soldOut: false,
  },
  {
    id: 12,
    name: "LED Recessed Downlights",
    category: "LED Lighting Solutions",
    specs: "3000K - 5000K / A++",
    image: RecessedDownlights,
    soldOut: false,
  },
];

function ProductCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);
  const animationTimeoutRef = useRef<NodeJS.Timeout | null>(null);

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
    return () => {
      stopAutoPlay();
      if (animationTimeoutRef.current) {
        clearTimeout(animationTimeoutRef.current);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleNext = (): void => {
    if (isAnimating) return;
    setIsAnimating(true);

    // After animation completes (cards have moved left and leftmost is under left barrier)
    animationTimeoutRef.current = setTimeout(() => {
      // Remove the leftmost card and update index
      setCurrentIndex((prev) => (prev + 1) % products.length);
      setIsAnimating(false);
    }, 700);
  };

  const handlePrev = (): void => {
    if (isAnimating) return;
    // For previous, update index first to add card on the left
    setCurrentIndex((prev) => (prev - 1 + products.length) % products.length);
    setIsAnimating(true);

    animationTimeoutRef.current = setTimeout(() => {
      setIsAnimating(false);
    }, 700);
  };

  const handleDotClick = (index: number): void => {
    if (isAnimating || index === currentIndex) return;

    setIsAnimating(true);
    setCurrentIndex(index);

    animationTimeoutRef.current = setTimeout(() => {
      setIsAnimating(false);
    }, 700);

    stopAutoPlay();
    startAutoPlay();
  };

  // Get visible products: 3 visible + 1 under right barrier ready to slide in
  const getVisibleProducts = () => {
    const visible = [];
    for (let i = 0; i < 4; i++) {
      const index = (currentIndex + i) % products.length;
      visible.push({
        ...products[index],
        displayIndex: i,
        key: `${products[index].id}-${i}`,
      });
    }
    return visible;
  };

  return (
    <div className="product-carousel-section">
      <div className="carousel-container">
        <h2 className="carousel-title">Our Premium LED Solutions</h2>
        <p className="carousel-subtitle">
          Industry-Leading Lighting Technology for Commercial Applications
        </p>

        <div className="carousel-wrapper">
          <div className="carousel-viewport">
            <div className={`carousel-track ${isAnimating ? "animating" : ""}`}>
              {getVisibleProducts().map((product, idx) => (
                <div
                  key={`${product.id}-${currentIndex}-${idx}`}
                  className="product-card"
                >
                  {product.soldOut && (
                    <div className="sold-out-badge">SOLD OUT</div>
                  )}

                  <div className="product-image">
                    {product.image ? (
                      <img src={product.image} alt={product.name} />
                    ) : (
                      <div className="product-placeholder">
                        <svg width="100%" height="100%" viewBox="0 0 200 200">
                          <rect
                            width="200"
                            height="200"
                            fill="rgba(0, 102, 255, 0.08)"
                            rx="10"
                          />
                          <text
                            x="100"
                            y="90"
                            fill="#0066FF"
                            fontSize="48"
                            textAnchor="middle"
                            dominantBaseline="middle"
                          >
                            ⚡
                          </text>
                          <text
                            x="100"
                            y="120"
                            fill="#0066FF"
                            fontSize="10"
                            fontWeight="600"
                            textAnchor="middle"
                            dominantBaseline="middle"
                          >
                            Coming Soon
                          </text>
                        </svg>
                      </div>
                    )}
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
        </div>

        <div className="carousel-navigation">
          <button
            className="carousel-nav-btn"
            onClick={handlePrev}
            aria-label="Previous products"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="15 18 9 12 15 6" />
            </svg>
            <span>Previous</span>
          </button>
          <button
            className="carousel-nav-btn"
            onClick={handleNext}
            aria-label="Next products"
          >
            <span>Next</span>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>

        <div className="carousel-indicators">
          {products.map((_, index) => (
            <div
              key={index}
              className={`indicator ${index === currentIndex ? "active" : ""}`}
              onClick={() => handleDotClick(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductCarousel;
