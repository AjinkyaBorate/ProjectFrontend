import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="bg-body-primary text-white text-center fixed-absolute" style={{backgroundImage:'url("/world-wallpaper.jpg")',backgroundSize:'cover',backgroundRepeat:'no-repeat',backgroundPosition:'center',height:'auto'}}>
      <div className="container p-4">
        <section className="">
        </section>
        <section className="mb-4">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt distinctio earum
            repellat quaerat voluptatibus placeat nam, commodi optio pariatur est quia magnam eum
            harum corrupti dicta, aliquam sequi voluptate quas. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur totam explicabo voluptatum ea a quis placeat libero dicta. Est ullam quam dolorum rerum perspiciatis blanditiis vero totam porro magnam ad molestiae impedit architecto placeat debitis expedita, facere eum magni quo.
          </p>
        </section>
        <div className="sub-hero" style={{}}>
          <div className="row">
            <div className="col-lg-3 col-md-6 mb-4">
              <h5 className="text">Links</h5>
              <ul className="list-unstyled mb-0">
                <li>
                  <Link className="text-white" to="/">Home</Link>
                </li>
                <li>
                  <Link className="text-white" to="/about">About Us</Link>
                </li>
                <li>
                  <Link className="text-white" to="/contact">Contact Us</Link>
                </li>
                <li>
                  <Link className="text-white" to="/services">Services</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2023 :  
        <Link className="text-reset fw-bold" to="https://mdbootstrap.com/">onestop.com</Link>
      </div>
    </footer>
  );
};

export default Footer;
