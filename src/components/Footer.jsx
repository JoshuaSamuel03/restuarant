// src/components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 p-4 text-center text-white">
      <p>&copy; {new Date().getFullYear()} The Gourmet Nest. All rights reserved.</p> {/* Updated Restaurant Name */}
    </footer>
  );
};

export default Footer;
