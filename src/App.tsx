import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ErrorBoundary from "./components/ErrorBoundary";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Products from "./pages/Products";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Quote from "./pages/Quote";
import NotFound from "./pages/NotFound";
import T8TypeA from "./pages/products/T8TypeA";
import T8TypeB from "./pages/products/T8TypeB";
import T8TypeAB from "./pages/products/T8TypeAB";
import Panel from "./pages/products/Panel";
import A19Bulbs from "./pages/products/A19Bulbs";
import VaporTight from "./pages/products/VaporTight";
import FlushMount from "./pages/products/FlushMount";
import Troffer from "./pages/products/Troffer";
import LinearHighBay from "./pages/products/LinearHighBay";
import UFOHighBay from "./pages/products/UFOHighBay";
import FloodLights from "./pages/products/FloodLights";
import RecessedDownlights from "./pages/products/RecessedDownlights";
import ULLogo from "./assets/Certs/UL.png";
import "./App.css";

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <div className="app">
          <Navbar />
          <img src={ULLogo} alt="UL Certified" className="floating-ul-logo" />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/t8-type-a" element={<T8TypeA />} />
            <Route path="/products/t8-type-b" element={<T8TypeB />} />
            <Route path="/products/t8-type-ab" element={<T8TypeAB />} />
            <Route path="/products/panel" element={<Panel />} />
            <Route path="/products/a19-bulbs" element={<A19Bulbs />} />
            <Route path="/products/vapor-tight" element={<VaporTight />} />
            <Route path="/products/flush-mount" element={<FlushMount />} />
            <Route path="/products/troffer" element={<Troffer />} />
            <Route path="/products/linear-high-bay" element={<LinearHighBay />} />
            <Route path="/products/ufo-high-bay" element={<UFOHighBay />} />
            <Route path="/products/flood-lights" element={<FloodLights />} />
            <Route path="/products/recessed-downlights" element={<RecessedDownlights />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/quote" element={<Quote />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </ErrorBoundary>
  );
}

export default App;
