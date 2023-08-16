import React from 'react';
import Slideshow from '../components/Slideshow.js';
import logements from '../components/logements.json';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Page1 = () => {
  // Supposons que vous voulez afficher les images du premier logement
  const firstLogement = logements[0];

  return (
    <div>
    <Navigation />
      <Slideshow pictures={firstLogement.pictures} />
    <Footer />
    </div>
  );
};

export default Page1;
