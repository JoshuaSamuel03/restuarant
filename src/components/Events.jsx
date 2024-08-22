// src/components/Events.js
import React from 'react';

const Events = () => {
  const events = [
    { title: "Wine Tasting Night", date: "September 25, 2024", description: "Join us for an evening of fine wine and exquisite pairings." },
    { title: "Live Jazz Music", date: "October 10, 2024", description: "Enjoy live jazz performances every Thursday evening." },
  ];

  return (
    <section
      id="events"
      className="py-20 bg-cover bg-center"
      style={{ backgroundImage: "url('/image4.jpeg')" }} // Ensure the path to the image is correct
    >
      <div className="container mx-auto bg-opacity-75 bg-white p-8 rounded-lg">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Upcoming Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {events.map((event, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-2 text-gray-800">{event.title}</h3>
              <p className="text-gray-500 mb-2">{event.date}</p>
              <p className="text-gray-700">{event.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
