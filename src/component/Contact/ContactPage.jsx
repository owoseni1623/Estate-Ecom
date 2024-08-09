import React, { useState } from "react";
import "./ContactPage.css";
import { FaEnvelope, FaPhone } from "react-icons/fa";



const ContactPage6 = () => {
  const [selectedMember, setSelectedMember] = useState(null);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [formStatus, setFormStatus] = useState(""); // State to track form submission status

  const teamMembers = [
    {
      id: 1,
      name: "John Doe",
      position: "CEO",
      email: "john.doe@example.com",
      phone: "+1234567890",
      imageUrl: "images/men-img5.jpg",
      description: "John is the founder and CEO of Roadrunner Homes. With over 20 years of experience in real estate, he leads the company with a vision for innovation and excellence. He is passionate about delivering the best services to our clients and ensuring their satisfaction."
    },
    {
      id: 2,
      name: "Jane Smith",
      position: "CTO",
      email: "jane.smith@example.com",
      phone: "+1234567890",
      imageUrl: "images/women-img9.jpg",
      description: "Jane is the Chief Technology Officer, ensuring that Roadrunner Homes stays at the forefront of technological advancements in the real estate industry. She has a background in software engineering and a keen interest in implementing new technologies to improve our services."
    },
    {
      id: 3,
      name: "Sarah Johnson",
      position: "CFO",
      email: "sarah.johnson@example.com",
      phone: "+1234567890",
      imageUrl: "images/women-img8.webp",
      description: "Sarah manages the financial operations of Roadrunner Homes, bringing a wealth of experience in finance and strategy. She is dedicated to maintaining the financial health of the company and overseeing our financial planning and analysis."
    },
    {
      id: 4,
      name: "Michael Brown",
      position: "COO",
      email: "michael.brown@example.com",
      phone: "+1234567890",
      imageUrl: "images/men-img4.jpg",
      description: "Michael oversees the daily operations of Roadrunner Homes, ensuring everything runs smoothly and efficiently. His background in operations management has been instrumental in streamlining our processes and improving customer satisfaction."
    },
    {
      id: 5,
      name: "Emily Davis",
      position: "CMO",
      email: "emily.davis@example.com",
      phone: "+1234567890",
      imageUrl: "images/women-img7.jpg",
      description: "Emily is the Chief Marketing Officer, responsible for the company's marketing strategies and campaigns. Her creative approach and expertise in digital marketing have significantly boosted our brand presence and client engagement."
    },
    {
      id: 6,
      name: "David Wilson",
      position: "Head of Sales",
      email: "david.wilson@example.com",
      phone: "+1234567890",
      imageUrl: "images/men-img3.jpg",
      description: "David leads our sales team with a focus on client relationships and satisfaction. His extensive experience in real estate sales and deep understanding of market trends help us offer the best deals to our clients."
    },
    {
      id: 7,
      name: "Jessica Taylor",
      position: "Head of Customer Service",
      email: "jessica.taylor@example.com",
      phone: "+1234567890",
      imageUrl: "images/women-img6.jpg",
      description: "Jessica manages our customer service department, ensuring that every client receives exceptional support. Her dedication to customer satisfaction has earned us a reputation for excellent service and care."
    },
    {
      id: 8,
      name: "Daniel Anderson",
      position: "Chief Legal Officer",
      email: "daniel.anderson@example.com",
      phone: "+1234567890",
      imageUrl: "images/men-img2.jpg",
      description: "Daniel oversees all legal aspects of our business, ensuring compliance with regulations and protecting our company's interests. His expertise in real estate law is invaluable to our operations."
    },
    {
      id: 9,
      name: "Laura Martinez",
      position: "Head of Human Resources",
      email: "laura.martinez@example.com",
      phone: "+1234567890",
      imageUrl: "images/women-img3.jpg",
      description: "Laura is responsible for our human resources strategies and employee relations. Her efforts in talent acquisition and employee development help us maintain a motivated and skilled workforce."
    },
    {
      id: 10,
      name: "Olivia Garcia",
      position: "Head of Marketing",
      email: "olivia.garcia@example.com",
      phone: "+1234567890",
      imageUrl: "images/women-img1.jpg",
      description: "Olivia oversees all marketing efforts at Roadrunner Homes, creating and implementing strategies that drive brand awareness and client engagement. She brings over 10 years of marketing experience to the team."
    },
    {
      id: 11,
      name: "William Robinson",
      position: "Head of Development",
      email: "william.robinson@example.com",
      phone: "+1234567890",
      imageUrl: "images/men-img1.webp",
      description: "William leads our development projects, ensuring all construction and development activities meet the highest standards. His attention to detail and project management skills have been key to our successful developments."
    },
    {
      id: 12,
      name: "Sophia Martinez",
      position: "Head of Design",
      email: "sophia.martinez@example.com",
      phone: "+1234567890",
      imageUrl: "images/women-img4.jpg",
      description: "Sophia oversees all design aspects of our projects, from conceptualization to execution. Her creative vision and expertise in architecture and interior design ensure our properties are both functional and aesthetically pleasing."
    }
  ];

  const handleImageClick = (member) => {
    setSelectedMember(member);
  };

  const handleModalClose = () => {
    setSelectedMember(null);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus("Submitting...");

    try {
      const response = await fetch("https://formspree.io/YOUR_FORM_ID", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setFormStatus("Failed to send message.");
      }
    } catch (error) {
      setFormStatus("An error occurred. Please try again.");
    }
  };

  return (
    <div className="rr-contact-container6">
      <h1 className="rr-contact-heading6">Contact Roadrunner Homes</h1>
      <section className="rr-contact-form-section6">
        <h2 className="rr-contact-form-heading6">Get in Touch</h2>
        <form className="rr-contact-form6" onSubmit={handleSubmit}>
          <div className="rr-contact-form-group6">
            <label htmlFor="name" className="rr-contact-label6">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              className="rr-contact-input6"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="rr-contact-form-group6">
            <label htmlFor="email" className="rr-contact-label6">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              className="rr-contact-input6"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="rr-contact-form-group6">
            <label htmlFor="message" className="rr-contact-label6">Message:</label>
            <textarea
              id="message"
              name="message"
              className="rr-contact-input6"
              value={formData.message}
              onChange={handleInputChange}
              required
            ></textarea>
          </div>
          <button type="submit" className="rr-submit-button6">Submit</button>
        </form>
        {formStatus && <p className="rr-form-status">{formStatus}</p>}
      </section>
      <section className="rr-team-section6">
        <h2 className="rr-team-heading6">Meet the Team</h2>
        <div className="rr-team-grid6">
          {teamMembers.map((member) => (
            <div key={member.id} className="rr-team-card6">
              <img
                src={member.imageUrl}
                alt={member.name}
                className="rr-team-image6"
                onClick={() => handleImageClick(member)}
              />
              <h3>{member.name}</h3>
              <h4>{member.position}</h4>
              <div className="rr-icons6">
                <a href={`mailto:${member.email}`} className="rr-email-icon6">
                  <FaEnvelope />
                </a>
                <a href={`tel:${member.phone}`} className="rr-phone-icon6">
                  <FaPhone />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
      {selectedMember && (
        <div className="property-modal" onClick={handleModalClose}>
          <div className="property-modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="property-modal-close" onClick={handleModalClose}>&times;</span>
            <img src={selectedMember.imageUrl} alt={selectedMember.name} className="property-modal-image" />
            <div className="property-modal-info">
              <h2 className="property-name">{selectedMember.name}</h2>
              <h3 className="property-price">{selectedMember.position}</h3>
              <p className="property-description">{selectedMember.description}</p>
              <button onClick={handleModalClose} className="rr-back-button6">Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactPage6;

