import React, { useState, useEffect } from "react";
import "./PropertyCard.css";

const property = {
  images: {
    exterior: ["/images/property47.jpg", "/images/property46.jpg"],
    interior: ["/images/prop-ext.jpg", "/images/prop-ext1.jpg"],
    amenities: ["/images/amenities.jpg", "/images/amenities1.jpeg"],
    virtualTour: ["/images/virtualTour.jpg", "/images/virtualTour1.jpg"]
  },
  title: "Beautiful Family House",
  price: 250000,
  location: "123 Main St, Anytown, USA",
  type: "Single Family Home",
  bedrooms: 3,
  bathrooms: 2,
  squareFootage: 2000,
  amenities: ["Garage", "Pool", "Backyard"],
  description: "A beautiful family house in a great neighborhood.",
  contactName: "John Doe",
  contactPhone: "555-1234",
  contactEmail: "john@example.com",
  virtualTourLink: "https://example.com/virtual-tour"
};

const PropertyCard = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="property-card9">
      <div className="property-images9">
        {/* Render exterior images */}
        {property.images.exterior && property.images.exterior.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Exterior Image ${index + 1}`}
            className="property-image9"
          />
        ))}
        {/* Render interior images */}
        {property.images.interior && property.images.interior.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Interior Image ${index + 1}`}
            className="property-image9"
          />
        ))}
        {/* Render amenities images */}
        {property.images.amenities && property.images.amenities.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Amenities Image ${index + 1}`}
            className="property-image9"
          />
        ))}
        {/* Render virtual tour images */}
        {property.images.virtualTour && property.images.virtualTour.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Virtual Tour Image ${index + 1}`}
            className="property-image9"
          />
        ))}
      </div>
      <div className="property-details9">
        <h3 className="property-title">{property.title}</h3>
        <p className="property-price">Price: ${property.price.toLocaleString()}</p>
        <p className="property-location">Location: {property.location}</p>
        <p className="property-type">Property Type: {property.type}</p>
        <p className="property-bedrooms">Bedrooms: {property.bedrooms}</p>
        <p className="property-bathrooms">Bathrooms: {property.bathrooms}</p>
        <p className="property-square-footage">Square Footage: {property.squareFootage.toLocaleString()}</p>
        <ul className="property-amenities">
          {property.amenities &&
            property.amenities.map((amenity, index) => (
              <li key={index}>{amenity}</li>
            ))}
        </ul>
        <p className="property-description">Description: {property.description}</p>
        <div className="property-contact9">
          <p>Contact: {property.contactName}</p>
          <p>Phone: {property.contactPhone}</p>
          <p>Email: {property.contactEmail}</p>
        </div>
        <button className="view-details-button9" onClick={openModal}>
          View Details
        </button>
        {showModal && (
          <div className="modal9">
            <div className="modal-content9">
              <span className="close9" onClick={closeModal}>&times;</span>
              <h2>{property.title}</h2>
              <p>Price: ${property.price.toLocaleString()}</p>
              <p>Location: {property.location}</p>
              <p>Property Type: {property.type}</p>
              <p>Bedrooms: {property.bedrooms}</p>
              <p>Bathrooms: {property.bathrooms}</p>
              <p>Square Footage: {property.squareFootage.toLocaleString()}</p>
              <p>Description: {property.description}</p>
              <ul>Amenities:
                {property.amenities &&
                  property.amenities.map((amenity, index) => (
                    <li key={index}>{amenity}</li>
                  ))}
              </ul>
              <div className="property-contact9">
                <p>Contact: {property.contactName}</p>
                <p>Phone: {property.contactPhone}</p>
                <p>Email: {property.contactEmail}</p>
              </div>
              <a
                href={property.virtualTourLink}
                target="_blank"
                rel="noopener noreferrer"
                className="virtual-tour-link9"
              >
                Take a Virtual Tour
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PropertyCard;
