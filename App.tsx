import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import Hardwood from './pages/Hardwood';
import Carpet from './pages/Carpet';
import Tile from './pages/Tile';
import LuxuryVinyl from './pages/LuxuryVinyl';
import Laminate from './pages/Laminate';
import AllFlooringProducts from './pages/AllFlooringProducts';
import Commercial from './pages/Commercial';
import Residential from './pages/Residential';
import ProjectGallery from './pages/ProjectGallery';
import PolishedConcrete from './pages/PolishedConcrete';
import FloorRestoration from './pages/FloorRestoration';
import PhoenixCommercial from './pages/PhoenixCommercial';
import ScottsdaleCommercial from './pages/ScottsdaleCommercial';
import StainedConcrete from './pages/StainedConcrete';
import EpoxyFlooring from './pages/EpoxyFlooring';
import MoistureTesting from './pages/MoistureTesting';

const App: React.FC = () => {
  return (
        <Router>
          <ScrollToTop />
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/all-flooring-products" element={<AllFlooringProducts />} />
            <Route path="/commercial" element={<Commercial />} />
            <Route path="/residential" element={<Residential />} />
            <Route path="/project-gallery" element={<ProjectGallery />} />
            <Route path="/hardwood" element={<Hardwood />} />
            <Route path="/carpet" element={<Carpet />} />
            <Route path="/tile" element={<Tile />} />
            <Route path="/luxury-vinyl" element={<LuxuryVinyl />} />
            <Route path="/laminate" element={<Laminate />} />
            <Route path="/polished-concrete" element={<PolishedConcrete />} />
            <Route path="/floor-restoration" element={<FloorRestoration />} />
            <Route path="/commercial-flooring-phoenix" element={<PhoenixCommercial />} />
            <Route path="/commercial-flooring-scottsdale" element={<ScottsdaleCommercial />} />
            <Route path="/stained-concrete" element={<StainedConcrete />} />
            <Route path="/epoxy-flooring" element={<EpoxyFlooring />} />
            <Route path="/moisture-testing" element={<MoistureTesting />} />
            {/* Redirect old URLs */}
            {/* Redirect to Location-specific Commercial pages */}
            <Route path="/commercial-flooring-installation-phoenix" element={<Navigate to="/commercial-flooring-phoenix" replace />} />
            <Route path="/commercial-flooring-company-phoenix" element={<Navigate to="/commercial-flooring-phoenix" replace />} />
            <Route path="/flooring-contractor-phoenix-commercial-flooring-installation" element={<Navigate to="/commercial-flooring-phoenix" replace />} />
            <Route path="/commercial-flooring-contractors-scottsdale" element={<Navigate to="/commercial-flooring-scottsdale" replace />} />
            <Route path="/commercial-flooring-contractor-scottsdale-2" element={<Navigate to="/commercial-flooring-scottsdale" replace />} />
            <Route path="/commercial-flooring-company-scottsdale-commercial-flooring-installation" element={<Navigate to="/commercial-flooring-scottsdale" replace />} />
            <Route path="/commercial-flooring-contractors-scottsdale-commercial-flooring-companies-scottsdale" element={<Navigate to="/commercial-flooring-scottsdale" replace />} />
            <Route path="/how-commercial-flooring-contractors-in-scottsdale-help-you-create-an-attractive-and-highly-functional-space" element={<Navigate to="/commercial-flooring-scottsdale" replace />} />
            {/* Redirect to general Commercial page */}
            <Route path="/commercial-flooring-flooring-supplier" element={<Navigate to="/commercial" replace />} />
            
            {/* Redirect to Polished Concrete page - Concrete polishing/staining services */}
            <Route path="/commercial-concrete-polishing-scottsdale" element={<Navigate to="/polished-concrete" replace />} />
            <Route path="/polished-sealed-concrete-phoenix" element={<Navigate to="/polished-concrete" replace />} />
            <Route path="/information-on-concrete-honing-in-scottsdale" element={<Navigate to="/polished-concrete" replace />} />
            
            {/* Redirect to Tile page - Tile product specific */}
            <Route path="/hand-scraped-wood-look-porcelain-tile-supplier" element={<Navigate to="/tile" replace />} />
            
            {/* Redirect to Hardwood page - Hardwood specific */}
            <Route path="/hardwood-flooring-contractor-phoenix" element={<Navigate to="/hardwood" replace />} />
            
            {/* Redirect to Floor Restoration page - Restoration services */}
            <Route path="/floor-restoration-contractor-phoenix" element={<Navigate to="/floor-restoration" replace />} />
            
            {/* Redirect to Residential page - Residential/home specific */}
            <Route path="/home-flooring-contractor-phoenix" element={<Navigate to="/residential" replace />} />
            
            {/* Redirect to About page - Informational/content pages */}
            <Route path="/testing" element={<Navigate to="/about" replace />} />
            <Route path="/events" element={<Navigate to="/about" replace />} />
            <Route path="/reviews" element={<Navigate to="/about" replace />} />
            <Route path="/blog" element={<Navigate to="/about" replace />} />
          </Routes>
      </main>

      <Footer />
      
      {/* Elfsight All-in-One Chat */}
      <div className="elfsight-app-8d6fce49-bdbb-4276-a2df-2a4134016a6a" data-elfsight-app-lazy></div>
    </div>
    </Router>
  );
};

export default App;