import React from 'react';
import Slideshow from '../components/Slideshow.js';
import logements from '../components/logements.json';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Page8 = () => {
  const eightLogement = logements[7];

  return (
    <div>
    <Navigation />
      <Slideshow pictures={eightLogement.pictures} />
    <Footer />
    </div>
  );
};

export default Page8;