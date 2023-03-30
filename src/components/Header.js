import { FaRegEnvelope, FaLocationArrow, FaFacebookF, FaInstagram, FaTwitter, FaPhoneAlt, FaList, FaSearch } from "react-icons/fa";


import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button, Nav } from "react-bootstrap";


import {
 Link
} from 'react-router-dom';

function Header() {
  return (

    <div className="nav">

      <div className="nav1">
        <span><FaPhoneAlt /> 8770200028 </span>
        <span>
          <FaRegEnvelope className="a" />
          info@shriramtechnology.com.in</span>
        <span>  <FaLocationArrow className="a" /> Gwalior  </span>
        <span>  <FaLocationArrow className="a" /> New Delhi </span>
        <span>  <FaLocationArrow className="a" /> Jaipur</span>

      </div>
      <div className="nav2">
        <h6>Follow us:</h6>
        <FaFacebookF className="b" />
        <FaInstagram className="b" />
        <FaTwitter className="b" />
      </div>


      <div className="container conttt">
        <div className="navbar navbar-expand-lg header">

          <img src="http://shriramtechnology.com/images/newlogo.png"></img>



          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="navbar-collapse collapse menu " id="collapsibleNavbar">
            <ul className="navbar-nav">
              <li className="nav-item Home"><Link to="/" className="nav-link">Home</Link></li>
              <li className="nav-item"> <Link to="/aboutus" className="nav-link">About us</Link></li>
              <li className="nav-item"><a href="" className="nav-link">Services</a></li>
              <li className="nav-item"><Link to="/portfolio" className="nav-link">Portfolio</Link></li>
              <li className="nav-item"><Link to="/our" className="nav-link">Ourbrand</Link></li>
              <li className="nav-item"><Link to="/blogs" className="nav-link">Blog</Link></li>
              <li className="nav-item"><Link to="/contact" className="nav-link">Contact</Link></li>
            </ul>
            <center>
            <div className="spicon">
            <FaSearch className="mt-3 si"/>
            <div className="spicon1"></div>
             <FaList className="mt-3 si1"/>
            </div>
            </center>
          </div>


        </div>
      </div>
    </div>

  );
}

export default Header;