import React from 'react';

const LogoBanner: React.FC = () => {
  const logos = [
    {
      name: 'AMC Theatres',
      image: '/Logos/AMC_Theatres_logo.svg.webp',
    },
    {
      name: 'Cambria Hotels',
      image: '/Logos/cambria-hotels.webp',
    },
    {
      name: 'Coach',
      image: '/Logos/Coach-logo.webp',
    },
    {
      name: 'CSL',
      image: '/Logos/csl_logo_4.webp',
    },
    {
      name: 'Hilton',
      image: '/Logos/hilton-international-logo-black-and-white.webp',
    },
    {
      name: 'Homewood Suites by Hilton',
      image: '/Logos/homewood-suites-by-hilton-expands-footprint-in-arizona.webp',
    },
    {
      name: 'University of Arizona',
      image: '/Logos/uofa.webp',
    },
  ];

  const allLogos = [...logos, ...logos];

  return (
    <>
      <style>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .logo-track {
          display: flex;
          width: fit-content;
          animation: scroll-left 30s linear infinite;
        }
        .logo-track:hover {
          animation-play-state: paused;
        }
        @media (max-width: 768px) {
          .logo-track {
            animation: scroll-left 20s linear infinite;
          }
        }
      `}</style>
      <section className="py-12 bg-gray-50 border-y border-gray-200">
        <div className="text-center mb-8">
          <p className="text-sm text-gray-600 uppercase tracking-wider font-semibold">
            Our Past Project Partners
          </p>
        </div>
        <div className="overflow-hidden">
          <div className="logo-track">
            {allLogos.map((logo, index) => (
              <div
                key={index}
                className="flex items-center justify-center flex-shrink-0 px-8 md:px-12"
              >
                <img
                  src={logo.image}
                  alt={logo.name}
                  className="h-12 md:h-16 w-auto object-contain"
                  style={{ minWidth: '100px', maxWidth: '160px' }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default LogoBanner;

