import React from "react";
import Dashboard from '../components/Dashboard';
import Carousel from '../components/Body/carousel/carousel';
import './home.css';
function Home() {
    return (
      <div className="App">
        <div className="Header">
        <Dashboard/>
        </div>

        <div className="body-carosel my-2">
          <Carousel/>
        </div>
        </div>
    );
  }
  
  export default Home;
  