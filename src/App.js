import React from 'react';
import Feature from './Features/Features';
import HeroSection from './HeroSection/HeroSection';
import './App.css';
import Footer from './Footer/Footer';


const App = () => {
  return (
    <div>
      <HeroSection></HeroSection>
      <Feature></Feature>
      <Footer></Footer>
    </div>
  );
};

export default App;