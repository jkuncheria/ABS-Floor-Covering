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
    {
      name: 'HopSocial',
      image: '/Logos/hopsocial.webp',
    },
    {
      name: 'Embassy',
      image: '/Logos/embassy.webp',
    },
    {
      name: 'Partner',
      image: '/Logos/Untitled+design+(1).webp',
    },
  ];

  // Duplicate logos for seamless infinite scroll
  const duplicatedLogos = [...logos, ...logos];

  return (
    <>
      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 6s linear infinite;
          will-change: transform;
        }
        @media (min-width: 768px) {
          .animate-scroll {
            animation: scroll 10s linear infinite;
          }
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
      <section className="py-12 bg-gray-50 border-y border-gray-200 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-16">
          <div className="text-center mb-8">
            <p className="text-sm text-gray-600 uppercase tracking-wider font-semibold">
              Our Past Project Partners
            </p>
          </div>
          <div className="relative overflow-hidden">
            <div className="flex animate-scroll gap-28 items-center">
              {duplicatedLogos.map((logo, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center flex-shrink-0 w-40 h-20"
                >
                  <img
                    src={logo.image}
                    alt={logo.name}
                    loading="lazy"
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LogoBanner;

