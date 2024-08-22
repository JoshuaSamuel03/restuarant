// src/components/Gallery.js
import React from 'react';
import Slider from 'react-slick';

const Gallery = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2, // Show 2 slides at a time
    slidesToScroll: 2, // Scroll 2 slides per scroll
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
  };

  const images = [
    { src: '/gallery1.jpeg', alt: 'Interior View' },
    { src: '/gallery2.jpeg', alt: 'Signature Dish' },
    { src: '/gallery3.jpeg', alt: 'Outdoor Seating' },
    { src: '/gallery4.jpeg', alt: 'Outdoor Seating' },
  ];

  return (
    <section id="gallery" className="py-20 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Gallery</h2>
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index} className="px-2"> {/* Add padding to space out images */}
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-64 object-cover rounded-lg shadow-lg" // Adjust height for smaller cards
              />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Gallery;
