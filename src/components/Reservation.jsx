// src/components/Reservation.js
import React, { useState } from 'react';

const Reservation = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [people, setPeople] = useState('');
  const [message, setMessage] = useState('');  // For showing success/failure message

  const handleSubmit = async (e) => {
    e.preventDefault();
    const reservationData = { name, email, date, time, people };
    
    try {
      const response = await fetch('https://your-server.com/api/reservations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(reservationData),
      });

      if (response.ok) {
        setMessage('Reservation successful!');
        // Optionally clear the form fields
        setName('');
        setEmail('');
        setDate('');
        setTime('');
        setPeople('');
      } else {
        setMessage('Failed to make a reservation. Please try again.');
      }
    } catch (error) {
      console.error('Error making reservation:', error);
      setMessage('An error occurred while making the reservation. Please try again.');
    }
  };

  return (
    <section id="reservation" className="py-20 bg-white">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Make a Reservation</h2>
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-gray-100 p-8 rounded-lg shadow-lg">
          {message && <p className="mb-4 text-center text-red-600">{message}</p>}
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Name</label>
            <input
              type="text"
              className="w-full p-3 border border-gray-300 rounded-lg"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Email</label>
            <input
              type="email"
              className="w-full p-3 border border-gray-300 rounded-lg"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Date</label>
            <input
              type="date"
              className="w-full p-3 border border-gray-300 rounded-lg"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Time</label>
            <input
              type="time"
              className="w-full p-3 border border-gray-300 rounded-lg"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Number of People</label>
            <input
              type="number"
              className="w-full p-3 border border-gray-300 rounded-lg"
              value={people}
              onChange={(e) => setPeople(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="w-full p-3 bg-red-600 text-white font-bold rounded-lg hover:bg-red-700">
            Reserve Now
          </button>
        </form>
      </div>
    </section>
  );
};

export default Reservation;
