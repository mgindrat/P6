import React from 'react';
import Slideshow from '../components/Slideshow.js';
import logements from '../components/logements.json';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Page16 = () => {
  const sixteenLogement = logements[15];

  return (
    <div>
    <Navigation />
      <Slideshow pictures={sixteenLogement.pictures} />
    <Footer />
    </div>
  );
};

export default Page16;