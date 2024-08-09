import React from "react";
import { NavLink } from "react-router-dom";
import Facebook from "../SocialMedia/Facebook";
import Twitter from "../SocialMedia/Twitter";
import Instagram from "../SocialMedia/Instagram";
import YouTube from "../SocialMedia/YouTube";
import "./Footer.css";



const Footer = () => {
    return (
      <div className="footer">
        <div className="footer-container">
          <div className="footer-navigation">
            <h4>Navigation</h4>
            <ul>
              <li>
                <NavLink to="/" className="nav-link">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/shop" className="nav-link">
                  Shop
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className="nav-link">
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="nav-link">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
  
          <div className="footer-guide">
            <h4>Helpful Links</h4>
            <ul>
              <li>
                <NavLink to="/guide" className="nav-link">
                  Real Estate Guide
                </NavLink>
              </li>
            </ul>
            <ul>
              <li>
                <NavLink to="/agent-page" className="nav-link">
                  Our Agent
                </NavLink>
              </li>
            </ul>
            <ul>
              <li>
                <NavLink to="/career-page" className="nav-link">
                  Our Career
                </NavLink>
              </li>
            </ul>
            <ul>
              <li>
                <NavLink to="/filter" className="nav-link">
                  Filter
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="footer-property">
            <h4>Prospect</h4>
            <ul>
            <li>
              <NavLink to="/property-page" className="nav-link">
                Properties
              </NavLink>
            </li>
            </ul>
            <ul>
              <li>
                <NavLink to="/property-list" className="nav-link">
                  Our List
                </NavLink>
              </li>
            </ul>
            <ul>
              <li>
                <NavLink to="/faq" className="nav-link">
                  FAQ
                </NavLink>
              </li>
            </ul>
            <ul>
              <li>
                <NavLink to="/terms" className="nav-link">
                  Terms
                </NavLink>
              </li>
            </ul>
            <ul>
              <li>
                <NavLink to="/explore" className="nav-link">
                  Explore
                </NavLink>
              </li>
            </ul>
          </div>
  
          <div className="footer-social-media">
            <h4>Follow Us</h4>
            <div className="footer-social-media-icons">
              <Facebook />
              <Twitter />
              <Instagram />
              <YouTube />
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Roadrunner Enterprises. All rights reserved.</p>
        </div>
      </div>
    );
  };
  
  export default Footer;