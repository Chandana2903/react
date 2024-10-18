import React, { useState, useEffect } from 'react';
 // Styles for the slider

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = ["p6.jpg", "p4.jpg", "h2.jpg", "h1.jpg"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (index) => setCurrentSlide(index);

  return (
    <div id="slider">
      <div id="slides">
        {slides.map((slide, index) => (
          <div key={index} className={`slide ${currentSlide === index ? 'active' : ''}`}>
            <img src={slide} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>

      {/* Controls */}
      <div id="controls">
        <label id="prev" onClick={() => goToSlide((currentSlide - 1 + slides.length) % slides.length)}>&#10094;</label>
        <label id="next" onClick={() => goToSlide((currentSlide + 1) % slides.length)}>&#10095;</label>
      </div>

      {/* Bullets */}
      <div id="bullets">
        {slides.map((_, index) => (
          <label key={index} className={`bullet ${currentSlide === index ? 'active' : ''}`} onClick={() => goToSlide(index)}></label>
        ))}
      </div>
    </div>
  );
};

export default Slider;
