import React, { useState} from "react";
import ScrollToTop from "./component/ScrollHook/useScrollToTop";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navabar/Navbar";
import Shop from "./component/Shop/Shop";
import About from "./component/About/About";
import ContactPage from './component/Contact/ContactPage';
import HomePage from "./component/HomePage/HomePage";
import Footer from "./component/Footer/Footer";
import GuidePage from "./component/Guide/GuidePage";
import AgentPage from "./component/AgentPage/AgentPage";
import CareerPage from "./component/CareerPage/CareerPage";
import Filters from "./component/FilterPage/FilterPage";
import EcomProvider from "./context/EcomContext";
import FilteredPropertiesPage from "./component/FilteredPropertiesPage/FilteredPropertiesPage";
import PropertyList from "./component/PropertyList/PropertyList"
import PropertyData from "./PropertyData/db.json";
import PropertyPage from "./component/PropertyPage/PropertyPage"
import FAQ from "./component/FAQ/FAQ";
import Terms from "./component/Terms/Terms";
import ExplorePage from "./component/Explore/Explore";

function App() {
  const [filteredProperties, setFilteredProperties] = useState([]);
  const propertiesData = PropertyData; // Define propertiesData here
  const [properties, setProperties] = useState(propertiesData.properties);

  const handleFiltersChange = (filteredProperties) => {
    setFilteredProperties(filteredProperties);
  };

  // Example of updating the properties state
  const updateProperties = () => {
    // Fetch new properties data or modify the existing data
    const newProperties = [
      // ... new properties array
    ];
    setProperties(newProperties);
  };

  return (
    <>
      <EcomProvider>
        <Router>
          <ScrollToTop />
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/guide" element={<GuidePage />} />
            <Route path="/agent-page" element={<AgentPage />} />
            <Route path="/career-page" element={<CareerPage />} />
            <Route path="/filter" element={<Filters properties={properties} onFiltersChange={handleFiltersChange} />} />
            <Route path="/property-list" element={<PropertyList />} />
            <Route path="/property-page" element={<PropertyPage />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/explore" element={<ExplorePage />} />
            <Route path="/filtered-properties" element={<FilteredPropertiesPage filteredProperties={filteredProperties} />} />
          </Routes>
          <Footer />
        </Router>
      </EcomProvider>
    </>
  );
}

export default App;