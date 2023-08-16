import React from 'react';
import Slideshow from '../components/Slideshow.js';
import logements from '../components/logements.json';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Page20 = () => {
  const twentyLogement = logements[19];

  return (
    <div>
    <Navigation />
      <Slideshow pictures={twentyLogement.pictures} />
    <Footer />
    </div>
  );
};

export default Page20;