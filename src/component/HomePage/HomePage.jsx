import React, { useState } from "react";
import "./HomePage.css";
import ImageOne from "/images/property7.jpg";
import ImageTwo from "/images/property8.jpg";

const ImageInfo = ({ image, onClose }) => {
  let content;

  switch (image) {
    case ImageOne:
      content = (
        <>
          <h2>Modern Masterpiece</h2>
          <p>
            This stunning modern home features sleek lines, open spaces, and cutting-edge design elements. With its minimalist aesthetic and high-end finishes, it offers a truly luxurious living experience.
          </p>
        </>
      );
      break;
    case ImageTwo:
      content = (
        <>
          <h2>Tropical Paradise</h2>
          <p>
            Escape to this tropical oasis, where lush gardens and serene water features create a tranquil retreat. Designed with indoor-outdoor living in mind, this home seamlessly blends nature and modern comfort.
          </p>
        </>
      );
      break;
    default:
      content = null;
  }

  return (
    <div className="info-overlay">
      <div className="info-content">
        <span className="close-btn" onClick={onClose}>
          &times;
        </span>
        <img src={image} alt="Home" className="small-image" />
        {content}
        <button className="back-btn" onClick={onClose}>Back</button>
      </div>
    </div>
  );
};

const HomePage = () => {
  const [showInfo, setShowInfo] = useState(null);

  const handleImageClick = (image) => {
    setShowInfo(image);
  };

  const handleCloseInfo = () => {
    setShowInfo(null);
  };

  return (
    <>
      {/* HomePage */}
      <div className="slider-container">
        <div className="slider">
          <div className="slide">
            <img src="images/property1.jpg" alt="Slide 1" />
          </div>
          <div className="slide">
            <img src="images/property2.jpg" alt="Slide 2" />
          </div>
          <div className="slide">
            <img src="images/property3.jpg" alt="Slide 3" />
          </div>
          <div className="slide">
            <img src="images/property4.jpg" alt="Slide 4" />
          </div>
        </div>
        <div className="arrow prev">&#8249;</div>
        <div className="arrow next">&#8250;</div>
      </div>

      {/* HomePage2 */}
      <div className="home-page-container">
        <div className="home-page-section">
          <div className="home-page-content">
            <h1>Explore our beautiful homes</h1>
            <p>
              Discover the elegance and charm of our meticulously designed homes, where every detail is crafted to perfection. Each home offers a unique blend of luxury and comfort, ensuring a serene living experience.
            </p>
            <p>
              From spacious living areas to state-of-the-art amenities, our homes are designed to cater to all your needs. Experience the joy of living in a space that truly feels like home.
            </p>
            <button onClick={() => handleImageClick(ImageOne)}>View Homes</button>
          </div>
          <div
            className="home-page-image-container"
            onClick={() => handleImageClick(ImageOne)}
          >
            <div className="home-page-image">
              <img src={ImageOne} alt="Home" />
            </div>
          </div>
        </div>

        <div className="home-page-section reverse">
          <div className="home-page-content">
            <h1>Modern Designs</h1>
            <p>
              Step into the future with our modern home designs that combine sleek aesthetics with practical functionality. Our homes feature contemporary architecture and innovative design elements.
            </p>
            <p>
              Embrace a lifestyle of sophistication and convenience with our thoughtfully planned layouts and cutting-edge features. Live in a home that reflects your taste and style.
            </p>
            <button onClick={() => handleImageClick(ImageTwo)}>View Homes</button>
          </div>
          <div
            className="home-page-image-container"
            onClick={() => handleImageClick(ImageTwo)}
          >
            <div className="home-page-image">
              <img src={ImageTwo} alt="Home" />
            </div>
          </div>
        </div>
      </div>

      {showInfo && <ImageInfo image={showInfo} onClose={handleCloseInfo} />}
    </>
  );
};

export default HomePage;