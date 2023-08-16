import React from 'react';
import Slideshow from '../components/Slideshow.js';
import logements from '../components/logements.json';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Page4 = () => {
  const fourLogement = logements[3];

  return (
    <div>
    <Navigation />
      <Slideshow pictures={fourLogement.pictures} />
    <Footer />
    </div>
  );
};

export default Page4;