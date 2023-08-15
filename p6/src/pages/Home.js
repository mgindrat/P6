import React from 'react';
import Navigation from '../components/Navigation';
import BannerHome from '../components/BannerHome';
import Footer from '../components/Footer';
import Cards from '../components/Cards';


const Home = () => {
    return (
        <div>
        <Navigation /> 
        <BannerHome />
        <Cards />
        <Footer />
        </div>
    );
};

export default Home;