import React from 'react';
import { useState } from 'react';

const Slideshow = ({ pictures }) => {

    const [currentIndex, setCurrentIndex] = useState(0);

    const PreviousSlide = () => {
      setCurrentIndex((currentIndex - 1 + pictures.length) % pictures.length);
    };
  
    const NextSlide = () => {
      setCurrentIndex((currentIndex + 1) % pictures.length);
    };


    return (
    <section className="slideshow">
    <img src={pictures[currentIndex]} alt={`Slide ${currentIndex}`} />
    <button onClick={PreviousSlide}>Previous</button>
    <button onClick={NextSlide}>Next</button>
    </section>
    );
};

export default Slideshow;