import React from 'react';
import { 
    BrowserRouter as Router,
    Routes,
    Route
  } from "react-router-dom";
import Home from '../Home/home.js';
import About from '../components/About/about.js';
import Medicine from '../components/Medicine/medicine.js';
import Login from '../components/LoginSin/login.js';
import Signup from '../components/LoginSin/signup.js';
import Offer from '../components/Offers/offer.js';

const App = (props) => {
  return (
    <Router {...props}>
    <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/about" element={<About/>}/>
      <Route exact path="/medicine" element={<Medicine/>}/>
      <Route exact path="/offer" element={<Offer/>}/>
      <Route exact path="/login" element={<Login/>}/>  
      <Route exact path="/signup" element={<Signup/>}/>  
    </Routes>
  </Router>
  );
};

export default App;
