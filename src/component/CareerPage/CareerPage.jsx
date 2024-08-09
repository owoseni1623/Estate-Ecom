import React, { useState} from "react";
import { useNavigate } from "react-router-dom";
import "./CareerPage.css";

const careers = [
  {
    name: "John Doe",
    title: "Real Estate Agent",
    image: "/images/img25.avif",
    email: "agent@example.com",
    phone: "(123) 456-7890",
    description: "As a Real Estate Agent, you'll be responsible for representing buyers and sellers in real estate transactions. Your primary duties will include marketing properties, negotiating deals, and guiding clients through the buying or selling process."
  },
  {
    name: "Jane Smith",
    title: "Property Manager",
    image: "/images/img14.png",
    email: "manager@example.com",
    phone: "(123) 456-7890",
    description: "The Property Manager role involves overseeing the day-to-day operations of residential or commercial properties. Your responsibilities will include managing maintenance, collecting rent, addressing tenant concerns, and ensuring compliance with regulations."
  },
  {
    name: "Michael Johnson",
    title: "Marketing Coordinator",
    image: "/images/img15.webp",
    email: "marketing@example.com",
    phone: "(123) 456-7890",
    description: "As a Marketing Coordinator, you'll be responsible for promoting our real estate services and listings through various marketing channels. Your duties will include creating marketing materials, managing social media campaigns, and developing effective marketing strategies."
  },
  {
    name: "Emily Davis",
    title: "Office Administrator",
    image: "/images/img7.jpg",
    email: "admin@example.com",
    phone: "(123) 456-7890",
    description: "The Office Administrator role involves providing administrative support to ensure the smooth operation of our real estate office. Your responsibilities will include managing office supplies, handling correspondence, scheduling appointments, and assisting with various administrative tasks."
  },
  {
    name: "David Wilson",
    title: "Receptionist",
    image: "/images/img6.jpg",
    email: "receptionist@example.com",
    phone: "(123) 456-7890",
    description: "As a Receptionist, you'll be the first point of contact for our clients and visitors. Your duties will include greeting guests, answering phone calls, managing appointment schedules, and providing excellent customer service."
  },
  {
    name: "David Beck",
    title: "Accountant",
    image: "/images/img5.webp",
    email: "accountant@example.com",
    phone: "(123) 456-7890",
    description: "The Accountant role involves managing the financial records and transactions of our real estate company. Your responsibilities will include preparing financial statements, maintaining accounting records, analyzing financial data, and ensuring compliance with accounting standards and regulations."
  },
  {
    name: "Robert Anderson",
    title: "IT Support Specialist",
    image: "/images/img13.jpg",
    email: "itsupport@example.com",
    phone: "(123) 456-7890",
    description: "As an IT Support Specialist, you'll be responsible for providing technical assistance and maintaining the company's computer systems and networks. Your duties will include troubleshooting hardware and software issues, implementing security measures, and ensuring the smooth operation of our technological infrastructure."
  },
  {
    name: "Anthony More",
    title: "Human Resources Manager",
    image: "/images/img4.jpg",
    email: "hr@example.com",
    phone: "(123) 456-7890",
    description: "The Human Resources Manager role involves overseeing the recruitment, training, and development of our workforce. Your responsibilities will include managing employee relations, implementing HR policies and procedures, and ensuring compliance with labor laws and regulations."
  },
  {
    name: "John Wilson",
    title: "Sales Representative",
    image: "/images/img1.jpg",
    email: "sales@example.com",
    phone: "(123) 456-7890",
    description: "As a Sales Representative, you'll be responsible for generating new business opportunities and closing real estate transactions. Your duties will include prospecting for potential clients, conducting property showings, negotiating deals, and providing exceptional customer service."
  },
  {
    name: "Mariam Brown",
    title: "Graphic Designer",
    image: "/images/img10.jpg",
    email: "design@example.com",
    phone: "(123) 456-7890",
    description: "The Graphic Designer role involves creating visually appealing designs and marketing materials for our real estate company. Your responsibilities will include developing brand identities, designing print and digital collateral, and ensuring consistency across all marketing channels."
  },
  {
    name: "Emily Taylor",
    title: "Customer Service Representative",
    image: "/images/img11.jpg",
    email: "support@example.com",
    phone: "(123) 456-7890",
    description: "As a Customer Service Representative, you'll be responsible for providing exceptional support and assistance to our clients. Your duties will include answering inquiries, resolving issues, and ensuring a positive customer experience throughout the buying or selling process."
  },
  {
    name: "Chris Mitchell",
    title: "Leasing Consultant",
    image: "/images/men-img1.webp",
    email: "leasing@example.com",
    phone: "(123) 456-7890",
    description: "The Leasing Consultant role involves assisting prospective tenants in finding suitable rental properties. Your responsibilities will include conducting property tours, processing lease applications, and maintaining positive relationships with tenants."
  }
];

const CareerPage5 = () => {
  const [selectedCareer, setSelectedCareer] = useState(null);
  const navigate = useNavigate();

  const handleCardClick = (career) => {
    setSelectedCareer(career);
  };

  const closeModal = () => {
    setSelectedCareer(null);
  };

  return (
    <div className="career-container5">
      <h2 className="career-heading5">Explore Careers at Roadrunner Homes</h2>
      <h3 className="career-subheading5">OUR DREAM</h3>
      <p className="career-text5">
        Welcome to our career page! We are passionate about real estate and dedicated to providing exceptional service to our clients. We believe in fostering a positive and inclusive work environment where our employees can thrive and achieve their professional goals. Join us in delivering exceptional service and making a difference in the real estate industry.
      </p>
      <h3 className="career-subheading5">OUR VALUES</h3>
      <p className="career-text5">
        At our company, we value integrity, innovation, and collaboration. We provide comprehensive training and development programs to help you succeed in your role. Whether you're just starting your career or looking to take the next step, we offer a range of positions to suit your skills and ambitions.
      </p>
      <div className="career-card-container5">
        {careers.map((career, index) => (
          <div key={index} className="career-card5" onClick={() => handleCardClick(career)}>
            <img src={career.image} alt={career.name} className="career-card-image5" />
            <h3 className="career-card-title5">{career.name}</h3>
            <p className="career-card-title5">{career.title}</p>
          </div>
        ))}
      </div>
      {selectedCareer && (
        <div className="modal-overlay5">
          <div className="modal-content5">
            <span className="modal-close5" onClick={closeModal}>&times;</span>
            <img src={selectedCareer.image} alt={selectedCareer.name} className="modal-image5" />
            <h3 className="modal-title5">{selectedCareer.name}</h3>
            <p className="modal-details5">Title: {selectedCareer.title}</p>
            <p className="modal-details5">Email: {selectedCareer.email}</p>
            <p className="modal-details5">Phone: {selectedCareer.phone}</p>
            <p className="modal-details5">{selectedCareer.description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default CareerPage5;
