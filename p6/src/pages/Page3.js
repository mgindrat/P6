import React from 'react';
import Slideshow from '../components/Slideshow.js';
import logements from '../components/logements.json';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Page3 = () => {
  const thirdLogement = logements[2];

  return (
    <div>
    <Navigation />
      <Slideshow pictures={thirdLogement.pictures} />
    <Footer />
    </div>
  );
};

export default Page3;