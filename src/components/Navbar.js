import React  from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/"><img src="/tata_logo.png" className="d-block w-100" alt="..."/></Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Services</Link>
            </li>
          </ul>
        </div>
        <form >
        <Link className="btn btn-outline-success " style={{marginRight:'8px'}} to="/signup" role="button">Signup</Link>
        {/* <Link className="btn btn-outline-success " to="/login" role="button">Login</Link> */}
        </form>
      </div>
    </nav>
  );
};

export default Navbar;



