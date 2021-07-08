import React from 'react';
import logo from './logo.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    return (
      <div className="main">

      <nav className="navbar navbar-expand-sm  bg-transparent">
        <div className="container">

        <a className="navbar-brand" href="#"><img className="logo" src={logo} alt="logo...." srcset="" /> Milindu Jayasinghe</a>
        <button className="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo"
          aria-controls="navbarTogglerDemo" aria-expanded="false" aria-label="Togglenavigation">
          <FontAwesomeIcon icon={faBars}/>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo">

          <ul className="navbar-nav ml-auto">
            <li className="nav-item "><a className="nav-link" href="">Contact us</a></li>
            <li className="nav-item"><a className="nav-link" href="">About us</a></li>
            <li className="nav-item"><a className="nav-link" href="">Services</a></li>
            <li className="nav-item"><a className="nav-link" href="">How work</a></li>
          </ul>
        </div>
        </div>
      </nav>
      </div>
        
    )
}

export default Navbar
