/** LocalBusiness structured data, lifted verbatim from the old index.html.
 *  Rendered into every page from app/root.tsx. */
export const LOCAL_BUSINESS_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FlooringContractor",
  "name": "ABS Floor Covering",
  "image": "https://www.absflooring.com/abslogo.png",
  "logo": "https://www.absflooring.com/abslogo.png",
  "url": "https://www.absflooring.com",
  "telephone": "+1-602-415-1919",
  "email": "terry@absflooring.com",
  "description": "ABS Floor Covering is Phoenix's premier commercial flooring contractor specializing in hardwood, carpet, tile, luxury vinyl, polished concrete, epoxy flooring, and floor restoration services.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "1430 N 29th Ave",
    "addressLocality": "Phoenix",
    "addressRegion": "AZ",
    "postalCode": "85009",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 33.4646792,
    "longitude": -112.1216764
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "08:00",
      "closes": "17:00"
    }
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5.0",
    "bestRating": "5",
    "worstRating": "1",
    "reviewCount": "12"
  },
  "areaServed": [
    {
      "@type": "City",
      "name": "Phoenix",
      "sameAs": "https://en.wikipedia.org/wiki/Phoenix,_Arizona"
    },
    {
      "@type": "City",
      "name": "Scottsdale"
    },
    {
      "@type": "City",
      "name": "Tempe"
    },
    {
      "@type": "City",
      "name": "Chandler"
    },
    {
      "@type": "City",
      "name": "Mesa"
    },
    {
      "@type": "City",
      "name": "Gilbert"
    },
    {
      "@type": "City",
      "name": "Glendale"
    },
    {
      "@type": "City",
      "name": "Peoria"
    },
    {
      "@type": "City",
      "name": "Ahwatukee"
    }
  ],
  "priceRange": "$$",
  "paymentAccepted": [
    "Cash",
    "Credit Card",
    "Check"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Flooring Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Hardwood Flooring Installation"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Carpet Installation"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Tile Installation"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Luxury Vinyl Installation"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Polished Concrete"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Epoxy Flooring"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Floor Restoration"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Moisture Testing"
        }
      }
    ]
  },
  "sameAs": [
    "https://www.facebook.com/ABSFloors/",
    "https://www.linkedin.com/company/abs-floor-covering/"
  ]
} as const;
