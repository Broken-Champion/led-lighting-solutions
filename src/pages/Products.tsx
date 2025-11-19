import "./Products.css";
import A19 from "../assets/products/A19.png";
import FlushMount from "../assets/products/FlushMountCeilingLights .png";
import FloodLights from "../assets/products/LEDFloodlights .png";
import TrofferLights from "../assets/products/LEDTrofferLights .png";
import LinearHighBay from "../assets/products/LinearHighBayLights .png";
import Panel from "../assets/products/PANEL .png";
import RecessedDownlights from "../assets/products/RecessedDownlights .png";
import UFOHighBay from "../assets/products/UFOHighBayLights .png";
import VaporTight from "../assets/products/Vapor-Tight-Lights .png";

function Products() {
  const productCategories = [
    {
      id: 1,
      name: "LED Tube T8 Type A",
      image: null, // Placeholder - awaiting image
      description:
        "Plug-and-play LED tubes compatible with existing electronic ballasts",
      features: [
        "Works with Electronic Ballasts",
        "Easy Installation",
        "Energy Efficient",
        "Long Lifespan",
      ],
      applications: ["Offices", "Retail Stores", "Schools", "Warehouses"],
    },
    {
      id: 2,
      name: "LED Tube T8 Type B",
      image: null, // Placeholder - awaiting image
      description:
        "Direct wire LED tubes that bypass the ballast for maximum efficiency",
      features: [
        "Ballast Bypass Design",
        "Higher Efficiency",
        "Reduced Maintenance",
        "Lower Operating Costs",
      ],
      applications: [
        "Commercial Buildings",
        "Industrial Facilities",
        "Parking Garages",
        "Retail Spaces",
      ],
    },
    {
      id: 3,
      name: "LED Tube T8 Type A+B",
      image: null, // Placeholder - awaiting image
      description:
        "Hybrid LED tubes that work with or without a ballast for maximum flexibility",
      features: [
        "Dual Compatibility",
        "Flexible Installation",
        "Future-Proof Solution",
        "Easy Upgrades",
      ],
      applications: [
        "Mixed Lighting Systems",
        "Retrofit Projects",
        "Commercial Spaces",
        "Industrial Sites",
      ],
    },
    {
      id: 4,
      name: "LED Backlit Panel",
      image: Panel,
      description:
        "Ultra-thin, edge-lit LED panels providing uniform, glare-free illumination",
      features: [
        "Uniform Light Distribution",
        "Ultra-Slim Design",
        "Energy Star Certified",
        "Dimmable Options",
      ],
      applications: [
        "Office Ceilings",
        "Conference Rooms",
        "Healthcare Facilities",
        "Retail Environments",
      ],
    },
    {
      id: 5,
      name: "LED A19 Bulbs",
      image: A19,
      description:
        "Standard LED bulbs available in multiple color temperatures to suit any environment",
      features: [
        "Multiple Color Temperatures",
        "Energy Efficient",
        "Long Lasting",
        "Instant On",
      ],
      applications: [
        "Residential",
        "Hospitality",
        "Retail Display",
        "General Lighting",
      ],
    },
    {
      id: 6,
      name: "LED Vapor Tight Lights",
      image: VaporTight,
      description:
        "Sealed LED fixtures designed for wet, dusty, and harsh environments",
      features: [
        "IP65 Rated",
        "Impact Resistant",
        "Corrosion Proof",
        "Easy Maintenance",
      ],
      applications: [
        "Parking Garages",
        "Car Washes",
        "Food Processing",
        "Industrial Facilities",
      ],
    },
    {
      id: 7,
      name: "LED Flush Mount Ceiling",
      image: FlushMount,
      description:
        "Low-profile LED fixtures that mount directly to ceilings for clean, modern look",
      features: [
        "Space-Saving Design",
        "Easy Installation",
        "Uniform Illumination",
        "Multiple Sizes",
      ],
      applications: [
        "Hallways",
        "Closets",
        "Utility Rooms",
        "Residential Spaces",
      ],
    },
    {
      id: 8,
      name: "LED Troffer Lights 2x4",
      image: TrofferLights,
      description:
        "Drop ceiling LED panels designed for standard 2x4 grid systems",
      features: [
        "Fits Standard Grids",
        "High Lumen Output",
        "Energy Star Rated",
        "DLC Listed",
      ],
      applications: [
        "Office Buildings",
        "Schools",
        "Healthcare",
        "Retail Stores",
      ],
    },
    {
      id: 9,
      name: "LED Linear High Bay",
      image: LinearHighBay,
      description:
        "High-output linear fixtures for large spaces with high ceilings",
      features: [
        "High Lumen Output",
        "Wide Beam Angle",
        "Linkable Design",
        "Industrial Grade",
      ],
      applications: [
        "Warehouses",
        "Manufacturing",
        "Distribution Centers",
        "Sports Facilities",
      ],
    },
    {
      id: 10,
      name: "LED UFO High Bay Lights",
      image: UFOHighBay,
      description:
        "Compact, high-performance LED fixtures for industrial and commercial high bay applications",
      features: [
        "Up to 150W Power",
        "130+ LM/W Efficiency",
        "IP65 Rated",
        "5-Year Warranty",
      ],
      applications: [
        "Warehouses",
        "Factories",
        "Gymnasiums",
        "Large Retail Spaces",
      ],
    },
    {
      id: 11,
      name: "LED Flood Lights",
      image: FloodLights,
      description:
        "Powerful outdoor LED flood lights for security and area lighting",
      features: [
        "Weather Resistant",
        "High Brightness",
        "Wide Coverage",
        "Adjustable Mounting",
      ],
      applications: [
        "Building Exteriors",
        "Parking Lots",
        "Sports Fields",
        "Security Lighting",
      ],
    },
    {
      id: 12,
      name: "LED Recessed Downlights",
      image: RecessedDownlights,
      description:
        "Sleek, recessed LED fixtures for modern ceiling installations",
      features: [
        "Low Profile Design",
        "Directional Lighting",
        "Dimmable Options",
        "Easy Retrofit",
      ],
      applications: ["Residential", "Offices", "Retail Display", "Hospitality"],
    },
  ];

  return (
    <div className="products-page">
      <div className="products-content">
        <div className="section-container">
          <div className="products-intro">
            <h2>Premium LED Lighting Solutions</h2>
            <p>
              LED Lighting Solutions offers a complete range of commercial-grade
              LED products engineered for maximum efficiency, longevity, and
              performance. All products are manufactured in our ISO 9001
              certified facilities and backed by industry-leading warranties.
            </p>
          </div>

          <div className="products-grid">
            {productCategories.map((product) => (
              <div key={product.id} className="product-category-card">
                {product.image ? (
                  <div className="product-image">
                    <img src={product.image} alt={product.name} />
                  </div>
                ) : (
                  <div className="product-icon">⚡</div>
                )}
                <h3>{product.name}</h3>
                <p className="product-description">{product.description}</p>

                <div className="product-features">
                  <h4>Key Features:</h4>
                  <ul>
                    {product.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <div className="product-applications">
                  <h4>Applications:</h4>
                  <div className="application-tags">
                    {product.applications.map((app, index) => (
                      <span key={index} className="app-tag">
                        {app}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="products-cta">
            <h2>Need Help Choosing?</h2>
            <p>
              Our lighting specialists are ready to help you select the perfect
              products for your project
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
    </div>
  );
}

export default Products;
