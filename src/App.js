import React from 'react';
import './App.css';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import ScrollToTop from 'react-scroll-up';

import { BsFillArrowUpCircleFill } from 'react-icons/bs';
import Homepage from './assets/Homepage/Homepage';
import { Routes } from 'react-router';
import { Route } from 'react-router';
import Login from './Login/Login';


const App = () => {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Homepage></Homepage>}></Route>
        <Route path='/home' element={<Homepage></Homepage>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
      </Routes>
      <Footer></Footer>

      <ScrollToTop showUnder={300}>
        <span className='scroll-top'><BsFillArrowUpCircleFill></BsFillArrowUpCircleFill></span>
      </ScrollToTop>
    </div>
  );
};

export default App;