import React, { useState, useEffect } from "react";
import "./PropertyList.css";


const PropertyList = () => {
  const [properties, setProperties] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState(null);

  useEffect(() => {
    const propertyData = [
      {
        "id": 1,
        "type": "rent",
        "title": "Cozy Apartment",
        "description": "A Studio Apartment 1-bedroom apartment in the heart of the city.",
        "price": 1200,
        "bedrooms": 1,
        "bathrooms": 1,
        "squareFootage": 650,
        "imageUrl": "/images/property1.jpg",
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
        "imageUrl": "/images/property2.jpg"
      },
      {
        "id": 3,
        "type": "sale",
        "title": "Modern Townhouse",
        "description": "A beautifully designed 3-bedroom townhouse with a private backyard.",
        "price": 450000,
        "bedrooms": 3,
        "bathrooms": 2,
        "squareFootage": 1800,
        "imageUrl": "/images/property3.jpg"
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
        "imageUrl": "/images/property4.jpg"
      },
      {
        "id": 5,
        "type": "lease",
        "title": "Beachfront House",
        "description": "A stunning 5-bedroom house right on the beach.",
        "price": 7500,
        "bedrooms": 5,
        "bathrooms": 4,
        "squareFootage": 4000,
        "imageUrl": "/images/property5.jpg"
      },
      {
        "id": 6,
        "type": "sale",
        "title": "Rustic Cabin",
        "description": "A charming 2-bedroom cabin in the woods.",
        "price": 250000,
        "bedrooms": 2,
        "bathrooms": 1,
        "squareFootage": 1200,
        "imageUrl": "/images/property6.jpg"
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
        "imageUrl": "/images/property7.jpg"
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
        "imageUrl": "/images/property8.jpg"
      },
      {
        "id": 9,
        "type": "sale",
        "title": "Lakefront Cottage",
        "description": "A cozy 2-bedroom cottage with stunning lake views.",
        "price": 350000,
        "bedrooms": 2,
        "bathrooms": 1,
        "squareFootage": 1000,
        "imageUrl": "/images/property9.jpg"
      },
      {
        "id": 10,
        "type": "rent",
        "title": "Urban Studio",
        "description": "A trendy studio apartment in the heart of the city.",
        "price": 900,
        "bedrooms": 0,
        "bathrooms": 1,
        "squareFootage": 500,
        "imageUrl": "/images/property10.jpg"
      },
      {
        "id": 11,
        "type": "rent",
        "title": "City Center Apartment",
        "description": "A spacious 2-bedroom apartment in the city center.",
        "price": 1800,
        "bedrooms": 2,
        "bathrooms": 2,
        "squareFootage": 1200,
        "imageUrl": "/images/property11.jpg"
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
        "imageUrl": "/images/property12.jpg"
      },
      {
        "id": 13,
        "type": "sale",
        "title": "Country Estate",
        "description": "A beautiful 6-bedroom country estate with acres of land.",
        "price": 1200000,
        "bedrooms": 6,
        "bathrooms": 4,
        "squareFootage": 6000,
        "imageUrl": "/images/property13.jpg"
      },
      {
        "id": 14,
        "type": "rent",
        "title": "Studio Apartment",
        "description": "A cozy studio apartment with a modern design.",
        "price": 1000,
        "bedrooms": 0,
        "bathrooms": 1,
        "squareFootage": 550,
        "imageUrl": "/images/property14.jpg"
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
        "imageUrl": "/images/property15.jpg"
      },
      {
        "id": 16,
        "type": "sale",
        "title": "Family Home",
        "description": "A spacious 4-bedroom family home with a large backyard.",
        "price": 550000,
        "bedrooms": 4,
        "bathrooms": 3,
        "squareFootage": 2400,
        "imageUrl": "/images/property16.jpg"
      },
      {
        "id": 17,
        "type": "rent",
        "title": "Penthouse Suite",
        "description": "A luxurious 2-bedroom penthouse suite with stunning city views.",
        "price": 3500,
        "bedrooms": 2,
        "bathrooms": 2,
        "squareFootage": 1800,
        "imageUrl": "/images/property17.jpg"
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
        "imageUrl": "/images/property18.jpg"
      },
      {
        "id": 19,
        "type": "sale",
        "title": "Vineyard Estate",
        "description": "A picturesque 5-bedroom vineyard estate with a wine cellar.",
        "price": 1800000,
        "bedrooms": 5,
        "bathrooms": 4,
        "squareFootage": 5000,
        "imageUrl": "/images/property19.jpg"
      },
      {
        "id": 20,
        "type": "rent",
        "title": "Downtown Condo",
        "description": "A modern 1-bedroom condo in the heart of downtown.",
        "price": 1500,
        "bedrooms": 1,
        "bathrooms": 1,
        "squareFootage": 800,
        "imageUrl": "/images/property20.jpg"
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
        "imageUrl": "/images/property21.jpg"
      }
    ];

    setProperties(propertyData);
  }, []);

  const handlePropertyClick = (property) => {
    setSelectedProperty(property);
    setShowModal(true);
  };

  return (
    <div className="property-list2">
      <h2 className="property-list__title2">Property Listings</h2>
      <div className="property-list__grid2">
        {properties.map((property) => (
          <div
            key={property.id}
            className="property-card2"
            onClick={() => handlePropertyClick(property)}
          >
            <img
              src={property.imageUrl}
              alt={property.title}
              className="property-card__image2"
            />
            <h3 className="property-card__title2">{property.title}</h3>
            <p className="property-card__price2">${property.price}</p>
          </div>
        ))}
      </div>
      {showModal && selectedProperty && (
        <div className="property-modal2">
          <div className="property-modal__content2">
            <button
              className="property-modal__close2"
              onClick={() => setShowModal(false)}
            >
              &times;
            </button>
            <img
              src={selectedProperty.imageUrl}
              alt={selectedProperty.title}
              className="property-modal__image2"
            />
            <h3 className="property-modal__title2">{selectedProperty.title}</h3>
            <p className="property-modal__price2">
              ${selectedProperty.price}
            </p>
            <p className="property-modal__description2">
              {selectedProperty.description}
            </p>
            <p className="property-modal__details2">
              Bedrooms: {selectedProperty.bedrooms} | Bathrooms:{" "}
              {selectedProperty.bathrooms} | Square Footage:{" "}
              {selectedProperty.squareFootage}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default PropertyList;
