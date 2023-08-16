import React from 'react';
import Slideshow from '../components/Slideshow.js';
import logements from '../components/logements.json';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Page6 = () => {
  const sixLogement = logements[5];

  return (
    <div>
    <Navigation />
      <Slideshow pictures={sixLogement.pictures} />
    <Footer />
    </div>
  );
};

export default Page6;