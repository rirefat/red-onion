import React from 'react';
import Feature from './Features/Features';
import HeroSection from './HeroSection/HeroSection';
import './App.css';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Products from './Products/Products';
import ScrollToTop from 'react-scroll-up';

import { BsFillArrowUpCircleFill } from 'react-icons/bs';


const App = () => {
  return (
    <div>
      <Header></Header>
      <HeroSection></HeroSection>
      <Products></Products>
      <Feature></Feature>
      <Footer></Footer>

      <ScrollToTop showUnder={300}>
        <span className='scroll-top'><BsFillArrowUpCircleFill></BsFillArrowUpCircleFill></span>
      </ScrollToTop>
    </div>
  );
};

export default App;