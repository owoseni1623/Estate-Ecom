import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./FilterPage.css";

const Filters = ({ properties, onFiltersChange }) => {
  const navigate = useNavigate();
  const [filters, setFilters] = useState({
    location: "",
    price: "",
    propertyType: "",
    bedrooms: "",
    bathrooms: "",
    squareFootage: "",
    amenities: [],
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (name === "amenities") {
      setFilters((prevFilters) => ({
        ...prevFilters,
        amenities: checked
          ? [...prevFilters.amenities, value]
          : prevFilters.amenities.filter((a) => a !== value),
      }));
    } else {
      setFilters((prevFilters) => ({
        ...prevFilters,
        [name]: type === "number" ? parseInt(value) : value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const filteredProperties = properties.filter((property) => {
      const {
        location,
        price,
        propertyType,
        bedrooms,
        bathrooms,
        squareFootage,
        amenities,
      } = filters;

      if (
        location &&
        property.location &&
        !property.location.toLowerCase().includes(location.toLowerCase())
      ) {
        return false;
      }

      const parsedPrice = price ? parseFloat(price.replace(/[$,]/g, "")) : null;
      if (
        parsedPrice !== null &&
        (property.price < parsedPrice || property.price > parsedPrice)
      ) {
        return false;
      }

      if (propertyType && property.type !== propertyType) {
        return false;
      }

      if (bedrooms && property.bedrooms !== bedrooms) {
        return false;
      }

      if (bathrooms && property.bathrooms !== bathrooms) {
        return false;
      }

      if (squareFootage && property.squareFootage !== squareFootage) {
        return false;
      }

      if (
        amenities.length > 0 &&
        !amenities.every((amenity) => property.amenities.includes(amenity))
      ) {
        return false;
      }

      return true;
    });

    onFiltersChange(filteredProperties);
    navigate("/filtered-properties", { state: { filteredProperties } });
  };

  return (
    <div className="filters-container">
      <form onSubmit={handleSubmit}>
        <div className="filter-group">
          <label htmlFor="location" className="filter-label">
            Location
          </label>
          <input
            type="text"
            id="location"
            name="location"
            value={filters.location}
            onChange={handleChange}
            className="filter-input"
          />
        </div>
        <div className="filter-group">
          <label htmlFor="price" className="filter-label">
            Price
          </label>
          <input
            type="text"
            id="price"
            name="price"
            value={filters.price}
            onChange={handleChange}
            className="filter-input"
          />
        </div>
        <div className="filter-group">
          <label htmlFor="propertyType" className="filter-label">
            Property Type
          </label>
          <select
            id="propertyType"
            name="propertyType"
            value={filters.propertyType}
            onChange={handleChange}
            className="filter-input"
          >
            <option value="">Select</option>
            <option value="rent">Rent</option>
            <option value="lease">Lease</option>
            <option value="sale">Sale</option>
          </select>
        </div>
        <div className="filter-group">
          <label htmlFor="bedrooms" className="filter-label">
            Bedrooms
          </label>
          <input
            type="number"
            id="bedrooms"
            name="bedrooms"
            value={filters.bedrooms}
            onChange={handleChange}
            className="filter-input"
          />
        </div>
        <div className="filter-group">
          <label htmlFor="bathrooms" className="filter-label">
            Bathrooms
          </label>
          <input
            type="number"
            id="bathrooms"
            name="bathrooms"
            value={filters.bathrooms}
            onChange={handleChange}
            className="filter-input"
          />
        </div>
        <div className="filter-group">
          <label htmlFor="squareFootage" className="filter-label">
            Square Footage
          </label>
          <input
            type="number"
            id="squareFootage"
            name="squareFootage"
            value={filters.squareFootage}
            onChange={handleChange}
            className="filter-input"
          />
        </div>
        <div className="filter-group">
          <label htmlFor="amenities" className="filter-label">
            Amenities
          </label>
          <div className="filter-checkboxes">
            <label>
              <input
                type="checkbox"
                name="amenities"
                value="pool"
                checked={filters.amenities.includes("pool")}
                onChange={handleChange}
              />
              Pool
            </label>
            <label>
              <input
                type="checkbox"
                name="amenities"
                value="gym"
                checked={filters.amenities.includes("gym")}
                onChange={handleChange}
              />
              Gym
            </label>
            <label>
              <input
                type="checkbox"
                name="amenities"
                value="parking"
                checked={filters.amenities.includes("parking")}
                onChange={handleChange}
              />
              Parking
            </label>
          </div>
        </div>
        <button type="submit" className="filter-submit">
          Apply Filters
        </button>
      </form>
    </div>
  );
};

export default Filters;
