import React from "react";
import "./Cards.css";
import { MapPin } from 'lucide-react';
import { Link } from "react-router-dom";

const Card = ({ title, description, imageUrl, buttonText }) => {
  return (
    <div className="container">
    <div className="card-container mt-4"> {/* Add margin-top to create space */}
      <div className="card mb-3">
        <img src={imageUrl} className="card-img" alt={title} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          
          <button className="btn btn-info">
            <Link to="/profile" className="">Contact</Link>
          </button>
          <p className="card-text">
            <small className="text-muted">Last updated 3 mins ago</small>
            <Link> <MapPin />   </Link>
          </p>
          
        </div>
      </div>
    </div>
    </div>
  );
};

export default Card;
