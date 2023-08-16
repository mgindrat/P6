import React from 'react';
import Slideshow from '../components/Slideshow.js';
import logements from '../components/logements.json';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Page19 = () => {
  const nineteenLogement = logements[18];

  return (
    <div>
    <Navigation />
      <Slideshow pictures={nineteenLogement.pictures} />
    <Footer />
    </div>
  );
};

export default Page19;