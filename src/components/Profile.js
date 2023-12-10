import React from 'react'
import { Link ,Outlet} from 'react-router-dom';
export default function Profile() {
    const carauselSize = {
        height: '410px'
    }
    const menuStyle = {
        width: '1115px',
        height: '250px',
    };

    const cardStyle = {
        width: '1115px',
        height: '250px',
    };
    return (
        <>
            <div className='container mt-5'>
                <div className='mt-2'>
                    <h1 className='text-center'>Mess Name</h1>
                    <p>Address:</p>
                    <p>Contact:</p>
                </div>
                <div>
                    <div id="carouselExample" class="carousel slide">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src="/food3.jpg" class="d-block w-100" style={carauselSize} alt="..." />
                            </div>
                            <div class="carousel-item">
                                <img src="food5.jpg" class="d-block w-100" style={carauselSize} alt="..." />
                            </div>
                            <div class="carousel-item">
                                <img src="food6.jpg" class="d-block w-100" style={carauselSize} alt="..." />
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
                <div className='container border border-dark mt-5' style={menuStyle}>
                    <div className="card-body">
                        <h5 className="card-title"><strong>Today's Menu:</strong></h5>
                        <ul>
                            <li>Coffee</li>
                            <li>Tea</li>
                            <li>Milk</li>
                            <li>Milk</li>
                            <li>Milk</li>
                            <li>Milk</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <ul class="nav">
                        <li class="nav-item">
                            <Link to="/profile/overview" className="nav-link">Overview</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/profile/features" className="nav-link active">Features</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/profile/prices" className="nav-link active">Prices </Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/profile/photos" className="nav-link active">Photos</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/profile/reveiws" className="nav-link active">Reveiws</Link>
                        </li>
                    </ul>
                </div>

               <Outlet/>
               
                <div className="container text-center mb-5 border border-dark" style={cardStyle}>
                    <div className="card-body">
                        <h5 className="card-title ">Map</h5>

                    </div>
                </div>


            </div>
        </>
    )
}
