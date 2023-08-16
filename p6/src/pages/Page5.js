import React from 'react';
import Slideshow from '../components/Slideshow.js';
import logements from '../components/logements.json';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Page5 = () => {
  const fiveLogement = logements[4];

  return (
    <div>
    <Navigation />
      <Slideshow pictures={fiveLogement.pictures} />
    <Footer />
    </div>
  );
};

export default Page5;