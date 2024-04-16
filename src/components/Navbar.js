import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark text-white bg-black fixed-top">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/"><img src="/looogoo.png" width={100} height={25} alt="..." /></Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/services">Services</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/mess">Add Mess</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/signup">Customer</Link>
            </li>
            

          </ul>
          <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-primary" type="submit">Search</button>
            </form>
        </div>
        {/* <form >
        <Link className="btn btn-primary " style={{marginRight:'5px'}} to="/Mess" role="button">Add Your Mess</Link>
        </form>
        <form >
        <Link className="btn btn-primary" style={{marginRight:'5px'}}to="/signup" role="button">Customer</Link>
        </form> */}


      </div>

    </nav>

  );
};

export default Navbar;



