// Import product images
import A19 from "../assets/products/A19.png";
import FlushMount from "../assets/products/FlushMountCeilingLights .png";
import FloodLights from "../assets/products/LEDFloodlights .png";
import TrofferLights from "../assets/products/LEDTrofferLights .png";
import LinearHighBay from "../assets/products/LinearHighBayLights .png";
import Panel from "../assets/products/PANEL .png";
import RecessedDownlights from "../assets/products/RecessedDownlights .png";
import UFOHighBay from "../assets/products/UFOHighBayLights .png";
import VaporTight from "../assets/products/Vapor-Tight-Lights .png";
import T8s from "../assets/products/T8s.png";

export interface Product {
  id: number;
  slug: string;
  name: string;
  category: string;
  specs: string;
  image: string | null;
  soldOut: boolean;
  description: string;
  features: string[];
  applications: string[];
  technicalSpecs: {
    wattage?: string;
    lumens?: string;
    colorTemp?: string;
    cri?: string;
    voltage?: string;
    lifespan?: string;
    warranty?: string;
    dimming?: string;
    rating?: string;
  };
}

export const products: Product[] = [
  {
    id: 1,
    slug: "led-tube-t8-type-a",
    name: "LED Tube T8 Type A",
    category: "LED Lighting Solutions",
    specs: "Ballast Compatible / A++",
    image: T8s,
    soldOut: false,
    description: "High-efficiency LED T8 tubes designed for direct ballast compatibility. Simply replace your existing fluorescent tubes without rewiring. Energy-efficient lighting solution with instant-on performance.",
    features: [
      "Ballast compatible - plug and play installation",
      "Energy savings up to 50% compared to fluorescent",
      "Instant-on with no warm-up time",
      "Mercury-free and environmentally friendly",
      "Shatterproof construction for safety",
      "Flicker-free operation for eye comfort"
    ],
    applications: [
      "Office buildings and workspaces",
      "Retail stores and showrooms",
      "Schools and educational facilities",
      "Healthcare facilities",
      "Warehouses and storage areas"
    ],
    technicalSpecs: {
      wattage: "18W",
      lumens: "2,200 lumens",
      colorTemp: "4000K / 5000K",
      cri: "≥80",
      voltage: "120-277V AC",
      lifespan: "50,000 hours",
      warranty: "5 years",
      dimming: "Not dimmable",
      rating: "A++"
    }
  },
  {
    id: 2,
    slug: "led-tube-t8-type-b",
    name: "LED Tube T8 Type B",
    category: "LED Lighting Solutions",
    specs: "Ballast Bypass / A++",
    image: T8s,
    soldOut: false,
    description: "Direct wire LED T8 tubes that bypass the ballast entirely for maximum efficiency and reliability. Eliminate ballast maintenance costs while enjoying superior light output and energy savings.",
    features: [
      "Ballast bypass for maximum efficiency",
      "Eliminates ballast maintenance and failures",
      "Lower operating costs and energy consumption",
      "Superior light quality and distribution",
      "Works with most existing fixtures after rewiring",
      "Long-lasting performance with minimal maintenance"
    ],
    applications: [
      "Commercial offices and buildings",
      "Industrial facilities",
      "Parking garages",
      "Cold storage and refrigeration",
      "Manufacturing plants"
    ],
    technicalSpecs: {
      wattage: "18W",
      lumens: "2,400 lumens",
      colorTemp: "4000K / 5000K",
      cri: "≥80",
      voltage: "120-277V AC",
      lifespan: "50,000 hours",
      warranty: "5 years",
      dimming: "Available upon request",
      rating: "A++"
    }
  },
  {
    id: 3,
    slug: "led-tube-t8-type-a-b",
    name: "LED Tube T8 Type A+B",
    category: "LED Lighting Solutions",
    specs: "Hybrid Design / A++",
    image: T8s,
    soldOut: false,
    description: "Versatile hybrid LED tubes that work with or without a ballast. Start with ballast compatibility, then bypass later for optimal efficiency. The most flexible T8 LED solution available.",
    features: [
      "Dual-mode operation: ballast compatible or direct wire",
      "Maximum installation flexibility",
      "Easy upgrade path from Type A to Type B",
      "Excellent light quality and uniformity",
      "Future-proof design for evolving needs",
      "Professional-grade construction"
    ],
    applications: [
      "Mixed retrofit projects",
      "Facilities with varied ballast types",
      "Long-term upgrade planning",
      "Multi-tenant buildings",
      "Educational campuses"
    ],
    technicalSpecs: {
      wattage: "18W",
      lumens: "2,300 lumens",
      colorTemp: "4000K / 5000K",
      cri: "≥80",
      voltage: "120-277V AC",
      lifespan: "50,000 hours",
      warranty: "5 years",
      dimming: "Available upon request",
      rating: "A++"
    }
  },
  {
    id: 4,
    slug: "led-backlit-panel",
    name: "LED Backlit Panel",
    category: "LED Lighting Solutions",
    specs: "3000K - 5000K / A++",
    image: Panel,
    soldOut: false,
    description: "Ultra-slim LED panel lights with edge-lit technology delivering uniform, glare-free illumination. Perfect for modern office spaces, these panels provide exceptional light quality while reducing energy consumption.",
    features: [
      "Ultra-slim profile for modern aesthetics",
      "Edge-lit technology for uniform light distribution",
      "Glare-free, comfortable lighting",
      "Multiple mounting options: recessed, surface, or suspended",
      "Dimmable options available",
      "Long lifespan with minimal maintenance"
    ],
    applications: [
      "Corporate offices and conference rooms",
      "Healthcare facilities and hospitals",
      "Educational institutions",
      "Retail environments",
      "Clean rooms and laboratories"
    ],
    technicalSpecs: {
      wattage: "40W",
      lumens: "4,400 lumens",
      colorTemp: "3000K / 4000K / 5000K",
      cri: "≥80",
      voltage: "120-277V AC",
      lifespan: "50,000 hours",
      warranty: "5 years",
      dimming: "0-10V dimmable",
      rating: "A++"
    }
  },
  {
    id: 5,
    slug: "led-a19-bulbs",
    name: "LED A19 Bulbs",
    category: "LED Lighting Solutions",
    specs: "Multiple Color Temps / A++",
    image: A19,
    soldOut: false,
    description: "Standard A19 LED bulbs that fit any standard socket. Energy-efficient replacement for traditional incandescent bulbs, providing excellent light quality with up to 85% energy savings.",
    features: [
      "Direct replacement for incandescent bulbs",
      "Up to 85% energy savings",
      "Multiple color temperature options",
      "Instant-on, no warm-up time",
      "Mercury-free and safe",
      "Compatible with most fixtures"
    ],
    applications: [
      "Residential lighting",
      "Table and floor lamps",
      "Ceiling fixtures",
      "Hospitality spaces",
      "General purpose lighting"
    ],
    technicalSpecs: {
      wattage: "9W (60W equivalent)",
      lumens: "800 lumens",
      colorTemp: "2700K / 3000K / 4000K / 5000K",
      cri: "≥80",
      voltage: "120V AC",
      lifespan: "25,000 hours",
      warranty: "3 years",
      dimming: "Dimmable versions available",
      rating: "A++"
    }
  },
  {
    id: 6,
    slug: "led-vapor-tight-lights",
    name: "LED Vapor Tight Lights",
    category: "LED Lighting Solutions",
    specs: "IP65 Rated / A++",
    image: VaporTight,
    soldOut: false,
    description: "Heavy-duty IP65-rated vapor-tight fixtures designed for harsh and wet environments. Fully sealed construction protects against dust, moisture, and corrosive elements while delivering powerful illumination.",
    features: [
      "IP65 rated for dust and water resistance",
      "Corrosion-resistant housing",
      "Impact-resistant polycarbonate lens",
      "Sealed against vapors and moisture",
      "Wide operating temperature range",
      "Easy installation with mounting clips"
    ],
    applications: [
      "Car washes and service stations",
      "Food processing facilities",
      "Cold storage and freezers",
      "Parking garages",
      "Industrial and manufacturing plants",
      "Marine environments"
    ],
    technicalSpecs: {
      wattage: "36W",
      lumens: "4,320 lumens",
      colorTemp: "4000K / 5000K",
      cri: "≥70",
      voltage: "120-277V AC",
      lifespan: "50,000 hours",
      warranty: "5 years",
      dimming: "Not dimmable",
      rating: "A++ / IP65"
    }
  },
  {
    id: 7,
    slug: "led-flush-mount-ceiling",
    name: "LED Flush Mount Ceiling",
    category: "LED Lighting Solutions",
    specs: "Low Profile / A++",
    image: FlushMount,
    soldOut: false,
    description: "Low-profile flush mount LED ceiling fixtures perfect for spaces with low ceilings. Modern design with excellent light output provides uniform illumination for residential and commercial applications.",
    features: [
      "Ultra-low profile design",
      "Easy surface mount installation",
      "Uniform light distribution",
      "Modern, clean aesthetics",
      "Energy-efficient operation",
      "Maintenance-free performance"
    ],
    applications: [
      "Residential rooms and hallways",
      "Closets and storage areas",
      "Apartments and condos",
      "Hotels and guest rooms",
      "Small offices"
    ],
    technicalSpecs: {
      wattage: "18W",
      lumens: "1,440 lumens",
      colorTemp: "3000K / 4000K / 5000K",
      cri: "≥80",
      voltage: "120V AC",
      lifespan: "50,000 hours",
      warranty: "5 years",
      dimming: "Not dimmable",
      rating: "A++"
    }
  },
  {
    id: 8,
    slug: "led-troffer-lights-2x4",
    name: "LED Troffer Lights 2x4",
    category: "LED Lighting Solutions",
    specs: "3500K - 5000K / A++",
    image: TrofferLights,
    soldOut: false,
    description: "High-performance 2x4 LED troffer lights designed for drop ceiling installations. Provides exceptional light quality with superior energy efficiency, perfect for commercial and institutional spaces.",
    features: [
      "Standard 2x4 drop ceiling fit",
      "High lumen output with low wattage",
      "Uniform light distribution",
      "Easy installation and maintenance",
      "Multiple color temperature options",
      "Professional-grade construction"
    ],
    applications: [
      "Office buildings and workspaces",
      "Educational institutions",
      "Healthcare facilities",
      "Retail spaces",
      "Government buildings"
    ],
    technicalSpecs: {
      wattage: "40W",
      lumens: "5,200 lumens",
      colorTemp: "3500K / 4000K / 5000K",
      cri: "≥80",
      voltage: "120-277V AC",
      lifespan: "50,000 hours",
      warranty: "5 years",
      dimming: "0-10V dimmable",
      rating: "A++"
    }
  },
  {
    id: 9,
    slug: "led-linear-high-bay",
    name: "LED Linear High Bay",
    category: "LED Lighting Solutions",
    specs: "High Output / A++",
    image: LinearHighBay,
    soldOut: false,
    description: "Powerful linear LED high bay fixtures for large commercial and industrial spaces with high ceilings. Exceptional light output with superior energy efficiency replaces metal halide and fluorescent high bays.",
    features: [
      "High lumen output for tall ceilings",
      "Wide beam angle for broad coverage",
      "Robust aluminum housing for heat dissipation",
      "Multiple mounting options",
      "Superior energy efficiency",
      "Instant-on with no warm-up time"
    ],
    applications: [
      "Warehouses and distribution centers",
      "Manufacturing facilities",
      "Gymnasiums and recreation centers",
      "Retail big box stores",
      "Aircraft hangars",
      "Convention centers"
    ],
    technicalSpecs: {
      wattage: "240W",
      lumens: "33,600 lumens",
      colorTemp: "4000K / 5000K",
      cri: "≥70",
      voltage: "120-277V AC",
      lifespan: "50,000 hours",
      warranty: "5 years",
      dimming: "0-10V dimmable",
      rating: "A++"
    }
  },
  {
    id: 10,
    slug: "led-ufo-high-bay-lights",
    name: "LED UFO High Bay Lights",
    category: "LED Lighting Solutions",
    specs: "150W / 130 LM/W / A++",
    image: UFOHighBay,
    soldOut: false,
    description: "Compact UFO-style LED high bay lights with industry-leading efficacy of 130 lumens per watt. Modern design with exceptional performance for warehouses, factories, and large commercial spaces.",
    features: [
      "Compact UFO design saves space",
      "Industry-leading 130 LM/W efficacy",
      "Wide 120° beam angle",
      "Advanced thermal management",
      "Lightweight aluminum construction",
      "Easy installation with hook mounting"
    ],
    applications: [
      "Warehouses and logistics centers",
      "Manufacturing plants",
      "Large retail stores",
      "Sports facilities",
      "Auto repair shops",
      "Industrial workspaces"
    ],
    technicalSpecs: {
      wattage: "150W",
      lumens: "19,500 lumens",
      colorTemp: "5000K",
      cri: "≥70",
      voltage: "120-277V AC",
      lifespan: "50,000 hours",
      warranty: "5 years",
      dimming: "0-10V dimmable",
      rating: "A++"
    }
  },
  {
    id: 11,
    slug: "led-flood-lights",
    name: "LED Flood Lights",
    category: "LED Lighting Solutions",
    specs: "Outdoor Rated / A++",
    image: FloodLights,
    soldOut: false,
    description: "Heavy-duty outdoor LED flood lights built to withstand harsh weather conditions. Provides powerful, focused illumination for security, architectural, and landscape lighting applications.",
    features: [
      "Weather-resistant construction (IP65)",
      "Wide flood beam pattern",
      "Adjustable mounting bracket",
      "Corrosion-resistant finish",
      "Superior heat dissipation",
      "Long-lasting outdoor performance"
    ],
    applications: [
      "Building exterior security lighting",
      "Parking lot illumination",
      "Landscape and architectural lighting",
      "Sports fields and courts",
      "Signage lighting",
      "Perimeter security"
    ],
    technicalSpecs: {
      wattage: "100W",
      lumens: "13,000 lumens",
      colorTemp: "5000K",
      cri: "≥70",
      voltage: "120-277V AC",
      lifespan: "50,000 hours",
      warranty: "5 years",
      dimming: "Not dimmable",
      rating: "A++ / IP65"
    }
  },
  {
    id: 12,
    slug: "led-recessed-downlights",
    name: "LED Recessed Downlights",
    category: "LED Lighting Solutions",
    specs: "3000K - 5000K / A++",
    image: RecessedDownlights,
    soldOut: false,
    description: "Versatile LED recessed downlights perfect for new construction or retrofit applications. Provides clean, focused illumination with excellent color rendering and energy efficiency.",
    features: [
      "Standard recessed can compatibility",
      "Retrofit and new construction options",
      "Adjustable trim for directional lighting",
      "Excellent color rendering",
      "Airtight construction",
      "IC rated for insulated ceilings"
    ],
    applications: [
      "Residential living spaces",
      "Commercial offices",
      "Retail displays",
      "Hospitality venues",
      "Healthcare facilities",
      "Museums and galleries"
    ],
    technicalSpecs: {
      wattage: "12W",
      lumens: "1,000 lumens",
      colorTemp: "3000K / 4000K / 5000K",
      cri: "≥90",
      voltage: "120V AC",
      lifespan: "50,000 hours",
      warranty: "5 years",
      dimming: "Dimmable",
      rating: "A++ / IC Rated"
    }
  }
];

// Helper function to get product by ID
export const getProductById = (id: number): Product | undefined => {
  return products.find(product => product.id === id);
};

// Helper function to get product by slug
export const getProductBySlug = (slug: string): Product | undefined => {
  return products.find(product => product.slug === slug);
};
