// SEO Configuration for all pages
export const SEO_CONFIG = {
  baseUrl: 'https://www.absflooring.com',
  siteName: 'ABS Floor Covering',
  defaultImage: '/abslogo.png',
  
  pages: {
    home: {
      title: 'ABS Floor Covering | Commercial Flooring Contractor Phoenix AZ',
      description: "ABS Floor Covering is Phoenix's premier commercial flooring contractor. Expert installation of hardwood, carpet, tile, luxury vinyl, polished concrete & more. Serving Phoenix, Scottsdale, Tempe & the Southwest. Call 602-415-1919.",
      path: '/'
    },
    commercial: {
      title: 'Commercial Flooring Services | ABS Floor Covering Phoenix AZ',
      description: 'Professional commercial flooring installation for offices, retail, healthcare, hospitality & industrial facilities. Over 100 years combined experience. Fast-track installations available. Call 602-415-1919.',
      path: '/commercial'
    },
    residential: {
      title: 'Residential & Multi-Family Flooring | ABS Floor Covering Phoenix AZ',
      description: 'Expert residential flooring installation for homes, apartments, condos & multi-family housing in Phoenix. Hardwood, carpet, tile, luxury vinyl & more. Free consultation. Call 602-415-1919.',
      path: '/residential'
    },
    phoenixCommercial: {
      title: 'Commercial Flooring Contractor Phoenix AZ | ABS Floor Covering',
      description: "Phoenix's trusted commercial flooring contractor. Expert installation of hardwood, carpet, tile, LVT, polished concrete & epoxy. Serving Phoenix, Tempe, Scottsdale, Chandler, Mesa & Gilbert. Call 602-415-1919.",
      path: '/commercial-flooring-phoenix'
    },
    scottsdaleCommercial: {
      title: 'Commercial Flooring Contractor Scottsdale AZ | ABS Floor Covering',
      description: "Scottsdale's premier commercial flooring contractor. Professional installation of hardwood, carpet, tile, luxury vinyl & polished concrete. Serving Scottsdale, Paradise Valley & North Phoenix. Call 602-415-1919.",
      path: '/commercial-flooring-scottsdale'
    },
    hardwood: {
      title: 'Hardwood Flooring Installation Phoenix | ABS Floor Covering',
      description: 'Premium hardwood flooring installation in Phoenix. Oak, maple, hickory, walnut & engineered wood options. Professional installation with warranty. Commercial & residential. Call 602-415-1919.',
      path: '/hardwood'
    },
    carpet: {
      title: 'Commercial Carpet Installation Phoenix | ABS Floor Covering',
      description: 'Professional carpet installation for commercial & residential spaces in Phoenix. Broadloom, carpet tile & custom patterns. CRI compliant installation. Call 602-415-1919.',
      path: '/carpet'
    },
    tile: {
      title: 'Tile Flooring Installation Phoenix | ABS Floor Covering',
      description: 'Expert tile installation in Phoenix. Porcelain, ceramic, natural stone & large format tiles. TCNA compliant commercial & residential installation. Call 602-415-1919.',
      path: '/tile'
    },
    luxuryVinyl: {
      title: 'Luxury Vinyl Flooring Phoenix | LVT & LVP Installation | ABS Floor Covering',
      description: 'Luxury vinyl tile (LVT) and plank (LVP) installation in Phoenix. Durable, waterproof flooring for commercial & residential. Professional installation. Call 602-415-1919.',
      path: '/luxury-vinyl'
    },
    laminate: {
      title: 'Laminate Flooring Installation Phoenix | ABS Floor Covering',
      description: 'Quality laminate flooring installation in Phoenix. Affordable, durable flooring solutions for commercial & residential spaces. Professional installation. Call 602-415-1919.',
      path: '/laminate'
    },
    polishedConcrete: {
      title: 'Polished Concrete Flooring Phoenix | ABS Floor Covering',
      description: 'Professional polished concrete flooring in Phoenix. Concrete grinding, honing & polishing for commercial & industrial spaces. Durable, low-maintenance finish. Call 602-415-1919.',
      path: '/polished-concrete'
    },
    stainedConcrete: {
      title: 'Stained Concrete Flooring Phoenix | ABS Floor Covering',
      description: 'Decorative stained concrete flooring in Phoenix. Acid stains, water-based stains & dyes for unique, custom finishes. Commercial & residential. Call 602-415-1919.',
      path: '/stained-concrete'
    },
    epoxyFlooring: {
      title: 'Epoxy Flooring Phoenix | Commercial & Industrial | ABS Floor Covering',
      description: 'Professional epoxy flooring installation in Phoenix. Durable, chemical-resistant coatings for warehouses, garages & industrial facilities. Call 602-415-1919.',
      path: '/epoxy-flooring'
    },
    floorRestoration: {
      title: 'Floor Restoration Services Phoenix | ABS Floor Covering',
      description: 'Professional floor restoration in Phoenix. Hardwood refinishing, tile restoration & concrete repair. Restore your floors to like-new condition. Call 602-415-1919.',
      path: '/floor-restoration'
    },
    moistureTesting: {
      title: 'ICRI Certified Moisture Testing Phoenix | ABS Floor Covering',
      description: 'ICRI certified concrete moisture testing in Phoenix. ASTM F1869, F2170 & F710 testing. Protect your flooring investment with proper slab testing. Call 602-415-1919.',
      path: '/moisture-testing'
    },
    about: {
      title: 'About ABS Floor Covering | Phoenix Commercial Flooring Contractor',
      description: 'Learn about ABS Floor Covering - Phoenix\'s trusted commercial flooring contractor with over 100 years combined experience. ICRI certified. Serving the Southwest. Call 602-415-1919.',
      path: '/about'
    },
    contact: {
      title: 'Contact ABS Floor Covering | Get a Free Quote | Phoenix AZ',
      description: 'Contact ABS Floor Covering for a free flooring consultation. Located at 1430 N 29th Ave, Phoenix, AZ 85009. Call 602-415-1919 or email terry@absflooring.com.',
      path: '/contact'
    },
    faq: {
      title: 'Flooring FAQ | ABS Floor Covering Phoenix',
      description: 'Frequently asked questions about commercial flooring installation, materials, costs & maintenance. Expert answers from ABS Floor Covering. Call 602-415-1919.',
      path: '/faq'
    },
    projectGallery: {
      title: 'Commercial Flooring Project Gallery | ABS Floor Covering Phoenix',
      description: 'View our portfolio of commercial flooring projects in Phoenix. Hotels, offices, retail, healthcare & more. See our quality craftsmanship. Call 602-415-1919.',
      path: '/project-gallery'
    },
    allFlooringProducts: {
      title: 'All Flooring Products | ABS Floor Covering Phoenix',
      description: 'Browse our complete selection of flooring products. Hardwood, carpet, tile, luxury vinyl, laminate & specialty flooring. Commercial & residential. Call 602-415-1919.',
      path: '/all-flooring-products'
    }
  }
};

export type PageKey = keyof typeof SEO_CONFIG.pages;
