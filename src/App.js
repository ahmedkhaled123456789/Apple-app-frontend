import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Cart from './Cart';
import Navbar from './components/Navbar';
import Home from './Home';
import { useState } from 'react'
import Footer from './components/Footer/Footer';


function App() {
  const [searchTermm, setSearchTerm] = useState('');
  return (
    <div className="App">
    <Navbar onSearch={setSearchTerm}/>
    <Routes>
       <Route path="/" element={<Home search={searchTermm}/>}/>
       <Route path="/cart" element={<Cart/>}/>
    </Routes>
    <Footer/>
    </div>
  );
}

export default App;