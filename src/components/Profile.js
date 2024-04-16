import React from 'react';
import { useParams } from 'react-router-dom';
import './Profile.css';

import {
    MDBCol,
    MDBContainer,
    MDBIcon,
    MDBRow,
    MDBTypography,
} from "mdb-react-ui-kit";
const Profile = (props) => {
    const { title, address, phone } = useParams();

    const menuStyle = {
        width: '1115px',
        height: '250px',

    };

    return (
        <>
            <div className="container">
                <div className='add'>
                    <div className='add1'>
                        <div className='row'>
                            <div className='col'>
                                <h2>{title}</h2>
                                <p>Address: {address}</p>
                                <p>Contact: {phone}</p>
                            </div>
                            <div className='col d-flex justify-content-end'>
                                <img className="" src="/logo.png" style={{ height: '125px', width: '125px' }} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='' style={menuStyle}>
                    <div className="card-body justify-content-center">
                        <h5 className="card-title"><strong>Today's Menu:</strong></h5>
                        <ul style={{}}>
                            <li>Varan</li>
                            <li>Batti</li>
                            <li>Vangyachi Bhaji</li>
                            <li>Shira</li>
                            <li>Rice</li>
                            <li>kanda, kakadi, papad etc.</li>
                        </ul>
                    </div>
                </div>
            </div>
            <MDBContainer className="">
                <MDBRow className="d-flex justify-content-center">
                    <MDBCol className="text-center">
                        <h2 className="mb-4">All Reviews</h2>

                    </MDBCol>
                </MDBRow>
                <MDBRow className="text-center">
                    <MDBCol md="4" className="mb-5 mb-md-0">

                        
                        <p className="px-xl-3">
                            <MDBIcon fas icon="quote-left" className="pe-2" />
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos
                            id officiis hic tenetur quae quaerat ad velit ab hic tenetur.
                        </p><h5 className="">Maria Smantha</h5>
                        <h6 className=" mb-3">Pune</h6>
                        <MDBTypography
                            listUnStyled
                            className="d-flex justify-content-center mb-0"
                        >
                            <li>
                                <MDBIcon fas icon="star" size="sm" className="text-warning" />
                            </li>
                            <li>
                                <MDBIcon fas icon="star" size="sm" className="text-warning" />
                            </li>
                            <li>
                                <MDBIcon fas icon="star" size="sm" className="text-warning" />
                            </li>
                            <li>
                                <MDBIcon fas icon="star" size="sm" className="text-warning" />
                            </li>
                            <li>
                                <MDBIcon
                                    fas
                                    icon="star-half-alt"
                                    size="sm"
                                    className="text-warning"
                                />
                            </li>
                        </MDBTypography>
                    </MDBCol>
                    <MDBCol md="4" className="mb-5 mb-md-0">

                        
                        <p className="px-xl-3">
                            <MDBIcon fas icon="quote-left" className="pe-2" />
                            Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
                            suscipit laboriosam, nisi ut aliquid commodi.
                        </p>
                        <h5 className="">Lisa Cudrow</h5>
                        <h6 className=" mb-3">Ahmednagar</h6>
                        <MDBTypography
                            listUnStyled
                            className="d-flex justify-content-center mb-0"
                        >
                            <li>
                                <MDBIcon fas icon="star" size="sm" className="text-warning" />
                            </li>
                            <li>
                                <MDBIcon fas icon="star" size="sm" className="text-warning" />
                            </li>
                            <li>
                                <MDBIcon fas icon="star" size="sm" className="text-warning" />
                            </li>
                            <li>
                                <MDBIcon fas icon="star" size="sm" className="text-warning" />
                            </li>
                            <li>
                                <MDBIcon fas icon="star" size="sm" className="text-warning" />
                            </li>
                        </MDBTypography>
                    </MDBCol>
                    <MDBCol md="4" className="mb-5 mb-md-0">

                       
                        <p className="px-xl-3">
                            <MDBIcon fas icon="quote-left" className="pe-2" />
                            At vero eos et accusamus et iusto odio dignissimos ducimus qui
                            blanditiis praesentium voluptatum.
                        </p>
                        <h5 className="">John Smith</h5>
                        <h6 className=" mb-3">Jalgaon</h6>
                        <MDBTypography
                            listUnStyled
                            className="d-flex justify-content-center mb-0"
                        >
                            <li>
                                <MDBIcon fas icon="star" size="sm" className="text-warning" />
                            </li>
                            <li>
                                <MDBIcon fas icon="star" size="sm" className="text-warning" />
                            </li>
                            <li>
                                <MDBIcon fas icon="star" size="sm" className="text-warning" />
                            </li>
                            <li>
                                <MDBIcon fas icon="star" size="sm" className="text-warning" />
                            </li>
                            <li>
                                <MDBIcon far icon="star" size="sm" className="text-warning" />
                            </li>
                        </MDBTypography>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </>
    );
}

export default Profile;


