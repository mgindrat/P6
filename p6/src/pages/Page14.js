import React from 'react';
import Slideshow from '../components/Slideshow.js';
import logements from '../components/logements.json';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Page14 = () => {
  const fourteenLogement = logements[13];

  return (
    <div>
    <Navigation />
      <Slideshow pictures={fourteenLogement.pictures} />
    <Footer />
    </div>
  );
};

export default Page14;