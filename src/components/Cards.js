import React from "react";
import "./Cards.css";
import { MapPin } from 'lucide-react';
import { Link } from "react-router-dom";

const Card = ({ title, description, address, phone, imageUrl, buttonText }) => {
  const openMapDirection = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        const encodedAddress = encodeURIComponent(address);
        const encodedCurrentLocation = `${latitude},${longitude}`;
        window.open(`https://www.google.com/maps/dir/${encodedCurrentLocation}/${encodedAddress}`);
      });
    } else {
      alert('Geolocation is not supported by this browser.');
    }
  };
  return (
    <div className="container">
      <div className="card-container mt-4"> {/* Add margin-top to create space */}
        <div className="card mb-3">
          <img src={imageUrl} className="card-img" alt={title} />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text">{address}</p>
            <p className="card-text">{phone}</p>

            <div className="row">
              <div className="col"><button type="button" class="btn btn-primary">
                <Link to={`/profile/${title}`} className="text-white" style={{ textDecoration: 'none' }}>Contact</Link>
              </button></div>
              <div className="col d-flex justify-content-end mx-3">
                <p className="card-text">
                  <small className="text-muted">
                    <Link onClick={openMapDirection}> <MapPin />   </Link>
                  </small>

                </p>
              </div>
            </div>



          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
