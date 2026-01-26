import React from 'react';
import SEO from '../components/SEO';
import { SEO_CONFIG } from '../seoConfig';
import Hero from '../components/Hero';
import LogoBanner from '../components/LogoBanner';
import Categories from '../components/Categories';
import Visualizer from '../components/Visualizer';
import Difference from '../components/Difference';
import AboutHome from '../components/AboutHome';
import Inspiration from '../components/Inspiration';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';

const Home: React.FC = () => {
  const seo = SEO_CONFIG.pages.home;
  
  return (
    <>
      <SEO 
        title={seo.title}
        description={seo.description}
        canonical={`${SEO_CONFIG.baseUrl}${seo.path}`}
      />
      <Hero />
      <LogoBanner />
      <AboutHome />
      <Categories />
      <Visualizer />
      <Difference />
      {/* <Inspiration /> */}
      <Testimonials />
      <Contact simplified={true} />
    </>
  );
};

export default Home;

