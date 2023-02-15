import React from 'react';
import './App.css';
import ScrollToTop from 'react-scroll-up';
import { BsFillArrowUpCircleFill } from 'react-icons/bs';
import { Routes } from 'react-router';
import { Route } from 'react-router';

import Homepage from '../src/components/Homepage/Homepage';
import Header from '../src/components/Header/Header';
import Login from '../src/components/Login/Login';
import Signup from '../src/components/Signup/Signup';
import Footer from '../src/components/Footer/Footer';
import TracOrder from './components/TracOrder/TracOrder';
import Cart from './components/Cart/Cart';


const App = () => {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Homepage></Homepage>}></Route>
        <Route path='/home' element={<Homepage></Homepage>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/sign-up' element={<Signup></Signup>}></Route>
        <Route path='/cart' element={<Cart></Cart>}></Route>
        <Route path='/track-order' element={<TracOrder></TracOrder>}></Route>
      </Routes>
      <Footer></Footer>

      <ScrollToTop showUnder={300}>
        <span className='scroll-top'><BsFillArrowUpCircleFill></BsFillArrowUpCircleFill></span>
      </ScrollToTop>
    </div>
  );
};

export default App;