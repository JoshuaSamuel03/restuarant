// src/components/Hero.js
import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section
      id="home"
      className="bg-cover bg-center h-screen flex items-center justify-center"
      style={{ backgroundImage: "url('image1.jpeg')" }}
    >
      <div className="text-center text-white">
        <h1 className="text-5xl font-extrabold mb-4">Welcome to The Gourmet Nest</h1> {/* Updated Restaurant Name */}
        <p className="text-xl font-extrabold">Experience the best dining with us</p>
        <Link
          to="/menu"
          className="mt-8 inline-block bg-red-600 px-6 py-3 text-lg font-semibold rounded-lg hover:bg-red-700"
        >
          View Menu
        </Link>
      </div>
    </section>
  );
};

export default Hero;
