import React from 'react';
import Slideshow from '../components/Slideshow.js';
import logements from '../components/logements.json';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Page17 = () => {
  const seventeenLogement = logements[16];

  return (
    <div>
    <Navigation />
      <Slideshow pictures={seventeenLogement.pictures} />
    <Footer />
    </div>
  );
};

export default Page17;