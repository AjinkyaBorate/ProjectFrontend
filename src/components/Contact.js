import React from 'react';
import {Link} from 'react-router-dom';

const Contact = () => {
  return (
    <>
      <section className="container mb-4">
        <h2 className="h1-responsive font-weight-bold text-center my-4">Contact us</h2>
        <p className="text-center w-responsive mx-auto mb-5">
          <strong>Do you have any questions? </strong>Please do not hesitate to contact us directly. Our team will come back to you within a matter of hours to help you.
        </p>
        <div className="row">
          <div className="col mb-md-0 mb-5">
            <form id="contact-form" name="contact-form" action="" method="POST">
              <div className="row">
                <div className="col">
                  <div className="md-form mb-0">
                    <label htmlFor="name">Your Name</label>
                    <input placeholder="Enter Your Name" type="text" id="name" name="name" className="form-control" />
                  </div>
                </div>
                <div className="col">
                  <div className="md-form mb-0">
                    <label htmlFor="email">Your Email</label>
                    <input placeholder="Enter Email" type="text" id="email" name="email" className="form-control" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="md-form mb-0">
                    <label htmlFor="subject">Subject</label>
                    <input placeholder="Your Subject" type="text" id="subject" name="subject" className="form-control" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="md-form">
                    <label htmlFor="message">Your Message</label>
                    <textarea placeholder="Write Your Message Here" type="text" id="message" name="message" rows="2" className="form-control md-textarea"></textarea>
                  </div>
                </div>
              </div>
            </form>
            <div className="d-grid mt-3 btn-block">
              <button className="btn btn-primary btn-default" onClick={() => document.getElementById('contact-form').submit()}>Send</button>
            </div>
            <div className="status"></div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col text-center">
            <Link className="navbar-brand" to="#">
              <img src="geo-alt-fill.svg" height="30" alt="Your Logo Alt Text" className="d-inline-block align-top" />
            </Link>
            <p>Pune,Bharat 411001</p>
          </div>
          <div className="col text-center">
            <Link className="navbar-brand" href="#">
              <img src="envelope.svg" height="30" alt="Your Logo Alt Text" className="d-inline-block align-top" />
            </Link>
            <p>contact@Eatables.com</p>
          </div>
          <div className="col text-center">
            <Link className="navbar-brand" href="#">
              <img src="phone.svg" height="30" alt="Your Logo Alt Text" className="d-inline-block align-top" />
            </Link>
            <p>+91-9908321867</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
