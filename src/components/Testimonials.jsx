// src/components/Testimonials.js
import React from 'react';

const Testimonials = () => {
  const testimonials = [
    { name: "Jane Smith", review: "The food here is amazing! Definitely coming back.", rating: 5 },
    { name: "Liepass", review: "Great atmosphere and friendly staff. Highly recommended.", rating: 4 },
  ];

  return (
    <section
      id="testimonials"
      className="py-20 bg-cover bg-center"
      style={{ backgroundImage: "url('/image3.jpeg')" }} 
    >
      <div className="container mx-auto bg-opacity-75 bg-white p-8 rounded-lg">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Customer Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-2 text-gray-800">{testimonial.name}</h3>
              <p className="text-gray-700 mb-4">"{testimonial.review}"</p>
              <div className="text-yellow-500">
                {"⭐".repeat(testimonial.rating)}{"☆".repeat(5 - testimonial.rating)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
