// src/pages/HomePage.js
import React from 'react';
import Hero from '../components/Hero';
import ChefsSpecial from '../components/ChefsSpecial';
import Events from '../components/Events';
import Testimonials from '../components/Testimonials';
import Gallery from '../components/Gallery'; // Import Gallery

const HomePage = () => {
  return (
    <div>
      <Hero />
      <ChefsSpecial />
      <Events />
      <Testimonials />
      <Gallery /> {/* Add Gallery component */}
    </div>
  );
};

export default HomePage;
