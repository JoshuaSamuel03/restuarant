// src/components/LoyaltyProgram.js
import React from 'react';

const LoyaltyProgram = () => {
  return (
    <section id="loyalty-program" className="py-20 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Join Our Loyalty Program</h2>
        <div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg">
          <p className="text-gray-700 mb-6">
            Earn points every time you dine with us and redeem them for exclusive rewards. Sign up today and start earning!
          </p>
          <button className="w-full p-3 bg-red-600 text-white font-bold rounded-lg hover:bg-red-700">
            Sign Up Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default LoyaltyProgram;
