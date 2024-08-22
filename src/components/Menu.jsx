// src/components/Menu.js
import React from 'react';

const Menu = () => {
  const dishes = [
    { name: "Sautéed Garlic Butter Mushrooms", description: "Tender mushrooms sautéed in garlic butter and herbs, with a touch of white wine, perfect as a savory side or a topping for steaks.", price: "$10" },
    { name: "Lemon Garlic Asparagus", description: "Bright and zesty asparagus spears sautéed with fresh lemon juice, garlic, and olive oil, offering a refreshing, light side.", price: "$15" },
    { name: "Maple Glazed Carrots", description: "Roasted baby carrots coated in a sweet maple glaze, finished with a sprinkle of fresh thyme for an earthy contrast.", price: "$12" },
  ];

  return (
    <section
      id="menu"
      className="py-20 bg-cover bg-center"
      style={{ backgroundImage: "url('image2.jpeg')" }} // Ensure this path is correct    
    >
      <div className="container mx-auto p-8 rounded-lg">
        <h2 className="text-4xl text-white font-bold text-center mb-12">Our Menu</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dishes.map((dish, index) => (
            <div key={index} className="p-6 bg-rose-200 shadow-lg rounded-lg">
              <h3 className="text-2xl font-semibold mb-2">{dish.name}</h3>
              <p className="text-gray-700 mb-4">{dish.description}</p>
              <div className="text-red-600 font-bold text-xl">{dish.price}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
