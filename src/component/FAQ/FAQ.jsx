import React from "react";
import "./FAQ.css";

const FAQ = () => {
  return (
    <div className="faq-container3">
      <h1 className="faq-heading3">Frequently Asked Questions</h1>

      <div className="faq-content3">
        <div className="faq-section3">
          <h2 className="faq-question3">How do I search for properties?</h2>
          <p className="faq-answer3">
            You can search for properties by using the search bar on our website. You can filter your search by location, price range, property type, and other criteria.
          </p>
          <h2 className="faq-question3">Do you provide virtual tours?</h2>
          <p className="faq-answer3">
            Yes, we offer virtual tours for many of our listed properties. You can find the virtual tour link on the property details page.
          </p>
        </div>
        <div className="faq-image-container3">
          <img src="/images/property29.jpg" alt="FAQ" className="faq-image3" />
        </div>
      </div>

      <div className="faq-content3">
        <div className="faq-section3">
          <h2 className="faq-question3">What is the process for buying a property?</h2>
          <p className="faq-answer3">
            The process for buying a property involves several steps: searching for properties, scheduling viewings, making an offer, getting a home inspection, securing financing, and closing the deal. Our agents will guide you through each step.
          </p>
          <h2 className="faq-question3">Are there any additional fees when purchasing a property?</h2>
          <p className="faq-answer3">
            Yes, there are additional fees such as closing costs, which may include appraisal fees, attorney fees, and title insurance. Your agent will provide a detailed breakdown of these costs.
          </p>
          <h2 className="faq-question3">Can I sell my property through your website?</h2>
          <p className="faq-answer3">
            Yes, you can list your property for sale on our website. Please contact our sales team to get started and they will guide you through the listing process.
          </p>
        </div>
        <div className="faq-image-container3">
          <img src="/images/property30.jpg" alt="FAQ" className="faq-image3" />
        </div>
      </div>
    </div>
  );
};

export default FAQ;
