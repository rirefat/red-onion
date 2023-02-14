import React from 'react';
import Feature from './Features/Features';
import HeroSection from './HeroSection/HeroSection';
import './App.css';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Products from './Products/Products';


const App = () => {
  return (
    <div>
      <Header></Header>
      <HeroSection></HeroSection>
      <Products></Products>
      <Feature></Feature>
      <Footer></Footer>
    </div>
  );
};

export default App;