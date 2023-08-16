import React from 'react';
import Slideshow from '../components/Slideshow.js';
import logements from '../components/logements.json';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Page12 = () => {
  const twelveLogement = logements[11];

  return (
    <div>
    <Navigation />
      <Slideshow pictures={twelveLogement.pictures} />
    <Footer />
    </div>
  );
};

export default Page12;