import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import './Services.css';

function Services() {
  return (
    <div className='container pt-3'>
      <Accordion defaultActiveKey="0" className='ser' >
      <Accordion.Item eventKey="0">
        <Accordion.Header>1.Mess Listings:</Accordion.Header>
        <Accordion.Body>
        Allow mess owners to list their services on your platform. Users can browse through these listings to find a mess that suits their preferences.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>2.User Reviews and Ratings:</Accordion.Header>
        <Accordion.Body>Allow users to leave reviews and ratings for the messes they've visited. This helps others make informed decisions and provides valuable feedback to mess owners.
         </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>3.Map Integration</Accordion.Header>
        <Accordion.Body>Integrate maps to display the location of each mess accurately. Users can view nearby messes and get directions to their chosen one.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>4.User Accounts:</Accordion.Header>
        <Accordion.Body>
        Allow users to create accounts where they can save their favorite messes, view their booking history, and manage their preferences.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="5">
        <Accordion.Header>5.Search and Filter:</Accordion.Header>
        <Accordion.Body>Implement search and filter functionalities to help users narrow down their options based on location, cuisine, price, ratings, and other preferences.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="6">
        <Accordion.Header>6.Menu Management and Attendance Management:</Accordion.Header>
        <Accordion.Body>Implement search and filter functionalities to help users narrow down their options based on location, cuisine, price, ratings, and other preferences.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="7">
        <Accordion.Header>7.Payments:</Accordion.Header>
        <Accordion.Body>Implement search and filter functionalities to help users narrow down their options based on location, cuisine, price, ratings, and other preferences.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </div>
  )
}

export default Services;