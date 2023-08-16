import React from 'react';
import Slideshow from '../components/Slideshow.js';
import logements from '../components/logements.json';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Page7 = () => {
  const sevenLogement = logements[6];

  return (
    <div>
    <Navigation />
      <Slideshow pictures={sevenLogement.pictures} />
    <Footer />
    </div>
  );
};

export default Page7;