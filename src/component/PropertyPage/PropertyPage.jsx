import React, { useState } from 'react';
import './PropertyPage.css';

const PropertyPage = () => {
  const [properties, setProperties] = useState([
    {
      "id": 1,
      "type": "rent",
      "title": "Studio Apartment",
      "description": "A charming studio apartment with modern amenities, nestled in the vibrant heart of the city. Ideal for young professionals seeking convenience and style.",
      "price": 1200,
      "bedrooms": 1,
      "bathrooms": 1,
      "squareFootage": 650,
      "images": "/images/property1.jpg"
    },
    {
      "id": 2,
      "type": "lease",
      "title": "Luxury Villa",
      "description": "Indulge in opulence with this luxurious 4-bedroom villa featuring a private pool and breathtaking views. Perfect for those who desire the finest living experience.",
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
      "description": "Discover the elegance of this beautifully designed 3-bedroom townhouse, complete with a private backyard, ideal for family gatherings and relaxation.",
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
      "description": "Experience urban living in this stylish loft apartment, located in the bustling heart of downtown. Perfect for those who love city life.",
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
      "description": "Enjoy the tranquility of beachside living in this stunning 5-bedroom house, offering direct access to the beach and breathtaking ocean views.",
      "price": 7500,
      "bedrooms": 5,
      "bathrooms": 4,
      "squareFootage": 4000,
      "images": "/images/property5.jpg"
    },
    {
      "id": 6,
      "type": "sale",
      "title": "Rustic Cabin",
      "description": "Escape to nature in this charming 2-bedroom cabin, nestled in the woods, perfect for a peaceful retreat away from the city.",
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
      "description": "Live in luxury in this modern 3-bedroom condo, offering panoramic city views and state-of-the-art amenities.",
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
      "description": "Find serenity in this beautiful 4-bedroom retreat, nestled in the tranquil mountains, perfect for a peaceful getaway.",
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
      "description": "Cozy up in this 2-bedroom lakefront cottage, offering stunning lake views and a relaxing atmosphere.",
      "price": 3500,
      "bedrooms": 2,
      "bathrooms": 1,
      "squareFootage": 1000,
      "images": "/images/property9.jpg"
    },
    {
      "id": 10,
      "type": "rent",
      "title": "Urban Studio",
      "description": "Stay trendy in this chic studio apartment, located in the heart of the city, perfect for urban dwellers.",
      "price": 9100,
      "bedrooms": 1,
      "bathrooms": 1,
      "squareFootage": 500,
      "images": "/images/property10.jpg"
    },
    {
      "id": 11,
      "type": "rent",
      "title": "City Center Apartment",
      "description": "Experience convenience in this spacious 2-bedroom apartment, situated in the bustling city center, close to all amenities.",
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
      "description": "Reside in this luxurious 3-bedroom penthouse, offering stunning city views and top-notch amenities.",
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
      "description": "Live grandly in this beautiful 6-bedroom country estate, set on acres of land, perfect for a luxurious rural lifestyle.",
      "price": 9000,
      "bedrooms": 6,
      "bathrooms": 4,
      "squareFootage": 6000,
      "images": "/images/property13.jpg"
    },
    {
      "id": 14,
      "type": "rent",
      "title": "Cozy Studio",
      "description": "Enjoy modern living in this cozy studio apartment, featuring a sleek design and all necessary amenities.",
      "price": 5000,
      "bedrooms": 1,
      "bathrooms": 1,
      "squareFootage": 550,
      "images": "/images/property14.jpg"
    },
    {
      "id": 15,
      "type": "lease",
      "title": "Beach House",
      "description": "Relax in this beautiful 3-bedroom beach house, offering stunning ocean views and a serene environment.",
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
      "description": "Settle into this spacious 4-bedroom family home, featuring a large backyard perfect for children and pets.",
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
      "description": "Experience luxury in this stunning 2-bedroom penthouse suite, offering breathtaking city views.",
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
      "description": "Retreat to this cozy 3-bedroom ski chalet, perfect for winter sports enthusiasts and nature lovers.",
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
      "description": "Own a piece of paradise with this picturesque 5-bedroom vineyard estate, complete with a wine cellar.",
      "price": 8800,
      "bedrooms": 5,
      "bathrooms": 3,
      "squareFootage": 5000,
      "images": "/images/property19.jpg"
    },
    {
      "id": 20,
      "type": "rent",
      "title": "Downtown Condo",
      "description": "Live in the heart of the city in this modern 1-bedroom condo, offering convenience and style.",
      "price": 5100,
      "bedrooms": 1,
      "bathrooms": 1,
      "squareFootage": 800,
      "images": "/images/property20.jpg"
    },
    {
      "id": 21,
      "type": "lease",
      "title": "Golf Course Home",
      "description": "Enjoy luxury living in this elegant 4-bedroom home, located on a premier golf course with stunning views.",
      "price": 5900,
      "bedrooms": 4,
      "bathrooms": 3,
      "squareFootage": 3200,
      "images": "/images/property21.jpg"
    },
    {
      "id": 22,
      "type": "sale",
      "title": "Historic Mansion",
      "description": "Step back in time in this grand 7-bedroom historic mansion, featuring original architectural details and modern upgrades.",
      "price": 7600,
      "bedrooms": 7,
      "bathrooms": 5,
      "squareFootage": 7000,
      "images": "/images/property22.jpg"
    }
  ]);

  const [selectedProperty, setSelectedProperty] = useState(null);

  const handleImageClick = (property) => {
    setSelectedProperty(property);
  };

  const handleCloseModal = () => {
    setSelectedProperty(null);
  };

  return (
    <div className="property-page12">
      <h1 className="property-page__heading12">Explore Exquisite Properties</h1>
      <div className="property-grid12">
        {properties.map((property) => (
          <div key={property.id} className="property-card12">
            <img
              src={property.images}
              alt={property.title}
              className="property-card__image12"
              onClick={() => handleImageClick(property)}
            />
          </div>
        ))}
      </div>

      {selectedProperty && (
        <div className="property-modal12">
          <div className="property-modal-content12">
            <span className="property-modal-close12" onClick={handleCloseModal}>&times;</span>
            <img src={selectedProperty.images} alt={selectedProperty.title} className="property-modal-image12" />
            <div className="property-modal-info12">
              <h2 className="property-name12">{selectedProperty.title}</h2>
              <p className="property-price12">
              ${selectedProperty.price.toLocaleString()} {selectedProperty.type === 'sale' ? '' : 'per month'}
              </p>
              <p className="property-description12">{selectedProperty.description}</p>
              <p className="property-size12">
                Bedrooms: {selectedProperty.bedrooms} | Bathrooms: {selectedProperty.bathrooms} | Square Footage: {selectedProperty.squareFootage.toLocaleString()}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PropertyPage;