import React from 'react';
import Feature from './Features/Features';
import HeroSection from './HeroSection/HeroSection';
import './App.css';
import Footer from './Footer/Footer';
import Header from './Header/Header';


const App = () => {
  return (
    <div>
      <Header></Header>
      <HeroSection></HeroSection>
      <Feature></Feature>
      <Footer></Footer>
    </div>
  );
};

export default App;