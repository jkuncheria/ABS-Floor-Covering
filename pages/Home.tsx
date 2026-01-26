import React from 'react';
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
  return (
    <>
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

