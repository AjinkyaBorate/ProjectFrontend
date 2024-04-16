import React from 'react';
import './Home.css';
import Card from './Cards';
// import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <div id="carouselExampleControls" className="carousel slide mt-5" style={{ marginBottom: '0px', position: 'relative' }}>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="/food.jpg" className="d-block w-100" alt="..." />

          </div>
          <div className="carousel-item">
            <img src="/food1.jpg" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="/food2.jpg" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="/food4.jpg" className="d-block w-100" alt="..." />
          </div>
        </div>
        <div className="carousel-caption d-flex align-items-center justify-content-center">
          <div className="text-center txt">
            <h2>Welcome to "Find My Mess"</h2>
            <p>"Explore diverse messes effortlessly with Find My Mess. Your perfect dining experience awaits.<br/>Join us now!"</p>
          </div>
        </div>

        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div iv className="sub-container mb-5" style={{ marginBottom: '30px' }}>
        <h2 className="text-center mb-5 mt-4">Promoting HouseHolds Kitchens on the Internet</h2>
        <div className="row justify-content-center">
          <div className="col " style={{ maxWidth: '30%' }}>
            <div className="card">
              <img src="/enjoy.svg" className="card-img-top" alt="..." />
              <div className="card-body">
              </div>
            </div>
          </div>
          <div className="col" style={{ maxWidth: '30%' }}>
            <div className="card">
              <img src="/do-not-blink.svg" className="card-img-top" alt="..." />
              <div className="card-body">
              </div>
            </div>
          </div>
          <div className="col" style={{ maxWidth: '30%' }}>
            <div className="card">
              <img src="/enjoy.svg" className="card-img-top" alt="..." />
              <div className="card-body">
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <h2 className='text-center'>Find Your Mess</h2>
        <div className="row">
          <div className="col-md-6">
            <Card title={"Asthavinayak Mess"} description={"There is no comparison for your service and your hospitality"} address={"Ashtavinayak Bhojanalay, Plot No. 47, Chandini Chowk, Shiv Colony, Jalgaon, Maharashtra 425001"} imageUrl={'./food.jpg'} />
          </div>
          <div className="col-md-6">
            <Card title={"Sarthak Mess"} description={"There is no comparison for your service and your hospitality"} address={"Ojas Corner, 2H22+55M, Old Postal Colony Rd, Ramanand Nagar, Jalgaon, Maharashtra 425001"} imageUrl={'./food1.jpg'} />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <Card title={"Chintamani Food Center"} description={"There is no comparison for your service and your hospitality"} address={"akola"} imageUrl={'./food2.jpg'} />
          </div>
          <div className="col-md-6">
            <Card title={"Anupama's Kitchen"} description={"There is no comparison for your service and your hospitality"} address={"Ahilyanagar"} phone={""} imageUrl={'./food3.jpg'} />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <Card title={"Chintamani Food Center"} description={"There is no comparison for your service and your hospitality"} address={"mumbai"} imageUrl={'./food2.jpg'} />
          </div>
          <div className="col-md-6">
            <Card title={"Anupama's Kitchen"} description={"There is no comparison for your service and your hospitality"} address={"pune"} phone={""} imageUrl={'./food3.jpg'} />
          </div>
        </div>
      </div>



    </>
  )
}

export default Home;
