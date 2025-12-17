import React from 'react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  const scrollToProducts = () => {
    const productsSection = document.getElementById('our-products');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full h-[700px] md:h-[800px] bg-gray-900 overflow-hidden">
      {/* Media Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Fallback image while video loads or if it fails */}
        <div
          className="absolute inset-0 bg-[url('/hero-1.png')] bg-cover bg-center"
          aria-hidden="true"
        />
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster="/hero-1.png"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/30" />
      </div>
      
      {/* Content Overlay */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 md:px-0">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg tracking-tight">
          PHOENIX'S PREMIER<br />FLOORING STORE
        </h1>
        <p className="text-lg md:text-xl text-gray-100 mb-8 max-w-2xl drop-shadow-md font-light">
          Discover the perfect foundation for your home with our exclusive selection of top-quality flooring.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <button 
            onClick={scrollToProducts}
            className="bg-yellow-500 hover:bg-yellow-400 text-blue-900 font-bold py-3 px-8 rounded shadow-lg transition transform hover:scale-105"
          >
            SEE OUR PRODUCTS
          </button>
          <Link 
            to="/financing"
            className="bg-white hover:bg-gray-100 text-blue-900 font-bold py-3 px-8 rounded shadow-lg transition transform hover:scale-105 text-center"
          >
            VIEW FINANCING
          </Link>
        </div>
      </div>

    </section>
  );
};

export default Hero;