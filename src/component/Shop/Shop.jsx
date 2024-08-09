import React, { useEffect, useState } from "react";
import ReactModal from "react-modal";
import "./Shop.css";
import { FaSearch } from "react-icons/fa";



const Shop = () => {
    const [properties, setProperties] = useState([
      {
        id: 1,
        name: "Modern Family House",
        price: 4500,
        imageUrl: "/images/property9.jpg",
        location: "1234 Elm Street, Springfield, IL",
        description: "A modern family house with 4 bedrooms, 3 bathrooms, a spacious garden, and a two-car garage.",
        size: "2500 sqft"
      },
      {
        id: 2,
        name: "Luxury Villa",
        price: 5100,
        imageUrl: "/images/property10.jpg",
        location: "789 Ocean Drive, Miami, FL",
        description: "A luxury villa with stunning ocean views, 5 bedrooms, 4 bathrooms, a private pool, and a home theater.",
        size: "5000 sqft"
      },
      {
        id: 3,
        name: "Cozy Cottage",
        price: 3200,
        imageUrl: "/images/property11.jpg",
        location: "456 Country Road, Asheville, NC",
        description: "A cozy cottage with 2 bedrooms, 2 bathrooms, a fireplace, and a large backyard.",
        size: "1500 sqft"
      },
      {
        id: 4,
        name: "Downtown Apartment",
        price: 7000,
        imageUrl: "/images/property12.jpg",
        location: "101 Main Street, San Francisco, CA",
        description: "A stylish downtown apartment with 3 bedrooms, 2 bathrooms, and a fantastic city view.",
        size: "1800 sqft"
      },
      {
        id: 5,
        name: "Rustic Cabin",
        price: 6700,
        imageUrl: "/images/property13.jpg",
        location: "987 Mountain Road, Boulder, CO",
        description: "A rustic cabin with 3 bedrooms, 2 bathrooms, a wood stove, and a large deck.",
        size: "1400 sqft"
      },
      {
        id: 6,
        name: "Mountain Chalet",
        price: 4600,
        imageUrl: "/images/property14.jpg",
        location: "987 Mountain Road, Boulder, CO",
        description: "A mountain chalet with 3 bedrooms, 2 bathrooms, a stone fireplace, and scenic views.",
        size: "1400 sqft"
      },
      {
        id: 7,
        name: "Seaside Villa",
        price: 2600,
        imageUrl: "/images/property15.jpg",
        location: "987 Mountain Road, Boulder, CO",
        description: "A seaside villa with 3 bedrooms, 2 bathrooms, direct beach access, and panoramic ocean views.",
        size: "1400 sqft"
      },
      {
        id: 8,
        name: "City Loft",
        price: 4800,
        imageUrl: "/images/property16.jpg",
        location: "987 Mountain Road, Boulder, CO",
        description: "A city loft with 2 bedrooms, 1 bathroom, modern design, and rooftop terrace.",
        size: "1400 sqft"
      },
      {
        id: 9,
        name: "Lakefront Retreat",
        price: 7000,
        imageUrl: "/images/property26.jpg",
        location: "987 Mountain Road, Boulder, CO",
        description: "A lakefront retreat with 3 bedrooms, 2 bathrooms, private dock, and stunning lake views.",
        size: "1400 sqft"
      },
      {
        id: 10,
        name: "Urban Studio",
        price: 9000,
        imageUrl: "/images/property27.jpg",
        location: "987 Mountain Road, Boulder, CO",
        description: "An urban studio apartment with open floor plan, modern amenities, and city skyline views.",
        size: "1400 sqft"
      },
      {
        id: 11,
        name: "Country Home",
        price: 6500,
        imageUrl: "/images/property19.jpg",
        location: "987 Mountain Road, Boulder, CO",
        description: "A charming country home with 3 bedrooms, 2 bathrooms, wrap-around porch, and scenic views.",
        size: "1400 sqft"
      },
      {
        id: 12,
        name: "Beachfront House",
        price: 6400,
        imageUrl: "/images/property20.jpg",
        location: "987 Mountain Road, Boulder, CO",
        description: "A beachfront house with 4 bedrooms, 3 bathrooms, panoramic windows, and private beach access.",
        size: "1400 sqft"
      },
      {
        id: 13,
        name: "Golf Course Villa",
        price: 2900,
        imageUrl: "/images/property21.jpg",
        location: "987 Mountain Road, Boulder, CO",
        description: "A villa overlooking the golf course with 3 bedrooms, 2 bathrooms, and lush green views.",
        size: "1400 sqft"
      },
      {
        id: 14,
        name: "Hillside Retreat",
        price: 2600,
        imageUrl: "/images/property22.jpg",
        location: "987 Mountain Road, Boulder, CO",
        description: "A hillside retreat with 2 bedrooms, 1 bathroom, surrounded by nature and hiking trails.",
        size: "1400 sqft"
      },
      {
        id: 15,
        name: "City Penthouse",
        price: 2700,
        imageUrl: "/images/property23.jpg",
        location: "987 Mountain Road, Boulder, CO",
        description: "A city penthouse with 3 bedrooms, 2 bathrooms, rooftop terrace, and stunning city views.",
        size: "1400 sqft"
      },
      {
        id: 16,
        name: "Lakeview Cottage",
        price: 8100,
        imageUrl: "/images/property24.jpg",
        location: "987 Mountain Road, Boulder, CO",
        description: "A lakeview cottage with 2 bedrooms, 2 bathrooms, dock access, and serene lake views.",
        size: "1400 sqft"
      }
    ]);
  
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedProperty, setSelectedProperty] = useState(null);

    const openModal = (property) => {
        setSelectedProperty(property);
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setSelectedProperty(null);
        setModalIsOpen(false);
    };

    return (
        <div className="shop-container10">
            <h1 className="shop-heading10">Explore Exquisite Properties</h1>
            <div className="property-grid10">
                {properties.map((property) => (
                    <div key={property.id} className="property-card10">
                        <img
                            src={property.imageUrl}
                            alt={property.name}
                            onClick={() => openModal(property)}
                            className="property-image110"
                        />
                    </div>
                ))}
            </div>

            {selectedProperty && (
                <ReactModal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    contentLabel="Property Details"
                    className="modal10"
                    overlayClassName="overlay10"
                >
                    <img
                        src={selectedProperty.imageUrl}
                        alt={selectedProperty.name}
                    />
                    <h3>{selectedProperty.name}</h3>
                    <p>Price: ${selectedProperty.price.toLocaleString()}</p>
                    <p>Location: {selectedProperty.location}</p>
                    <p>{selectedProperty.description}</p>
                    <p>Size: {selectedProperty.size}</p>
                    <button onClick={closeModal} className="btn">Close</button>
                </ReactModal>
            )}
        </div>
    );
};

export default Shop;
