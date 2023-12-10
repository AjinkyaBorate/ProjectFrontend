import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-black text-secondary fixed-relative pb-3" >
      <div className="container p-4">
        <div className="row text-center sub-hero">
          <div className="col">
            <Link className="footer-link" to="/">Home</Link>
            
          </div>
          <div className="col">
            <Link className="footer-link" to="/About">About</Link>
          </div>
          <div className="col">
            <Link className="footer-link" to="/Contact">Contacts</Link>
          </div>
          <div className="col">
            <Link className="footer-link" to="/">Services</Link>
          </div>
        </div>
      </div>
      <div className='row mx-2'>
        <div className="col">
          <Link className="navbar-brand" to="/">
            <img src="/looogoo.png" width={100} height={25} alt="..." />
          </Link>
        </div>
        <div className="col">
          Copyright © 2023 Eatable's | Designed By Eatable's
        </div>
        <div className="col d-flex justify-content-end">          
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} className="social-icon" />
          </a>
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} className="social-icon" />
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} className="social-icon" />
          </a>
          <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faYoutube} className="social-icon" />
          </a>
        </div>
      </div>
    </footer >
  );
};

export default Footer;