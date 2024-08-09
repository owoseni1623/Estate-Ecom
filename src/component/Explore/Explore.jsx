import React, {useState} from "react";
import { useParams, Link } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";
import "./Explore.css";



const propertyData = {
  "properties": [
    {
      "id": 1,
      "type": "rent",
      "title": "Cozy Apartment",
      "description": "A cozy 1-bedroom apartment in the heart of the city.",
      "price": 1200,
      "bedrooms": 2,
      "bathrooms": 1,
      "squareFootage": 650,
      "images": "/images/property1.jpg"
    },
    {
      "id": 2,
      "type": "lease",
      "title": "Luxury Villa",
      "description": "A luxurious 4-bedroom villa with a private pool.",
      "price": 5000,
      "bedrooms": 4,
      "bathrooms": 3,
      "squareFootage": 3200,
      "images": "/images/property2.jpg"
    },
    {
      "id": 3,
      "type": "sale",
      "title": "Modern Townhouse",
      "description": "A beautifully designed 3-bedroom townhouse with a private backyard.",
      "price": 4500,
      "bedrooms": 3,
      "bathrooms": 2,
      "squareFootage": 1800,
      "images": "/images/property3.jpg"
    },
    {
      "id": 4,
      "type": "rent",
      "title": "Downtown Loft",
      "description": "A stylish loft apartment in the heart of downtown.",
      "price": 1800,
      "bedrooms": 2,
      "bathrooms": 2,
      "squareFootage": 1100,
      "images": "/images/property4.jpg"
    },
    {
      "id": 5,
      "type": "lease",
      "title": "Beachfront House",
      "description": "A stunning 5-bedroom house right on the beach.",
      "price": 7500,
      "bedrooms": 4,
      "bathrooms": 2,
      "squareFootage": 4000,
      "images": "/images/property5.jpg"
    },
    {
      "id": 6,
      "type": "sale",
      "title": "Rustic Cabin",
      "description": "A charming 2-bedroom cabin in the woods.",
      "price": 2500,
      "bedrooms": 2,
      "bathrooms": 1,
      "squareFootage": 1200,
      "images": "/images/property6.jpg"
    },
    {
      "id": 7,
      "type": "rent",
      "title": "City View Condo",
      "description": "A modern 3-bedroom condo with panoramic city views.",
      "price": 2800,
      "bedrooms": 3,
      "bathrooms": 2,
      "squareFootage": 1600,
      "images": "/images/property7.jpg"
    },
    {
      "id": 8,
      "type": "lease",
      "title": "Mountain Retreat",
      "description": "A serene 4-bedroom retreat nestled in the mountains.",
      "price": 6000,
      "bedrooms": 4,
      "bathrooms": 3,
      "squareFootage": 3000,
      "images": "/images/property8.jpg"
    },
    {
      "id": 9,
      "type": "sale",
      "title": "Lakefront Cottage",
      "description": "A cozy 2-bedroom cottage with stunning lake views.",
      "price": 3500,
      "bedrooms": 2,
      "bathrooms": 1,
      "squareFootage": 100,
      "images": "/images/property9.jpg"
    },
    {
      "id": 10,
      "type": "rent",
      "title": "Urban Studio",
      "description": "A trendy studio apartment in the heart of the city.",
      "price": 9100,
      "bedrooms": 3,
      "bathrooms": 1,
      "squareFootage": 500,
      "images": "/images/property10.jpg"
    },
    {
      "id": 11,
      "type": "rent",
      "title": "City Center Apartment",
      "description": "A spacious 2-bedroom apartment in the city center.",
      "price": 6800,
      "bedrooms": 2,
      "bathrooms": 2,
      "squareFootage": 1200,
      "images": "/images/property11.jpg"
    },
    {
      "id": 12,
      "type": "lease",
      "title": "Luxury Penthouse",
      "description": "A luxurious 3-bedroom penthouse with stunning city views.",
      "price": 7500,
      "bedrooms": 3,
      "bathrooms": 3,
      "squareFootage": 2500,
      "images": "/images/property12.jpg"
    },
    {
      "id": 13,
      "type": "sale",
      "title": "Country Estate",
      "description": "A beautiful 6-bedroom country estate with acres of land.",
      "price": 9000,
      "bedrooms": 4,
      "bathrooms": 3,
      "squareFootage": 6000,
      "images": "/images/property13.jpg"
    },
    {
      "id": 14,
      "type": "rent",
      "title": "Studio Apartment",
      "description": "A cozy studio apartment with a modern design.",
      "price": 1000,
      "bedrooms": 1,
      "bathrooms": 1,
      "squareFootage": 550,
      "images": "/images/property14.jpg"
    },
    {
      "id": 15,
      "type": "lease",
      "title": "Beach House",
      "description": "A beautiful 3-bedroom beach house with ocean views.",
      "price": 4500,
      "bedrooms": 3,
      "bathrooms": 2,
      "squareFootage": 2000,
      "images": "/images/property15.jpg"
    },
    {
      "id": 16,
      "type": "sale",
      "title": "Family Home",
      "description": "A spacious 4-bedroom family home with a large backyard.",
      "price": 5000,
      "bedrooms": 4,
      "bathrooms": 2,
      "squareFootage": 2400,
      "images": "/images/property16.jpg"
    },
    {
      "id": 17,
      "type": "rent",
      "title": "Penthouse Suite",
      "description": "A luxurious 2-bedroom penthouse suite with stunning city views.",
      "price": 3500,
      "bedrooms": 2,
      "bathrooms": 1,
      "squareFootage": 1800,
      "images": "/images/property17.jpg"
    },
    {
      "id": 18,
      "type": "lease",
      "title": "Ski Chalet",
      "description": "A cozy 3-bedroom ski chalet in the mountains.",
      "price": 4000,
      "bedrooms": 3,
      "bathrooms": 2,
      "squareFootage": 2200,
      "images": "/images/property18.jpg"
    },
    {
      "id": 19,
      "type": "sale",
      "title": "Vineyard Estate",
      "description": "A picturesque 5-bedroom vineyard estate with a wine cellar.",
      "price": 8800,
      "bedrooms": 2,
      "bathrooms": 2,
      "squareFootage": 5000,
      "images": "/images/property19.jpg"
    },
    {
      "id": 20,
      "type": "rent",
      "title": "Downtown Condo",
      "description": "A modern 1-bedroom condo in the heart of downtown.",
      "price": 1500,
      "bedrooms": 3,
      "bathrooms": 3,
      "squareFootage": 800,
      "images": "/images/property20.jpg"
    },
    {
      "id": 21,
      "type": "lease",
      "title": "Golf Course Home",
      "description": "A beautiful 4-bedroom home overlooking the golf course.",
      "price": 4200,
      "bedrooms": 4,
      "bathrooms": 3,
      "squareFootage": 2800,
      "images": "/images/property21.jpg"
    },
    {
      "id": 22,
      "type": "lease",
      "title": "Hillside Haven",
      "description": "A serene 4-bedroom home with panoramic hillside views.",
      "price": 7200,
      "bedrooms": 4,
      "bathrooms": 2,
      "squareFootage": 2800,
      "images": "/images/property30.jpg"
    },
    {
      "id": 23,
      "type": "sale",
      "title": "Countryside Mansion",
      "description": "A luxurious 6-bedroom mansion set in the countryside.",
      "price": 6200,
      "bedrooms": 6,
      "bathrooms": 5,
      "squareFootage": 4500,
      "images": "/images/property31.jpg"
    },
    {
      "id": 24,
      "type": "rent",
      "title": "Seaside Cottage",
      "description": "A charming 3-bedroom cottage by the sea.",
      "price": 4200,
      "bedrooms": 3,
      "bathrooms": 2,
      "squareFootage": 1800,
      "images": "/images/property32.jpg"
    },
    {
      "id": 25,
      "type": "sale",
      "title": "Urban Penthouse",
      "description": "A modern 4-bedroom penthouse with city skyline views.",
      "price": 8500,
      "bedrooms": 4,
      "bathrooms": 3,
      "squareFootage": 2500,
      "images": "/images/property33.jpg"
    }
  ]
};



const ExplorePage = () => {
  const { id } = useParams();
  const [showModal, setShowModal] = useState(null); // State to track which modal is open

  const handleClose = () => setShowModal(null); // Function to close modal

  const handleShow = (propertyId) => () => {
    setShowModal(propertyId); // Function to open modal for specific property
  };

  if (id && !propertyData.properties.find(property => property.id === parseInt(id))) {
    return <div>Property not found</div>;
  }

  return (
    <div className="properties-container4">
      <h1 className="properties-heading4">Explore Properties</h1>
      {propertyData.properties.map((property) => (
        <div className="property-item4" key={property.id}>
          <Link to="#" onClick={handleShow(property.id)} className="property-title4">
            {property.title}
          </Link>

          {/* Modal for displaying property details */}
          <Modal
            show={showModal === property.id}
            onHide={handleClose}
            centered
            dialogClassName="custom-modal"
          >
            <Modal.Header closeButton>
              <Modal.Title>{property.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <img
                src={property.images}
                alt={property.title}
                className="property-image4"
              />
              <p>{property.description}</p>
              <p>Price: ${property.price}</p>
              <p>Bedrooms: {property.bedrooms}</p>
              <p>Bathrooms: {property.bathrooms}</p>
              <p>Square Footage: {property.squareFootage} sq ft</p>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      ))}
    </div>
  );
};

export default ExplorePage;