import React from 'react';
import Slideshow from '../components/Slideshow.js';
import logements from '../components/logements.json';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Page10 = () => {
  const tenLogement = logements[9];

  return (
    <div>
    <Navigation />
      <Slideshow pictures={tenLogement.pictures} />
    <Footer />
    </div>
  );
};

export default Page10;