import React from 'react';
import Slideshow from '../components/Slideshow.js';
import logements from '../components/logements.json';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Page13 = () => {
  const thirteenLogement = logements[12];

  return (
    <div>
    <Navigation />
      <Slideshow pictures={thirteenLogement.pictures} />
    <Footer />
    </div>
  );
};

export default Page13;