import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  const [videoReady, setVideoReady] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const scrollToProducts = () => {
    const productsSection = document.getElementById('our-products');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleCanPlay = () => {
      setVideoReady(true);
      video.play().catch(() => {
        // Auto-play might fail, but we still show the video
        setVideoReady(true);
      });
    };

    const handleLoadedData = () => {
      setVideoReady(true);
    };

    video.addEventListener('canplay', handleCanPlay);
    video.addEventListener('loadeddata', handleLoadedData);

    // Force load the video
    video.load();

    return () => {
      video.removeEventListener('canplay', handleCanPlay);
      video.removeEventListener('loadeddata', handleLoadedData);
    };
  }, []);

  return (
    <section className="relative w-full h-[700px] md:h-[800px] bg-gray-900 overflow-hidden">
      {/* Media Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Fallback image while video loads or if it fails */}
        <div
          className="absolute inset-0 bg-[url('/hotel-thumbnail.png')] bg-cover bg-center"
          aria-hidden="true"
        />
        <div className={`absolute inset-0 overflow-hidden transition-opacity duration-300 ${videoReady ? 'opacity-100' : 'opacity-0'}`}>
          <video
            ref={videoRef}
            className="absolute w-full h-full object-cover"
            style={{ 
              objectPosition: 'center top',
              height: '120%',
              top: 0,
              left: 0
            }}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster="/hotel-thumbnail.png"
          >
            <source src="/hotel.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="absolute inset-0 bg-black/30" />
      </div>
      
      {/* Content Overlay */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 md:px-0">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg tracking-tight">
          PHOENIX'S PREMIER<br />FLOORING COMPANY
        </h1>
        <p className="text-lg md:text-xl text-gray-100 mb-8 max-w-2xl drop-shadow-md font-light">
          Discover the perfect foundation for your commercial project with our exclusive selection of top-quality flooring.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <button 
            onClick={scrollToProducts}
            className="bg-yellow-500 hover:bg-yellow-400 text-blue-900 font-bold py-3 px-8 rounded shadow-lg transition transform hover:scale-105"
          >
            SEE OUR PRODUCTS
          </button>
          <Link 
            to="/contact"
            className="bg-white hover:bg-gray-100 text-blue-900 font-bold py-3 px-8 rounded shadow-lg transition transform hover:scale-105 text-center"
          >
            GET A QUOTE
          </Link>
        </div>
      </div>

    </section>
  );
};

export default Hero;