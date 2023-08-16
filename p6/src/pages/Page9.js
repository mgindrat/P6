import React from 'react';
import Slideshow from '../components/Slideshow.js';
import logements from '../components/logements.json';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Page9 = () => {
  const nineLogement = logements[8];

  return (
    <div>
    <Navigation />
      <Slideshow pictures={nineLogement.pictures} />
    <Footer />
    </div>
  );
};

export default Page9;