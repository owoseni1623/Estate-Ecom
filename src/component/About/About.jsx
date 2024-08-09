import React, { useState} from "react";
import "./About.css";

const About = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  const teamMembers = [
    {
      id: 1,
      name: "John Doe",
      position: "CEO",
      imageUrl: "images/img1.jpg",
      description:
        "John is the founder and CEO of Roadrunner Homes. With over 20 years of experience in real estate, he leads the company with a vision for innovation and excellence. He is passionate about delivering the best services to our clients and ensuring their satisfaction.",
      phoneNumber: "+1234567890",
      email: "john.doe@roadrunnerhomes.com",
    },
    {
      id: 2,
      name: "Jane Smith",
      position: "CTO",
      imageUrl: "images/img12.jpeg",
      description:
        "Jane is the Chief Technology Officer, ensuring that Roadrunner Homes stays at the forefront of technological advancements in the real estate industry. She has a background in software engineering and a keen interest in implementing new technologies to improve our services.",
      phoneNumber: "+1234567891",
      email: "jane.smith@roadrunnerhomes.com",
    },
    {
      id: 3,
      name: "Sarah Johnson",
      position: "CFO",
      imageUrl: "images/img13.jpg",
      description:
        "Sarah manages the financial operations of Roadrunner Homes, bringing a wealth of experience in finance and strategy. She is dedicated to maintaining the financial health of the company and overseeing our financial planning and analysis.",
      phoneNumber: "+1234567892",
      email: "sarah.johnson@roadrunnerhomes.com",
    },
    {
      id: 4,
      name: "Michael Brown",
      position: "COO",
      imageUrl: "images/img2.webp",
      description:
        "Michael oversees the daily operations of Roadrunner Homes, ensuring everything runs smoothly and efficiently. His background in operations management has been instrumental in streamlining our processes and improving customer satisfaction.",
      phoneNumber: "+1234567893",
      email: "michael.brown@roadrunnerhomes.com",
    },
    {
      id: 5,
      name: "Emily Davis",
      position: "CMO",
      imageUrl: "images/img11.jpg",
      description:
        "Emily is the Chief Marketing Officer, responsible for the company's marketing strategies and campaigns. Her creative approach and expertise in digital marketing have significantly boosted our brand presence and client engagement.",
      phoneNumber: "+1234567894",
      email: "emily.davis@roadrunnerhomes.com",
    },
    {
      id: 6,
      name: "David Wilson",
      position: "Head of Sales",
      imageUrl: "images/men-img.jpg",
      description:
        "David leads our sales team with a focus on client relationships and satisfaction. His extensive experience in real estate sales and deep understanding of market trends help us offer the best deals to our clients.",
      phoneNumber: "+1234567895",
      email: "david.wilson@roadrunnerhomes.com",
    },
    {
      id: 7,
      name: "Jessica Taylor",
      position: "Head of Customer Service",
      imageUrl: "images/img10.jpg",
      description:
        "Jessica manages our customer service department, ensuring that every client receives exceptional support. Her dedication to customer satisfaction has earned us a reputation for excellent service and care.",
      phoneNumber: "+1234567896",
      email: "jessica.taylor@roadrunnerhomes.com",
    },
    {
      id: 8,
      name: "Daniel Anderson",
      position: "Chief Legal Officer",
      imageUrl: "images/img4.jpg",
      description:
        "Daniel oversees all legal aspects of our business, ensuring compliance with regulations and protecting our company's interests. His expertise in real estate law is invaluable to our operations.",
      phoneNumber: "+1234567897",
      email: "daniel.anderson@roadrunnerhomes.com",
    },
    {
      id: 9,
      name: "Laura Martinez",
      position: "Head of Human Resources",
      imageUrl: "images/women-img.jpeg",
      description:
        "Laura is responsible for our human resources strategies and employee relations. Her efforts in talent acquisition and employee development help us maintain a motivated and skilled workforce.",
      phoneNumber: "+1234567898",
      email: "laura.martinez@roadrunnerhomes.com",
    },
    {
      id: 10,
      name: "Olivia Garcia",
      position: "Head of Marketing",
      imageUrl: "images/img8.webp",
      description:
        "Olivia oversees all marketing efforts at Roadrunner Homes, creating and implementing strategies that drive brand awareness and client engagement. She brings over 10 years of marketing experience to the team.",
      phoneNumber: "+1234567899",
      email: "olivia.garcia@roadrunnerhomes.com",
    },
    {
      id: 11,
      name: "William Robinson",
      position: "Head of Development",
      imageUrl: "images/img5.webp",
      description:
        "William leads our development projects, ensuring all construction and development activities meet the highest standards. His attention to detail and project management skills have been key to our successful developments.",
      phoneNumber: "+1234567800",
      email: "william.robinson@roadrunnerhomes.com",
    },
    {
      id: 12,
      name: "Roy Martinez",
      position: "Head of Design",
      imageUrl: "images/img1.jpg",
      description:
        "Roy oversees all design aspects of our projects, from conceptualization to execution. Her creative vision and expertise in architecture and interior design ensure our properties are both functional and aesthetically pleasing.",
      phoneNumber: "+1234567801",
      email: "roy.martinez@roadrunnerhomes.com",
    },
  ];

  const handleImageClick = (member) => {
    setSelectedMember(member);
  };

  const handleBackClick = () => {
    setSelectedMember(null);
  };

  const closeModal = (event) => {
    if (event.target === event.currentTarget) {
      handleBackClick();
    }
  };

  return (
    <div className="about-container7">
      <h1 className="about-heading7">About Roadrunner Homes</h1>
      <section className="about-section7">
        <h2>Our Mission</h2>
        <p>
          At Roadrunner Homes, our mission is to provide exceptional real estate services, helping our clients find their dream homes with ease and confidence. We are committed to delivering the highest level of service and integrity in every transaction.
        </p>
      </section>
      <section className="about-section7">
        <h2>Our Vision</h2>
        <p>
          Our vision is to be the leading real estate company, recognized for our innovative approach, customer satisfaction, and commitment to excellence. We aim to set new standards in the real estate industry and continuously improve our services to meet the evolving needs of our clients.
        </p>
      </section>
      <section className="about-section7">
        <h2>Meet the Team</h2>
        <div className="team-grid7">
          {teamMembers.map((member) => (
            <div key={member.id} className="team-card7" onClick={() => handleImageClick(member)}>
              <img
                src={member.imageUrl}
                alt={member.name}
                className="team-image7"
              />
              <h3>{member.name}</h3>
              <h4>{member.position}</h4>
            </div>
          ))}
        </div>
      </section>

      {selectedMember && (
        <div className="member-modal-overlay7" onClick={closeModal}>
          <div className="member-modal7">
            <span className="member-modal-close7" onClick={handleBackClick}>&times;</span>
            <img
              src={selectedMember.imageUrl}
              alt={selectedMember.name}
              className="member-modal-image7"
            />
            <h2 className="member-modal-name7">{selectedMember.name}</h2>
            <p className="member-modal-position7">{selectedMember.position}</p>
            <p className="member-modal-description7">{selectedMember.description}</p>
            <div className="member-modal-contact7">
              <p className="member-modal-phone7"><strong>Phone:</strong> {selectedMember.phoneNumber}</p>
              <p className="member-modal-email7"><strong>Email:</strong> {selectedMember.email}</p>
            </div>
            <button className="back-button7" onClick={handleBackClick}>Back</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default About;
