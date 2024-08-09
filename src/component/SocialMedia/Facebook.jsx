import React from "react";
import "../SocialMedia/SocialMedia.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";


const Facebook = () => {
  return (
    <a href="https://web.facebook.com/messages/t/100021469034943/" className="social-media-icon">
      <FontAwesomeIcon icon={faFacebook} />
    </a>
  );
};

export default Facebook;
