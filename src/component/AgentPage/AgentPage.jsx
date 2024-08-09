import React, { useState} from "react";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./AgentPage.css";

const AgentPage = () => {
  const [agents, setAgents] = useState([
    {
      id: 1,
      name: "Liz-Zanna Owoseni",
      imageUrl: "/images/Zanna2.jpg",
      description:
        "Liz-Zanna Owoseni is a highly experienced real estate agent with over 10 years of expertise in the market. She is known for her exceptional customer service and deep knowledge of the local real estate landscape.",
      phoneNumber: "+234 (803) 504-5649",
      email: "manugee.emanuel@test.com",
    },
    {
      id: 2,
      name: "Gbemiga Sagamu",
      imageUrl: "/images/img2.webp",
      description:
        "Gbemiga Sagamu has been a dedicated real estate agent for over 8 years. He specializes in residential properties and is committed to helping clients find their dream homes with ease and confidence.",
      phoneNumber: "+234 (813) 204-5648",
      email: "gbemiga.sagamu@test.com",
    },
    {
      id: 3,
      name: "Ademide Tech",
      imageUrl: "/images/men-img3.jpg",
      description:
        "Ademide Tech is a seasoned real estate professional with over 15 years of experience. He is known for his expertise in luxury properties and exceptional client service.",
      phoneNumber: "+234 (703) 304-5469",
      email: "ademide.tech@test.com",
    },
    {
      id: 4,
      name: "Ganiyat Omolabake",
      imageUrl: "/images/img15.webp",
      description:
        "Ganiyat Omolabake is a dedicated real estate agent specializing in residential properties. With a keen eye for detail and a passion for helping clients find their dream homes, Jane has built a reputation for her professionalism and integrity.",
      phoneNumber: "+234 (805) 504-9841",
      email: "ganiyat.omolabake@test.com",
    },
    {
      id: 5,
      name: "Lattef Michael",
      imageUrl: "/images/img4.jpg",
      description:
        "Lattef Michael is a dynamic real estate agent known for his strategic approach to buying and selling properties. With a background in marketing, Michael brings a unique perspective to the real estate industry, helping clients achieve their goals effectively.",
      phoneNumber: "+234 (903) 000-5749",
      email: "lattef.michael@test.com",
    },
    {
      id: 6,
      name: "Opeyemi Emily",
      imageUrl: "/images/img13.jpg",
      description:
        "Opeyemi Emily is a top-performing real estate agent with a track record of success. Her attention to detail and commitment to her clients' needs have earned her a reputation as a trusted advisor in the real estate market.",
      phoneNumber: "+234 (803) 504-5649",
      email: "opeyemi.emily@test.com",
    },
    {
      id: 7,
      name: "Quyum David",
      imageUrl: "/images/img5.webp",
      description:
        "Quyum David is a knowledgeable real estate agent who takes pride in delivering exceptional service to his clients. With a background in finance, David offers valuable insights into the financial aspects of real estate transactions.",
      phoneNumber: "+234 (913) 904-4449",
      email: "quyum.david@test.com",
    },
    {
      id: 8,
      name: "Alex Wilson",
      imageUrl: "/images/img6.jpg",
      description:
        "Alex Wilson is a passionate real estate agent dedicated to helping first-time homebuyers navigate the complexities of the real estate market. Her friendly demeanor and patient approach make the home buying process enjoyable and stress-free",
      phoneNumber: "+234 (902) 504-6454",
      email: "alex.wilson@test.com",
    },
    {
      id: 9,
      name: "Owoseni Motunrayo",
      imageUrl: "/images/img7.jpg",
      description:
        "Owoseni Motunrayo is a results-driven real estate agent known for his strong negotiation skills and strategic marketing tactics. With a focus on delivering exceptional results for his clients, Mark has built a reputation as a trusted advisor in the industry",
      phoneNumber: "+234 (706) 604-5670",
      email: "owoseni.motunrayo@test.com",
    },
    {
      id: 10,
      name: "Tomiwa Tallest",
      imageUrl: "/images/img15.webp",
      description:
        "Tomiwa Tallest is a bilingual real estate agent fluent in English and Spanish. Her ability to communicate effectively with a diverse range of clients has made her a sought-after agent in multicultural communities.",
      phoneNumber: "+234 (703) 084-8474",
      email: "tomiwa.tallest@test.com",
    },
    {
      id: 11,
      name: "Mimi Smith",
      imageUrl: "/images/img14.png",
      description:
        "Mimi Smith is a tech-savvy real estate agent who leverages the latest technologies to streamline the buying and selling process for his clients. His innovative approach sets him apart in the competitive real estate market.",
      phoneNumber: "+234 (8145) 099-5693",
      email: "mimi.smith@test.com",
    },
    {
      id: 12,
      name: "Robert Bobby",
      imageUrl: "/images/img9.jpg",
      description:
        "Robert Bobby is a dedicated real estate agent with a passion for helping families find their perfect home. Her personalized approach and deep knowledge of the local market make her a valuable asset to her clients.",
      phoneNumber: "+234 (80) 123-45649",
      email: "robert.bobby@test.com",
    },
  ]);

  const [selectedAgent, setSelectedAgent] = useState(null);

  const handleAgentClick = (agent) => {
    setSelectedAgent(agent);
  };

  const handleCloseModal = () => {
    setSelectedAgent(null);
  };

  const handlePhoneClick = (phoneNumber) => {
    // You can implement your logic here to handle phone number click
    window.location.href = `tel:${phoneNumber}`;
  };

  const handleEmailClick = (email) => {
    // You can implement your logic here to handle email click
    window.location.href = `mailto:${email}`;
  };

  return (
    <div className="agent-page11">
      <h1 className="agent-page-title11">Our Agents</h1>
      <div className="agent-list11">
        {agents.map((agent) => (
          <div
            className="agent-card11"
            key={agent.id}
            onClick={() => handleAgentClick(agent)}
          >
            <img src={agent.imageUrl} alt={agent.name} className="agent-image11" />
            <h2 className="agent-name11">{agent.name}</h2>
          </div>
        ))}
      </div>

      {selectedAgent && (
        <div className="agent-modal11" onClick={handleCloseModal}>
          <div
            className="agent-modal-content11"
            onClick={(e) => e.stopPropagation()}
          >
            <span className="agent-modal-close11" onClick={handleCloseModal}>
              &times;
            </span>
            <img
              src={selectedAgent.imageUrl}
              alt={selectedAgent.name}
              className="agent-modal-image11"
            />
            <h2 className="agent-name11">{selectedAgent.name}</h2>
            <p className="agent-description11">{selectedAgent.description}</p>
            <div className="agent-contact11">
              <p
                className="agent-contact-link11"
                onClick={() => handlePhoneClick(selectedAgent.phoneNumber)}
              >
                <FontAwesomeIcon icon={faPhone} /> {selectedAgent.phoneNumber}
              </p>
              <p
                className="agent-contact-link11"
                onClick={() => handleEmailClick(selectedAgent.email)}
              >
                <FontAwesomeIcon icon={faEnvelope} /> {selectedAgent.email}
              </p>
            </div>
            <button className="back-button11" onClick={handleCloseModal}>
              Back
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AgentPage;