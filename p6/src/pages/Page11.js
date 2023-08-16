import React from 'react';
import Slideshow from '../components/Slideshow.js';
import logements from '../components/logements.json';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Page11 = () => {
  const elevenLogement = logements[10];

  return (
    <div>
    <Navigation />
      <Slideshow pictures={elevenLogement.pictures} />
    <Footer />
    </div>
  );
};

export default Page11;