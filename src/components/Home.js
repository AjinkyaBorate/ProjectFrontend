import React from 'react'
import './Home.css';
import Card from './Cards';
import { Link } from 'react-router-dom';


function Home() {
  return (
    <>
    <div id="carouselExampleControls" className="carousel slide mt-5" data-bs-ride="carousel" style={{ marginBottom: '0px', position: 'relative' }}>
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
  
  <Link to="https://annapurnamess.onrender.com">
    <button className="btn position-absolute top-50 start-50 translate-middle" style={{ textDecoration: 'underline', color: 'white' }}>
      Know More About Venture
    </button>
  </Link>

  <div className="carousel-caption d-none d-md-block" style={{ marginBottom: '100px' }}>
    <p>Some representative placeholder content for the third slide.</p>
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

<div className="sub-container mb-5" style={{ marginBottom: '30px' }}>
  <h2 className="text-center mb-5 mt-4">Promoting HouseHolds Kitchens on the Internet</h2>
  <div className="row">
    <div className="col ">
      <div className="card">
        <img src="/enjoy.svg" className="card-img-top" alt="..." />
        <div className="card-body">
          {/* <p className="card-text">
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </p> */}
        </div>
      </div>
    </div>
    <div className="col">
      <div className="card">
        <img src="/do-not-blink.svg" className="card-img-top" alt="..." />
        <div className="card-body">
          {/* <p className="card-text">
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </p> */}
        </div>
      </div>
    </div>
    <div className="col">
      <div className="card">
        <img src="/enjoy.svg" className="card-img-top" alt="..." />
        <div className="card-body">
          {/* <p className="card-text">
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </p> */}
        </div>
      </div>
    </div>
  </div>
</div>
 {/* Featured Dishes Section */}
 <section className="py-5">
      <div className="container text-center">
        <h2 className="mb-4">Featured Dishes</h2>
        <p className="text-left">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae temporibus corrupti consequuntur omnis, dolorum debitis sed, ab veritatis non voluptatem rerum aliquam molestiae perspiciatis hic error sequi provident magnam odio, officia asperiores nostrum eveniet. Quisquam quae nam laudantium vero iusto! Quibusdam consectetur, sit excepturi ipsam repellendus cum fuga harum. Ducimus architecto maiores ratione quod sapiente. Consequuntur recusandae ducimus delectus quia ad consectetur harum sit neque nesciunt quis ullam eaque corrupti molestiae officia qui fuga facilis rem fugiat, aliquam assumenda ea minus! Est aut placeat eaque cumque, ipsa laboriosam laudantium dolores quas voluptas illo soluta perferendis consequatur possimus eos repellat veniam?
        </p>
      </div>
    </section>

      {/* here is the HOW IT WORKS PAGE */}
      {/*  */}


    <div className="card-container">
      <Card title={"Asthavinayak Mess"} description={"There is no comparison for your service and your hospitality"} imageUrl={'./food.jpg'} />
      <Card title={"Sarthak Mess"} description={"There is no comparison for your service and your hospitality"} imageUrl={'./food1.jpg'} />
      <Card title={"Chintamani Food Center"} description={"There is no comparison for your service and your hospitality"} imageUrl={'./food2.jpg'} />
      <Card title={"Anupama's Kitchen"} description={"There is no comparison for your service and your hospitality"} imageUrl={'./food3.jpg'} />
      <Card title={"RajaLakshmi Dosa Corner"} description={"There is no comparison for your service and your hospitality"} imageUrl={'./south_indian.jpg'} />
    </div>


    </>
  )
}

export default Home