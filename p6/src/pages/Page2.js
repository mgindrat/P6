import React from 'react';
import Slideshow from '../components/Slideshow.js';
import logements from '../components/logements.json';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Page2 = () => {
  const secondLogement = logements[1];

  return (
    <div>
    <Navigation />
      <Slideshow pictures={secondLogement.pictures} />
    <Footer />
    </div>
  );
};

export default Page2;