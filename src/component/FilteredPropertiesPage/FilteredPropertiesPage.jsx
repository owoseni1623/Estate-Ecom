import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./FilteredPropertiesPage.css";
import PropertyCard from "../FilterPropertyCard/PropertyCard";



const FilteredPropertiesPage = ({ filteredProperties }) => {
    const location = useLocation();
    const [query, setQuery] = useState("");
  
    useEffect(() => {
      const searchParams = new URLSearchParams(location.search);
      const filterQuery = searchParams.get("query");
      setQuery(filterQuery || "");
    }, [location]);
  
    return (
      <div className="filtered-properties-page">
        <h2>Filtered Properties</h2>
        {query && <p>Showing results for: {query}</p>}
        {filteredProperties.length > 0 ? (
          <div className="property-list">
            {filteredProperties.map((property, index) => (
              <PropertyCard key={index} property={property} />
            ))}
          </div>
        ) : (
          <p>No results found</p>
        )}
      </div>
    );
  };
  
  export default FilteredPropertiesPage;
