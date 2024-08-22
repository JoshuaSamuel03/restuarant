// src/components/NewsletterSignup.js
import React, { useState } from 'react';

const NewsletterSignup = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you for signing up, ${email}!`);
    setEmail('');
  };

  return (
    <section id="newsletter" className="py-20 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Stay Updated!</h2>
        <p className="text-gray-700 mb-6">Sign up for our newsletter to get the latest news and special offers.</p>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <input
            type="email"
            className="w-full p-3 border border-gray-300 rounded-lg mb-4"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit" className="w-full p-3 bg-red-600 text-white font-bold rounded-lg hover:bg-red-700">
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default NewsletterSignup;
