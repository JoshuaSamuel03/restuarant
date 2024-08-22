// src/components/ChefsSpecial.js
import React from 'react';

const ChefsSpecial = () => {
  const specials = [
    { name: "Truffle Risotto", description: "Creamy risotto with black truffles and Parmesan cheese.", price: "$25", image: "/risotto.jpeg" },
    { name: "Grilled Lamb Chops", description: "Tender lamb chops grilled to perfection, served with a rosemary sauce.", price: "$30", image: "/lamb.jpeg" },
  ];

  return (
    <section id="chefs-special" className="py-20 bg-white">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Chef's Special</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {specials.map((special, index) => (
            <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <img src={special.image} alt={special.name} className="w-full h-48 object-cover rounded-md mb-4" />
              <h3 className="text-2xl font-semibold mb-2">{special.name}</h3>
              <p className="text-gray-700 mb-4">{special.description}</p>
              <div className="text-red-600 font-bold text-xl">{special.price}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChefsSpecial;
