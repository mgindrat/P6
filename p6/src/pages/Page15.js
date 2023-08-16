import React from 'react';
import Slideshow from '../components/Slideshow.js';
import logements from '../components/logements.json';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Page15 = () => {
  const fifteenLogement = logements[14];

  return (
    <div>
    <Navigation />
      <Slideshow pictures={fifteenLogement.pictures} />
    <Footer />
    </div>
  );
};

export default Page15;