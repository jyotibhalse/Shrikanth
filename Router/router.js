import React from 'react';
import { 
    BrowserRouter as Router,
    Routes,
    Route
  } from "react-router-dom";
import Home from '../Home/home.js';
import Medicine from '../components/medicine.js';
import Login from '../components/LoginSin/login.js';
import Signup from '../components/LoginSin/signup.js';

const App = (props) => {
  return (
    <Router {...props}>
    <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/medicine" element={<Medicine/>}/>
      <Route exact path="/login" element={<Login/>}/>  
      <Route exact path="/signup" element={<Signup/>}/>  
    </Routes>
  </Router>
  );
};

export default App;
