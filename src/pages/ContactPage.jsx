// src/pages/ContactPage.js
import React from 'react';
import LoyaltyProgram from '../components/LoyaltyProgram';
import NewsletterSignup from '../components/NewsletterSignup';

const ContactPage = () => {
  return (
    <div className="container mx-auto py-20">
      <LoyaltyProgram />
      <NewsletterSignup />
    </div>
  );
};

export default ContactPage;
