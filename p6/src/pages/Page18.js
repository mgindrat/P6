import React from 'react';
import Slideshow from '../components/Slideshow.js';
import logements from '../components/logements.json';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Page18 = () => {
  const eighteenLogement = logements[17];

  return (
    <div>
    <Navigation />
      <Slideshow pictures={eighteenLogement.pictures} />
    <Footer />
    </div>
  );
};

export default Page18;