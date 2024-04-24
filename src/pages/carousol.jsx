import React, { useState, useEffect } from 'react';
import './carousol.css';

const Carousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    '/one.png',
    '/w1.jpeg',
    '/w2.jpeg',
  ];

  const slogans = [
    "Productivity encounters food revolution",
    "Authenticity bridges universal Flavors",
    "No compromise, only excellence",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change the time interval as needed (in milliseconds)

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="carousel-container">
      <img
        src={images[currentImageIndex]}
        alt={`Image ${currentImageIndex + 1}`}
        className="carousel-image"
        style={{ width: '100%', height: '15%', objectFit: 'cover', alignSelf: 'center' }}
      />
      <div className="carousel-text">
        <p>{slogans[currentImageIndex]}</p>
      </div>
    </div>
  );
};

export default Carousel;
