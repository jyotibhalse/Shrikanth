
import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGifts,
  faUser
} from "@fortawesome/free-solid-svg-icons";

import 'bootstrap/dist/css/bootstrap.min.css';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="brand-name">
          <h1 className="m-0">
            <Link to="/" className="text-decoration-none text-dark">Shree <sup style={{fontFamily:'cursive'}}>कंठ</sup></Link>
          </h1>
        </div>
        <hr style={{color:' #128760'}}/>
        <div className="search-bar">
          <input
            type="text"
            className="form-control"
            placeholder="Search..."
          />
        </div>
        <nav>
          <ul className="nav">
            <li className="nav-item1">
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item1">
              <Link to="/About" className="nav-link">About Us</Link>
            </li>
            
            <li className="nav-item">
              <Link to="/medicine" className="nav-link">Medicine</Link>
            </li>

            <li className="nav-item">
              <Link to="/offer" className="nav-link">
            <FontAwesomeIcon icon={faGifts} />
          Offers</Link>
            </li>
            <li className="nav-item">
              <Link to="/login" className="nav-link">
            <FontAwesomeIcon icon={faUser} />
          Login </Link>
          
            </li>
            <li className="nav-item">
              {/* <Link to="/signup" className="nav-link">Signup</Link> */}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Dashboard;
